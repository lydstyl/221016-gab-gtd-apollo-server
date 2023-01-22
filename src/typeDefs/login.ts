const Login = `
type Login {
    user: String
    token: String
}
`
const loginQueries = `
    login(email: String, password: String): Login
`

export { Login, loginQueries }
