import ServicosTransacao from "./finances/TransactionServices";
import UserServices from "./user/UserServices";

class Servicos {
    get transacao() { return new ServicosTransacao() }
    get usuario() { return new UserServices() }
}

const servicos = new Servicos()
export default servicos