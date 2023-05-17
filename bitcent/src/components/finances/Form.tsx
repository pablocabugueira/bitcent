import "dayjs/locale/pt-br"
import Transaction from "@/logic/core/finances/Transaction"
import MoneyFormatted from "@/logic/utils/MoneyFormatted"
import { Button, Group, Radio, TextInput } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import { TypeOfTransaction } from "@/logic/core/finances/TypeOfTransactions"
import useForm from "@/data/hooks/useForm"

interface FormProps {
    transaction: Transaction
    cancel?: () => void
    save?: (transaction: Transaction) => void
    delete?: (transaction: Transaction) => void
}

export default function Form(props: FormProps) {
    const { data, changeAttribute} = useForm<Transaction>(props.transaction)

    return (
        <div className={`
            flex flex-col border border-zinc-700
            rounded-xl overflow-hidden
        `}>
            <div className="bg-black py-3 px-7 text-zinc-400">Formulário</div>
            <div className="flex flex-col gap-4 p-4 sm:p-7">
                <TextInput
                    label="Descrição"
                    value={data.description}
                    onChange={changeAttribute("description")}
                />
                <TextInput
                    label="Valor"
                    value={MoneyFormatted.format(data.value)}
                    onChange={changeAttribute("value", MoneyFormatted.unFormat)}
                />
                <DatePickerInput
                    label="Data"
                    value={data.date}
                    locale="pt-BR"
                    valueFormat="DD/MM/YYYY"
                    onChange={changeAttribute("date")}
                />
                <Radio.Group
                    value={data.type}
                    onChange={changeAttribute("type")}
                >
                    <Group>
                        <Radio value={TypeOfTransaction.RECEITA} label="Receita" />
                        <Radio value={TypeOfTransaction.DESPESA} label="Despesa" />
                    </Group>
                </Radio.Group>
            </div>
            <div className="flex px-4 sm:px-7 py-4 gap-3 bg-zinc-800">
                <Button
                    className="bg-green-500" color="green"
                    onClick={() => props.save?.(data)}
                >Salvar</Button>
                <Button
                    className="bg-zinc-500" color="gray"
                    onClick={props.cancel}
                >Voltar</Button>
                <div className="flex-1"></div>
                {data.id && (
                    <Button
                        className="bg-red-500" color="red"
                        onClick={() => props.delete?.(data)}
                    >Excluir</Button>
                )}
            </div>
        </div>
    )
}