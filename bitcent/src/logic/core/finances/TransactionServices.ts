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
}