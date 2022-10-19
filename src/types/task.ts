interface LabelType {
    name: string
    position: number
}

interface TaskType {
    user: string
    name: string
    link: string
    fixeDate: Date
    labels: LabelType[]
}
interface TaskWithIdType extends TaskType {
    id: string
}

export { LabelType, TaskType }
