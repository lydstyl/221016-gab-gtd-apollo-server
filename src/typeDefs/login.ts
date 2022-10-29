const Login = `
type Login {
    user: String
    token: String
}
`
const loginQueries = `
    login(email: String, password: String): Login
`
// const userMutations = `
//     addUser(email: String, password: String): User
//     deleteUser(id: String): User
// `

export { Login, loginQueries }
