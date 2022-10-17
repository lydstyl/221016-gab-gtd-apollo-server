import Book from "../models/Book.js"

const resolvers = {
    Query: {
        getBooks: async () => {
            const result = await Book.find()
            return result
        },
    },
    Mutation: {
        addBook: (_, { title, author }) => {
            // parent and args ?
            const newItem = new Book({
                title,
                author,
            })
            newItem.save()
            return newItem
        },
        deleteBook: async (_, { id }) => {
            const result = await Book.findByIdAndRemove(id)
            return result
        },
    },
}

export default resolvers
