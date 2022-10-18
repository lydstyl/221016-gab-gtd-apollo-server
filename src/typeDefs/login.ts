const Login = `
type Login {
    email: String
    password: String
}
type Token {
    token: String
}
`
const loginQueries = `
    login(email: String, password: String): Token
`
// const userMutations = `
//     addUser(email: String, password: String): User
//     deleteUser(id: String): User
// `

export { Login, loginQueries }
