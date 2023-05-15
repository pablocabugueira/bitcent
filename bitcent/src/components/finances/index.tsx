import List from "./List";
import Content from "../templates/Content";
import Header from "../templates/Header";
import Page from "../templates/Page";
import { useState } from "react";
import Transaction from "@/logic/core/finances/Transaction";
import falseTransactions from "@/data/constants/falseTransactions";

export default function Finances() {
    const [transaction, setTransaction] = useState<Transaction[]>(falseTransactions)
    return (
        <Page>
            <Header />
            <Content>
                <List transactions={transaction} />
            </Content>
        </Page>
    )
}