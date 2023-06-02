import anaSilva from "../../assets/img/Depoimentos/anaSilva.png"
import Depoimento from "./Depoimento"
export default function Depoimentos() {
    return(
    <div className="w-[100%] bg-slate-100 p-4 shadow-xl pb-10">
    <h1 className="pb-4 text-3xl font-bold text-blue-800">Depoimentos de Sucesso</h1>
    <div className="flex flex-col sm:flex-row gap-2 justify-around items-center">
        <Depoimento src={anaSilva} nome="Ana Silva" profissao="Advogada" depoimento="A oportunidade proporcionada pela bolsa de estudo do programa Mais Solidário foi o ponto de virada na minha vida, permitindo-me ingressar em uma faculdade e transformar minha realidade. Hoje, sou uma graduada em Direito pela Universo, atuando com sucesso na área há mais de 4 anos."/>
        <Depoimento src={anaSilva} nome="Ana Silva" profissao="Advogada" depoimento="A oportunidade proporcionada pela bolsa de estudo do programa Mais Solidário foi o ponto de virada na minha vida, permitindo-me ingressar em uma faculdade e transformar minha realidade. Hoje, sou uma graduada em Direito pela Universo, atuando com sucesso na área há mais de 4 anos."/>
        <Depoimento src={anaSilva} nome="Ana Silva" profissao="Advogada" depoimento="A oportunidade proporcionada pela bolsa de estudo do programa Mais Solidário foi o ponto de virada na minha vida, permitindo-me ingressar em uma faculdade e transformar minha realidade. Hoje, sou uma graduada em Direito pela Universo, atuando com sucesso na área há mais de 4 anos."/>
    </div>
    </div>
    )
}