import Image from "next/image"
export default function MaisProcurado(props) {
    return(
    <button className="shadow-xl w-[250px] h-[345px] bg-white justify-between flex flex-col border rounded-lg pb-3">
        {/*url, width, nomeDoCurso, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio*/}
        <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1 h-[170px] w-[250px]">
            <Image alt="" src={props.url} width={250} className="rounded-t-lg"/>
            <div className="text-2xl font-medium">{props.nome}</div>
        </div>
        <div className="flex justify-center items-center">
            <hr className="w-[90%]"/>
        </div>
        <div className="p-3 flex flex-col justify-center items-center w-[100%]">
            <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">R$ {props.precoCheio},00</p></div>
            <div className="text-xl font-bold text-green-600">Desconto de {props.porcentagemDesconto}%</div>
            <div className="text-2xl font-bold text-green-700">R$ {props.valorComDesconto},00</div>
            <div className="text-lg font-medium text-orange-500 whitespace-nowrap">Salário Médio: R$ {props.salarioMedio},00</div>
        </div>
    </button>
    )
}