const student = {
    name: 'Paul',
    age: '23',
    course: 'frontend developer'
}

const rewrite = new Proxy(student, {
    set (target, prop, value) {
        if (prop in target) {
            target[prop] = value;
            return true;
        }
        else {
            throw new Error(`Cannot rewrite non-exosting prop: ${prop}`)
        }
    }
})


rewrite.age = '24';
rewrite.coutry = 'Russia';