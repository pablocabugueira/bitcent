import Content from "@/components/templates/Content";
import Header from "@/components/templates/Header";
import Page from "@/components/templates/Page";
import PageTitle from "@/components/templates/PageTitle";
import Forms from "@/components/user/Forms";
import { IconForms } from "@tabler/icons-react";
import { useContext } from "react"
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";

export default function UserRegister() {
    const { usuario } = useContext(AutenticacaoContext)

    return (
        <Page>
            <Header />
            <Content>
                <PageTitle
                    title="Dados Cadastrais"
                    subtitle={`Informações de ${usuario?.email}`}
                    icon={<IconForms />}
                />
                <Forms />
            </Content>
        </Page>
    )
}