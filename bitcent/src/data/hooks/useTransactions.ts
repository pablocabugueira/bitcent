import { useState, useContext } from "react";
import Transaction, { emptyTransaction } from "@/logic/core/finances/Transaction";
import falseTransactions from "@/data/constants/falseTransactions";
import Id from "@/logic/core/common/Id";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import servicos from "@/logic/core";

export default function useTransactions() {
    const { usuario } = useContext(AutenticacaoContext)
    const [transactions, setTransactions] = useState<Transaction[]>(falseTransactions)
    const [transaction, setTransaction] = useState<Transaction | null>(null)

    function saveTransaction(transaction: Transaction) {
        if(!usuario) return
        const otherTransactions = transactions.filter(t => t.id !== transaction.id)
        setTransactions([...otherTransactions, {
            ...transaction,
            id: transaction.id ?? Id.new()
        }])
        servicos.transacao.save(transaction, usuario)
        setTransaction(null)
    }

    function deleteTransaction(transaction: Transaction) {
        const otherTransactions = transactions.filter(t => t.id !== transaction.id)
        setTransactions(otherTransactions)
        setTransaction(null)
    }

    return {
        transactions,
        transaction,
        saveTransaction,
        deleteTransaction,
        select: setTransaction
    }
}