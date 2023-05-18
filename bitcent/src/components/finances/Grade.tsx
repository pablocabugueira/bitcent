import { TypeOfTransaction } from "@/logic/core/finances/TypeOfTransactions"
import Transacao from "@/logic/core/finances/Transaction"
import Data from "@/logic/utils/DateFormatted"
import Dinheiro from "@/logic/utils/MoneyFormatted"
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"

interface GradeProps {
    transacoes: Transacao[]
    selecionarTransacao?: (transacao: Transacao) => void
}

export default function Grade(props: GradeProps) {
    function renderizarItem(transacao: Transacao) {
        return (
            <div className={`
                relative flex flex-col justify-between rounded-lg p-4 
                text-white overflow-hidden h-24 cursor-pointer
            `} onClick={() => props.selecionarTransacao?.(transacao)}>
                <div className={`
                    absolute top-0 left-0 w-full h-full
                    bg-gradient-to-r opacity-60
                    ${transacao.type === TypeOfTransaction.RECEITA
                        ? 'from-teal-500 via-green-600 to-teal-700'
                        : 'from-pink-500 via-red-600 to-pink-700'
                    }
                `}></div>
                <div className="flex justify-between items-center">
                    <span className="z-10 font-light opacity-75">{transacao.description}</span>
                    <span className="z-10 font-light text-xs opacity-75">
                        {Data.ddmm.formatar(transacao.date)}
                    </span>
                </div>
                <span className="z-10 text-3xl font-black">
                    {Dinheiro.format(transacao.value)}
                </span>
                {transacao.type === TypeOfTransaction.RECEITA ? (
                    <IconTrendingUp
                        size={40}
                        stroke={1}
                        className="absolute bottom-1 right-2 text-white opacity-10"
                    />
                ) : (
                    <IconTrendingDown
                        size={40}
                        stroke={1}
                        className="absolute bottom-1 right-2 text-white opacity-10"
                    />
                )}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-5">
            {props.transacoes.map(renderizarItem)}
        </div>
    )
}