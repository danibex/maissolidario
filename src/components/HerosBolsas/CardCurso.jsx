import Image from "next/image"
import Link from "next/link"
export default function CardCurso(props) {
return(
<Link
href="/bolsas"
    class={`
         pb-4 rounded-xl bg-white
        flex flex-col justify-center items-center
        shadow-xl hover:opacity-90 active:opacity-100
        w-[410px] sm:w-[310px] md:w-[290px] lg:w-[320px]
    `}>
        <div className="rounded-t-xl mx-0 px-0 mt-0 pt-0 mb-1 w-[410px] sm:w-[310px] md:w-[290px] lg:w-[320px]">
            <Image alt="" src={props.url} className="rounded-t-xl w-[410px] sm:w-[310px] md:w-[290px] lg:w-[320px]"/>
            <div className="text-2xl font-medium mt-4">{props.nome}</div>
        </div>
        <div className="text-lg text-black font-bold flex flex-col justify-center items-center w-[100%] mt-2">
            <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-blue-600">R$ {props.precoCheio},00</p></div>
            <div className="text-xl font-bold text-green-600">Desconto de {props.porcentagemDesconto}%</div>
            <div className="text-2xl font-bold text-green-700">R$ {props.valorComDesconto},00</div>
        <p>Economize: R$ 800,00</p>
            <div className="text-lg font-medium text-orange-500 whitespace-nowrap">Salário Médio: R$ {props.salarioMedio},00</div>
        </div>
</Link> 
)}