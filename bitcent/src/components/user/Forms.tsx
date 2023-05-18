import useForm from "@/data/hooks/useForm";
import MiniForm from "../templates/MiniForm";
import User from "@/logic/core/user/User";
import { TextInput } from "@mantine/core";
import Text from "@/logic/utils/Between";
import Cpf from "@/logic/utils/Cpf";
import Phone from "@/logic/utils/Phone";
import { useContext, useEffect } from 'react'
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function Forms() {
    const { usuario, atualizarUsuario } = useContext(AutenticacaoContext)
    const { data, changeAttribute, setData} = useForm<User>()

    useEffect(() => {
        if(!usuario) return
        setData(usuario)
    }, [usuario])

    async function save() {
        if(!usuario) return
        await atualizarUsuario(data)
    }

    return (
        <div className="flex flex-col gap-5 mt-7">
            <MiniForm
                title="Seu Nome"
                description="Como você gostaria de ser chamado?"
                msgFooter="O nome deve possuir entre 3 e 70 caracteres, mais que isso já é um texto!"
                canSave={Text.between(data.name, 3, 70)}
                save={save}
            >
                <TextInput
                    value={data.name}
                    onChange={changeAttribute("name")}
                />
            </MiniForm>
            <MiniForm
                title="CPF"
                description="Seu CPF é usado internamente pelo sistema."
                msgFooter="Pode relaxar, daqui ele não sai!"
                canSave={true}
                save={save}
            >
                <TextInput
                    value={Cpf.format(data.cpf ?? "")}
                    onChange={changeAttribute("cpf", Cpf.unformat)}
                />
            </MiniForm>
            <MiniForm
                title="Telefone"
                description="Usado para notificações importantes sobre a sua conta."
                msgFooter="Se receber ligação a cobrar, não foi a gente!"
                canSave={true}
                save={save}
            >
                <TextInput
                    value={Phone.format(data.phone ?? "")}
                    onChange={changeAttribute("phone")}
                />
            </MiniForm>
        </div>
    )
}