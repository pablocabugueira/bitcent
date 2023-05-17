import List from "./List";
import Content from "../templates/Content";
import Header from "../templates/Header";
import Page from "../templates/Page";
import { useState } from "react";
import Transaction, { emptyTransaction } from "@/logic/core/finances/Transaction";
import falseTransactions from "@/data/constants/falseTransactions";
import Form from "./Form";
import NotFound from "../templates/NotFound";
import Id from "@/logic/core/common/Id";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export default function Finances() {
    const [transactions, setTransactions] = useState<Transaction[]>(falseTransactions)
    const [transaction, setTransaction] = useState<Transaction | null>(null)

    function saveTransaction(transaction: Transaction) {
        const otherTransactions = transactions.filter(t => t.id !== transaction.id)
        setTransactions([...otherTransactions, {
            ...transaction,
            id: transaction.id ?? Id.new()
        }])
        setTransaction(null)
    }

    function deleteTransaction(transaction: Transaction) {
        const otherTransactions = transactions.filter(t => t.id !== transaction.id)
        setTransactions(otherTransactions)
        setTransaction(null)
    }

    return (
        <Page>
            <Header />
            <Content className="gap-5">
                <Button
                    className="bg-blue-500"
                    leftIcon={<IconPlus />}
                    onClick={() => setTransaction(emptyTransaction)}
                >
                    Nova transação
                </Button>
                {transaction ? (
                    <Form
                        transaction={transaction}
                        cancel={() => setTransaction(null)}
                        save={saveTransaction}
                        delete={deleteTransaction}
                    />
                ) : transactions.length ? (
                    <List
                        transactions={transactions}
                        selectTransaction={setTransaction}
                    />
                ) :(
                    <NotFound>
                        Nenhuma transação encontrada
                    </NotFound>
                )}
            </Content>
        </Page>
    )
}