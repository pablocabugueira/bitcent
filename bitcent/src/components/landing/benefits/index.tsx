import Area from "../common/Area";
import Benefit from "./Benefit";
import benefit1 from "../../../../public/benefit-1.jpg"
import benefit2 from "../../../../public/benefit-2.jpg"
import benefit3 from "../../../../public/benefit-3.jpg"

export default function Benefits() {
    return (
        <Area id="benefits" className="bg-black py-16 sm:py-36">
            <div className="flex flex-col items-center gap-y-16 sm:gap-y-36">
                <Benefit
                    image={benefit1}
                    title="Gerenciador financeiro completo e simples de usar"
                    subtitle="Aqui você consegue ter controle completo das suas finanças e uma visualização fácil de entender. O caminho da economia começa aqui!"
                />

                <Benefit
                    image={benefit2}
                    title="Organizado para você nunca mais esquecer uma conta"
                    subtitle="Visualize e acompanhe as suas finanças dia a dia. A organização mensal vai te ajudar a ter um controle claro das receitas e despesas!"
                    reverse
                />
                <Benefit
                    image={benefit3}
                    title="Ideal para planejamento financeiro"
                    subtitle="Nosso princípio número 1 é ser uma plataforma que torne o controle financeiro simples, então o planejamento se torna algo natural!"
                />
            </div>
        </Area>
    )
}