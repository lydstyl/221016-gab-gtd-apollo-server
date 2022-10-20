interface LabelType {
    name: string
    position: number
}

interface TaskType {
    id?: string
    user: string
    name: string
    link?: string
    fixeDate?: Date
    labels?: LabelType[]
}

export { LabelType, TaskType }
