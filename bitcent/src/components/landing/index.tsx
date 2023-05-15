import Page from "../templates/Page";
import Benefits from "./benefits";
import Footer from "./footer";
import Header from "./header";
import Highlighted from "./highlighted";
import Feedbacks from "./feedbacks";

export default function Landing() {
    return (
        <Page>
            <Header />
            <Highlighted />
            <Benefits />
            <Feedbacks />
            <Footer />
        </Page>
    )
}