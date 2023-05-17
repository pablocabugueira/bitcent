import { IconBrandGoogle } from '@tabler/icons-react'
import MenuItem from './MenuItem'
import AutenticacaoContext from "@/data/contexts/AutenticacaoContext";
import { useContext } from "react";

export default function Menu() {
    const { loginGoogle } = useContext(AutenticacaoContext)

    return (
        <div className="flex gap-2">
            <MenuItem url="#start" className="hidden sm:flex">
                Início
            </MenuItem>
            <MenuItem url="#benefits" className="hidden sm:flex">
                Vantagens
            </MenuItem>
            <MenuItem url="#feedback" className="hidden sm:flex">
                Depoimentos
            </MenuItem>
            <MenuItem
                onClick={loginGoogle}
                className="bg-gradient-to-r from-indigo-600 to-cyan-600"
            >
                <div className="flex items-center gap-2">
                    <IconBrandGoogle size={15} />
                    <span>Login</span>
                </div>
            </MenuItem>
        </div>
    )
}