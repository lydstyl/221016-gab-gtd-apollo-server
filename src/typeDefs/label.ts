// enum Label {
//     collect

//     quick

//     important
//     urgent // fixedDate

//     outside
//     phone

//     recursive
//     support

//     business
//     real estate
//     health
//     social
// }

// importance: Int

const Label = `
type Label {
    id: ID
    user: String!
    name: String!
    position: Int
    tasks:[Task]
}
`
const labelQueries = `
    getLabels: [Label]
`
const labelMutations = `
    addLabel(name: String!, position: Int): Label
    deleteLabel(id: String!): Label
`
// updateLabel(id: String!, name: String, position: Int, tasks:[Task]): Label

export { Label, labelQueries, labelMutations }
