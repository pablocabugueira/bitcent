import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react"
import SocialMedia from "./SocialMedia"

export default function SocialMedias() {
    return (
        <div className="flex">
            <SocialMedia icon={<IconBrandYoutube />} url="https://www.youtube.com/@pablinxx" />
            <SocialMedia icon={<IconBrandInstagram />} url="https://www.instagram.com/pablinxxc/" />
            <SocialMedia icon={<IconBrandGithub />} url="https://github.com/pablocabugueira" />
            <SocialMedia icon={<IconBrandLinkedin />} url="https://www.linkedin.com/in/pablo-galvao-cabugueira/" />
        </div>
    )
}