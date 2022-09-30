const validateProperty = (target, prop) => {
    if (!(prop in target)) {
      throw new Error('Error');
    }
    if (prop.startsWith('_')) {
      throw new Error('Error');
    }
  }
  
  const protect = (obj) => {
    const protectedObj = new Proxy(obj, {
      get: (target, prop) => {
        validateProperty(target, prop);
        const property = target[prop];
        return (typeof property === 'function'? property.bind(obj) : property);
      },
      set : (target, prop, value) => {
        validateProperty(target, prop);
        target[prop] = value;
        return true;
      }
    })
    return protectedObj;
  }
  export default protect;