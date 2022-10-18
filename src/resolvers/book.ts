import Book from "../models/Book.js"

// Query
const getBooks = async () => {
    const result = await Book.find()
    return result
}

// Mutation
const addBook = (_, { title, author }) => {
    // parent and args ?
    const newItem = new Book({
        title,
        author,
    })
    newItem.save()
    return newItem
}
const deleteBook = async (_, { id }) => {
    const result = await Book.findByIdAndRemove(id)
    return result
}

export { getBooks, addBook, deleteBook }
