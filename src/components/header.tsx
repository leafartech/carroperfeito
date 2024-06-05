'use client'

import Image from "next/image"
import { ReactElement, useEffect } from "react"

interface HeaderProps {
    title: string
    subtitle: ReactElement
}

export function Header({ subtitle, title }: HeaderProps) {
    let cont = 0
    useEffect(() => {
        if (cont === 0) {
            const script = document.createElement('script');
            script.src = 'https://carroperfeitobr7642.activehosted.com/f/embed.php?id=1';
            script.type = 'text/javascript';
            script.charset = 'utf-8';
            script.async = true;

            document.body.appendChild(script);
            cont++;
        }
    }, [cont]);

    return (
        <header className="relative min-h-screen w-full bg-zinc-950 flex flex-col items-center justify-center pt-36 sm:py-24 px-4">
            <div className="absolute top-0 left-0 block sm:hidden ">
                <Image
                    src="/images/bg.png"
                    alt="Imagem do Rogério - Carro Perfeito"
                    width={1032}
                    height={1070}
                />
            </div>
            <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-6 z-50">
                <div className="w-[196px] sm:w-[254px]">
                    <Image
                        src="/images/logo.png"
                        alt="Logo Carro Perfeito"
                        width={382}
                        height={122}
                    />
                </div>
                <div className="flex flex-col gap-2 text-center" id="form">
                    <h1 className="text-white font-semibold text-3xl sm:text-[40px] sm:leading-[3rem]">{title}</h1>
                    <p className="text-zinc-300 text-lg">{subtitle}</p>
                    <p className="text-zinc-300 text-lg">Preencha o Formulário abaixo para finalizar sua inscrição</p>
                    <div className={`h-[326px] ${"_form_1"}`}></div>
                </div>
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="w-full sm:w-1/2">
                        <Image
                            src="/images/ao_vivo.png"
                            alt="Logo Carro Perfeito"
                            width={1220}
                            height={64}
                        />
                    </div>
                    <p className="text-zinc-400 text-sm sm:text-base">Descubra os 3 Pontos Fundamentais para se capacitar como Consultor Automotivo e conquistar bons lucros nesse mercado que vem crescendo exponencialmente.</p>
                </div>
            </div>
        </header>
    )
}
