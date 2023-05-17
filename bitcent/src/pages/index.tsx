import Finances from "@/components/finances";
import Landing from "@/components/landing";
import Loading from "@/components/templates/Loading";
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useContext } from "react";

export default function Home() {
  const { usuario, carregando } = useContext(AutenticacaoContext)

  if(carregando) return <Loading />
    return usuario ? <Finances /> : <Landing />
}