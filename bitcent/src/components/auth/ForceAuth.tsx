import { useContext } from 'react'
import { useRouter } from 'next/router'
import AutenticacaoContext from '@/data/contexts/AutenticacaoContext'
import Loading from '../templates/Loading'

interface ForceAuthProps {
    children: any
}

export default function ForceAuth(props: ForceAuthProps) {
    const router = useRouter()
    const { usuario, carregando } = useContext(AutenticacaoContext)

    if (carregando) {
        return <Loading />
    } else if (usuario?.email) {
        return props.children
    } else {
        router.push('/')
        return <Loading />
    }
}