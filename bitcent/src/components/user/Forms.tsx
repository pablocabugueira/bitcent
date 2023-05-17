import useForm from "@/data/hooks/useForm";
import MiniForm from "../templates/MiniForm";
import falseUser from "@/data/constants/falseUser";
import User from "@/logic/core/user/User";
import { TextInput } from "@mantine/core";
import Text from "@/logic/utils/Between";
import Cpf from "@/logic/utils/Cpf";
import Phone from "@/logic/utils/Phone";

export default function Forms() {
    const { data, changeAttribute} = useForm<User>(falseUser)

    return (
        <div className="flex flex-col gap-5 mt-7">
            <MiniForm
                title="Seu Nome"
                description="Como você gostaria de ser chamado?"
                msgFooter="O nome deve possuir entre 3 e 70 caracteres, mais que isso já é um texto!"
                canSave={Text.between(data.name, 3, 70)}
                save={() => {}}
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
                save={() => {}}
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
                save={() => {}}
            >
                <TextInput
                    value={Phone.format(data.phone ?? "")}
                    onChange={changeAttribute("phone")}
                />
            </MiniForm>
        </div>
    )
}