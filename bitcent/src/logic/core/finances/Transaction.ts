import { TypeOfTransaction } from "./TypeOfTransactions"

export default interface Transaction {
    id?: string
    description: string
    value: number
    date: Date
    type: TypeOfTransaction
}

export const emptyTransaction: Transaction = {
    description: '',
    value: 0,
    date: new Date(),
    type: TypeOfTransaction.DESPESA
}