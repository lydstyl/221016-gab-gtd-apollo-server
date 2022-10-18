const User = `
type User {
    email: String
    encryptedPassword: String
}
`
const userQueries = `
    getUsers: [User]
`
const userMutations = `
    addUser(email: String, password: String): User
    deleteUser(email: String): User
`

export { User, userQueries, userMutations }
