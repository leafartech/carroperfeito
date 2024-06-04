import Image from "next/image"

interface CardProps {
    title: string
}

export function CardSecond({ title }: CardProps) {
    return (
        <div className="text-center sm:w-[424px] w-full sm:h-[196px] rounded-2xl border-4 border-my border-dashed p-6 flex flex-col items-center gap-2">
            <div className="w-[60px]">
                <Image
                    src="/images/car.png"
                    alt="Ícone de carro"
                    width={512}
                    height={212}
                />
            </div>
            <h3 className="text-white text-lg sm:text-xl font-bold">{title}</h3>
        </div>
    )
}