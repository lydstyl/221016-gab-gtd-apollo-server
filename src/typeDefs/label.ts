const Label = `
type Label {
    id: ID
    user: String!
    name: String!
    position: Int
    color: String
    tasks: [Task]
}
`
const labelQueries = `
    getLabels: [Label]
`
const labelMutations = `
    addLabel(name: String!, position: Int, color: String): Label
    deleteLabel(id: String!): Label
    updateLabel(id: String!, name: String, position: Int, color: String): Label
`

export { Label, labelQueries, labelMutations }
