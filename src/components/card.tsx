import { ReactElement } from "react"

interface CardProps {
    title: string
    subtitle: ReactElement
}

export function Card({ subtitle, title }: CardProps) {
    return (
        <div className="w-full sm:w-[424px] sm:h-[296px] rounded-2xl border-4 border-my p-6 flex flex-col gap-2">
            <h3 className="text-my text-xl font-bold">{title}</h3>
            <p className="text-zinc-300">{subtitle}</p>
        </div>
    )
}