import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useContext } from "react";

export default function Welcome() {
    const { usuario } = useContext(AutenticacaoContext)
    function renderName() {
        return (
            <span className="hidden sm:inline">
                {usuario?.name?.split(' ')[0]}
            </span>
        )
    }

    return (
        <div className={`text-3xl font-black text-white`}>
            Olá {renderName()} 👋
        </div>
    )
}