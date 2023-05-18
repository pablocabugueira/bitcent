import List from "./List";
import Content from "../templates/Content";
import Header from "../templates/Header";
import Page from "../templates/Page";
import Form from "./Form";
import NotFound from "../templates/NotFound";
import { Button, SegmentedControl } from "@mantine/core";
import { IconLayoutGrid, IconList, IconPlus } from "@tabler/icons-react";
import useTransactions, { TipoExibicao } from "@/data/hooks/useTransactions";
import { emptyTransaction } from "@/logic/core/finances/Transaction";
import YearMonthField from "../templates/YearMonthField";
import Grade from "./Grade";

export default function Finances() {
    const {
        tipoExibicao, alterarExibicao, data, alterarData, transactions, transaction,
        saveTransaction, deleteTransaction, select
    } = useTransactions()

    function renderControlls() {
        return (
            <div className="flex justify-between">
                <YearMonthField
                    data={data}
                    dataMudou={alterarData}
                />
                <div className="flex gap-5">
                    <Button
                        className="bg-blue-500"
                        leftIcon={<IconPlus />}
                        onClick={() => select(emptyTransaction)}
                    >Nova transação</Button>
                    <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'lista' },
                            { label: <IconLayoutGrid />, value: 'grade' }
                        ]}
                        onChange={tipo => alterarExibicao(tipo as TipoExibicao)}
                    />
                </div>
            </div>
        )
    }

    function renderTransactions() {
        return tipoExibicao === "lista" ? (
            <List
                transactions={transactions}
                selectTransaction={select}
            />
        ): (
            <Grade
                transacoes={transactions}
                selecionarTransacao={select}
            />
        )
    }

    return (
        <Page>
            <Header />
            <Content className="gap-5">
                {(renderControlls())}
                {transaction ? (
                    <Form
                        transaction={transaction}
                        cancel={() => select(null)}
                        save={saveTransaction}
                        delete={deleteTransaction}
                    />
                ) : transactions.length ? (
                    renderTransactions()
                ) :(
                    <NotFound>
                        Nenhuma transação encontrada
                    </NotFound>
                )}
            </Content>
        </Page>
    )
}