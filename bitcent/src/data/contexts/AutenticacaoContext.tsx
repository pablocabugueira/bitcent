//import servicos from "@/logic/core"
import Usuario from "@/logic/core/user/User"
import Autenticacao from "@/logic/firebase/auth/Autenticacao"
import { createContext, useEffect, useState } from "react"

interface AutenticacaoProps {
    carregando: boolean
    usuario: Usuario | null
    loginGoogle: () => Promise<Usuario | null>
    logout: () => Promise<void>
}

const AutenticacaoContext = createContext<AutenticacaoProps>({
    carregando: true,
    usuario: null,
    loginGoogle: async () => null,
    logout: async () => {},
})

export function AutenticacaoProvider(props: any) {
    const [carregando, setCarregando] = useState<boolean>(true)
    const [usuario, setUsuario] = useState<Usuario | null>(null)

    const autenticacao = new Autenticacao()

    useEffect(() => {
        const cancelar = autenticacao.monitorar((usuario) => {
            setUsuario(usuario)
            setCarregando(false)
        })
        return () => cancelar()
    }, [])

    async function loginGoogle() {
        const usuario = await autenticacao.loginGoogle()
        setUsuario(usuario)
        return usuario
    }

    async function logout() {
        await autenticacao.logout()
        setUsuario(null)
    }

    return (
        <AutenticacaoContext.Provider value={{
            carregando,
            usuario,
            loginGoogle,
            logout,
        }}>
            {props.children}
        </AutenticacaoContext.Provider>
    )
}

export default AutenticacaoContext