const Book = `
type Book {
    id:ID
    title: String
    author: String
}
`
const bookQueries = `
    getBooks: [Book]
`
const bookMutations = `
    addBook(title: String, author: String): Book
    deleteBook(id: String): Book
`

export { Book, bookQueries, bookMutations }
