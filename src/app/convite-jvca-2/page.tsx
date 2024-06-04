import { Button } from "@/components/button";
import { Card } from "@/components/card";
import { CardSecond } from "@/components/card-second";
import { Header } from "@/components/header";
import Section from "@/components/section";
import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-zinc-950">
      <Header
        title="Se você é apaixonado por carros e tem potencial para avaliar carros em detalhes..."
        subtitle={<span>Eu vou te mostrar como transformar essa paixão em uma grande fonte de renda através da <span className="text-my font-semibold">Consultoria Automotiva</span></span>}
      />
      <Section
        className="py-16 sm:py-24"
        classNameS="bg-[#1b1b1b]"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-white font-bold text-2xl sm:text-[40px] sm:leading-[3rem] uppercase">O que você vai aprender</h2>
            <p className="text-zinc-300">NA JORNADA: VIVER DE CONSULTORIA AUTOMOTIVA?</p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <Card
              title="Os Pilares de uma Avaliação Automotiva Eficaz"
              subtitle={
                <>O Dever fundamental de um Consultor é <strong>saber avaliar e inspecionar com atenção e detalhamento cada ponto crítico de um carro</strong>. Vou te mostrar como eu mesmo fiz para chegar nesse nível de experiência e conhecimento na Avaliação.</>
              }
            />
            <Card
              title="As Oportunidades Únicas do Mercado de Consultoria Automotiva"
              subtitle={
                <>Vou te explicar de onde o mercado da Consultoria Automotiva surgiu e o <strong>porquê dele estar crescendo tanto ao longo dos últimos meses</strong>.</>
              }
            />
            <Card
              title="Os Princípios que formam um Consultor Automotivo Profissional"
              subtitle={
                <>É crucial que você entenda <strong>cada ponto que faz um Consultor ser bem-sucedido</strong>, respeitado e reconhecido na região e, o melhor, <strong>buscado e indicado diariamente por novos clientes.</strong></>
              }
            />
            <Card
              title="Como funciona o processo de captação de clientes e entrega do serviço de Consultoria"
              subtitle={
                <>Muita gente tem dúvida de como funciona o trabalho do Consultor quando se trata de <strong>trazer clientes, fechar serviços, parcerias, a maneira ideal de fazer um serviço bem feito e etc</strong>. Eu vou fazer questão de deixar tudo isso claro no Aulão.</>
              }
            />
          </div>
          <Button />
        </div>
      </Section>
      <Section
        className="py-16 sm:py-24"
        classNameS="bg-zinc-950"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-white font-bold text-2xl sm:text-[40px] sm:leading-[3rem] uppercase">Para quem é?</h2>
            <p className="text-zinc-300">A JORNADA: VIVER DE CONSULTORIA AUTOMOTIVA?</p>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4">
            <CardSecond
              title="PARA APAIXONADOS POR CARROS"
            />
            <CardSecond
              title="PARA QUEM BUSCA VIVER DO QUE AMA, GANHANDO BEM E SENDO O PRÓPRIO CHEFE"
            />
            <CardSecond
              title="PARA QUEM É COMPROMETIDO, TRABALHADOR E TEM GARRA"
            />
            <CardSecond
              title="PARA QUEM QUER CONQUISTAR LIBERDADE FINANCEIRA E LIBERDADE DE TEMPO"
            />
            <CardSecond
              title="E PARA QUEM ESTÁ DISPOSTO A ENTREGAR UM ÓTIMO SERVIÇO E AJUDAR A TORNAR O MERCADO MAIS SEGURO E TRANSPARENTE"
            />
          </div>
          <Button />
        </div>
      </Section>
      <Section
        className="py-16 sm:py-24"
        classNameS="bg-my"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-black font-bold text-2xl sm:text-[40px] sm:leading-[3rem] uppercase">QUEM É ROGÉRIO OLIVEIRA, CONSULTOR E FUNDADOR DO {`"`}CARRO PERFEITO{`"`}?</h2>
          </div>
          <div className="w-full max-w-3xl flex flex-col items-center gap-4">
            <div className="w-[256px]">
              <Image
                src="/images/img.png"
                alt="Imagem do Rogério"
                width={611}
                height={582}
              />
            </div>
            <div className="flex flex-col gap-4 text-lg font-medium">
              <p>Meu nome é Rogério Oliveira e há 5 anos venho trabalhando como Consultor Automotivo na cidade de Fortaleza.</p>
              <p>Trabalhei com carteira assinada por anos, e <strong>por muito tempo pensei em empreender por conta própria e não depender mais de chefe</strong>, mas nunca tomava uma decisão final.</p>
              <p>Até que chegou uma hora em que eu não aguentava mais viver daquela forma, decidi seguir minha paixão por carros e <strong>entrar em um mercado em ascensão, que é o da Consultoria Automotiva</strong>.</p>
              <p>Descobri que esse mercado oferece não apenas a <strong>liberdade</strong> de ser seu próprio chefe, mas também a oportunidade de mergulhar em <strong>uma área que eu gosto e ganhar muito bem por isso</strong>.</p>
              <p>Hoje em dia, tenho uma equipe de confiança, <strong>vivo apenas da Consultoria Automotiva</strong> e já ajudei centenas de pessoas a alcançar esse sonho também.</p>
              <p>Se você quer saber o que os meus alunos estão fazendo <strong>para ganhar de 5 a 20 mil reais todos os meses, aperte no botão e faça a sua inscrição</strong>:</p>
            </div>
          </div>
          <Button />
        </div>
      </Section>

    </div>
  )
}