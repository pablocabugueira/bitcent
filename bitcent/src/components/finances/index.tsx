import List from "./List";
import Content from "../templates/Content";
import Header from "../templates/Header";
import Page from "../templates/Page";
import Form from "./Form";
import NotFound from "../templates/NotFound";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import useTransactions from "@/data/hooks/useTransactions";
import { emptyTransaction } from "@/logic/core/finances/Transaction";
import YearMonthField from "../templates/YearMonthField";

export default function Finances() {
    const {
        data, alterarData, transactions, transaction, saveTransaction,
        deleteTransaction, select
    } = useTransactions()

    return (
        <Page>
            <Header />
            <Content className="gap-5">
                <div className="flex justify-between">
                    <YearMonthField
                        data={data}
                        dataMudou={alterarData}
                    />
                    <Button
                        className="bg-blue-500"
                        leftIcon={<IconPlus />}
                        onClick={() => select(emptyTransaction)}
                    >
                        Nova transação
                    </Button>
                </div>
                {transaction ? (
                    <Form
                        transaction={transaction}
                        cancel={() => select(null)}
                        save={saveTransaction}
                        delete={deleteTransaction}
                    />
                ) : transactions.length ? (
                    <List
                        transactions={transactions}
                        selectTransaction={select}
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