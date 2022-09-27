import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

export default (books) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive(),
    link: yup.string().min(1).url(),
    genre: yup.string().oneOf(genres)
  })
  const invalidBooks = books.filter((book) => !schema.isValidSync(book));
  return invalidBooks;
}