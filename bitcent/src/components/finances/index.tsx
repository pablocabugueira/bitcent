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
import Summary from "./Summary";

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
                <div className="flex gap-5 items-center">
                    <Button
                        className="bg-blue-500 flex gap-10"
                        onClick={() => select(emptyTransaction)}
                    >
                        <span className="flex items-center gap-3">
                            <IconPlus />
                            <span className="hidden md:inline">Nova Transação</span>
                        </span>
                    </Button>
                    <SegmentedControl
                        data={[
                            { label: <IconList />, value: 'lista' },
                            { label: <IconLayoutGrid />, value: 'grade' }
                        ]}
                        className="hidden md:inline-flex"
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
                <Summary transacoes={transactions} />
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