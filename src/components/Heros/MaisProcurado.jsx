import Image from "next/image"
export default function MaisProcurado(props) {
    return(
    <div className="w-[250px] h-[345px] justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
        {/*url, width, nomeDoCurso, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio*/}
        <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1">
            <Image alt="" src={props.url} width={250} className="rounded-t-lg"/>
            <div className="text-2xl font-medium">{props.nome}</div>
        </div>
        <div className="flex justify-center items-center">
            <hr className="w-[90%]"/>
        </div>
        <div className="p-3 flex flex-col justify-center items-center">
            <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">{props.precoCheio}</p></div>
            <div className="text-xl font-bold text-green-600">{props.porcentagemDesconto}</div>
            <div className="text-2xl font-bold text-green-700">{props.valorComDesconto}</div>
            <div className="text-lg font-medium text-orange-500">{props.salarioMedio}</div>
        </div>
    </div>
    )
}