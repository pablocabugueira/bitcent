import Colection from "@/logic/firebase/db/Colection";
import Transaction from "./Transaction";
import User from "../user/User";

export default class TransactionServices {
    private _colection = new Colection()

    async save(transactions: Transaction, user: User) {
        return this._colection.salvar(
            `finances/${user.email}/transactions`,
            transactions
        )
    }

    async search(user: User) {
        const path = `finances/${user.email}/transactions`
        return await this._colection.consultar(path, "date", "desc")
    }

    async delete(transaction: Transaction,user: User) {
        return this._colection.excluir(
            `finances/${user.email}/transactions`,
            transaction.id
        )
    }
}