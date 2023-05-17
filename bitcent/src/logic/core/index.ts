import ServicosTransacao from "./finances/TransactionServices";

class Servicos {
    get transacao() { return new ServicosTransacao() }
}

const servicos = new Servicos()
export default servicos