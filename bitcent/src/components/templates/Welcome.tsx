import falseUser from "@/data/constants/falseUser"

export default function Welcome() {
    function renderName() {
        return (
            <span className="hidden sm:inline">
                {falseUser?.name?.split(' ')[0]}
            </span>
        )
    }

    return (
        <div className={`text-3xl font-black text-white`}>
            Olá {renderName()} 👋
        </div>
    )
}