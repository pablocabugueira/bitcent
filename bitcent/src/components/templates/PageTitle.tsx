import React from "react"

interface PageTitleProps {
    title: string
    icon?: any
    subtitle?: string
    className?: string
}

export default function PageTitle(props: PageTitleProps) {
    return (
        <div className={`flex items-center gap-2 ${props.className ?? ''}`}>
            {props.icon && (
                <div className={`
                    text-zinc-500
                `}>{React.cloneElement(props.icon, {
                    stroke: 1,
                    size: props.subtitle ? 50 : 24
                })}</div>
            )}
            <div className="flex flex-col text-zinc-500">
                <h1 className="text-2xl font-black">
                    {props.title}
                </h1>
                {props.subtitle && (
                    <h2 className="text-sm font-thin -mt-1">
                        {props.subtitle}
                    </h2>
                )}
            </div>
        </div>
    )
}