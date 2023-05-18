import { useState, useContext, useEffect } from "react";
import Transaction, { emptyTransaction } from "@/logic/core/finances/Transaction";
import Id from "@/logic/core/common/Id";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import servicos from "@/logic/core";

export default function useTransactions() {
    const { usuario } = useContext(AutenticacaoContext)
    const [transactions, setTransactions] = useState<Transaction[]>([])
    const [transaction, setTransaction] = useState<Transaction | null>(null)

    useEffect (() => {
        searchTransactions()
    }, [])
    
    async function searchTransactions() {
        if(!usuario) return
        const transactions = await servicos.transacao.search(usuario)
        setTransactions(transactions)
    }

    async function saveTransaction(transaction: Transaction) {
        if(!usuario) return
        servicos.transacao.save(transaction, usuario)
        setTransaction(null)
        await searchTransactions()
    }

    async function deleteTransaction(transaction: Transaction) {
        if(!usuario) return
        await servicos.transacao.delete(transaction, usuario)
        setTransaction(null)
        await searchTransactions()
    }

    return {
        transactions,
        transaction,
        saveTransaction,
        deleteTransaction,
        select: setTransaction
    }
}