import Area from "../common/Area";
import Slogan from "./Slogan";
import main from "../../../../public/main.jpg"
import ResponsiveImage from "../common/responsiveImage";

export default function Highlighted() {
    return (
        <Area id="start" className="pt-20">
            <div className={`
                h-[500px] flex items-center justify-around
            `}>
                <Slogan />
                <ResponsiveImage
                    image={main}
                    className="rotate-3 hidden md:inline"
                />
            </div>
        </Area>
    )
}