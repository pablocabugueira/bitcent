import { TypeOfTransaction } from '@/logic/core/finances/TypeOfTransactions'
import Transacao from '@/logic/core/finances/Transaction'
import { IconArrowsDoubleSwNe, IconCash, IconCreditCard } from '@tabler/icons-react'
import SumarioItem from './SummaryItem'

interface SummaryProps {
    transacoes: Transacao[]
    className?: string
}

export default function Summary(props: SummaryProps) {
    const totalizar = (total: number, r: Transacao) => total + r.value

    const receitas = props.transacoes
        .filter((r) => r.type === TypeOfTransaction.RECEITA)
        .reduce(totalizar, 0)

    const despesas = props.transacoes
        .filter((r) => r.type === TypeOfTransaction.DESPESA)
        .reduce(totalizar, 0)

    const total = receitas - despesas

    return (
        <div className={`
            grid grid-cols-1 md:grid-cols-3 gap-4
        `}>
            <SumarioItem
                titulo='Receitas'
                valor={receitas}
                icone={<IconCash />}
                iconeClassName="text-green-500"
            />
            <SumarioItem
                titulo='Despesas'
                valor={despesas}
                icone={<IconCreditCard />}
                iconeClassName="text-red-500"
            />
            <SumarioItem
                titulo='Total'
                valor={total}
                icone={<IconArrowsDoubleSwNe />}
                iconeClassName="text-yellow-500"
                valorClassName={total > 0 ? 'text-green-500' : total < 0 ? 'text-red-500' : ''}
            />
        </div>
    )
}