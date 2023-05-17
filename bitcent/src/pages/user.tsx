import Content from "@/components/templates/Content";
import Header from "@/components/templates/Header";
import Page from "@/components/templates/Page";
import PageTitle from "@/components/templates/PageTitle";
import Forms from "@/components/user/Forms";
import falseUser from "@/data/constants/falseUser";
import { IconForms } from "@tabler/icons-react";

export default function UserRegister() {

    return (
        <Page>
            <Header />
            <Content>
                <PageTitle
                    title="Dados Cadastrais"
                    subtitle={`Informações de ${falseUser.email}`}
                    icon={<IconForms />}
                />
                <Forms />
            </Content>
        </Page>
    )
}