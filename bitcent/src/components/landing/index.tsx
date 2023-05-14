import Page from "../templates/Page";
import Benefits from "./benefits";
import Footer from "./footer";
import Header from "./header";
import Highlighted from "./highlighted";
import Feedback from "./feedback";

export default function Landing() {
    return (
        <Page>
            <Header />
            <Highlighted />
            <Benefits />
            <Feedback />
            <Footer />
        </Page>
    )
}