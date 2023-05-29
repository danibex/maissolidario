import HeroBase from "../Heros/HeroBase"
import Image from "next/image"
import estudante from "@/assets/img/estudante.png"
export default function HeroSobre(props) {
return(
<div className={`w-full p-3 m-0 h-auto bg-green-400`}>
    <div className={`sm:flex-row-reverse p-4 rounded-lg justify-center items-center flex flex-col w-full`}>
        <HeroBase className="m-2 text-center">
            <p className="text-3xl text-blue-600 font-semibold">O programa Mais Solidário Bolsas de Estudos oferece bolsas de estudo para estudantes de baixa renda, permitindo que tenham acesso à educação de qualidade e oportunidades de desenvolvimento.</p>
        </HeroBase>
        <HeroBase className="m-2">  
            <Image src={estudante} className="rounded-xl"/>
        </HeroBase>
    </div>
</div>
)
}