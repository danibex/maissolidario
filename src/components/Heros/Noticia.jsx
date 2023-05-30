import Image from "next/image"
export default function Noticia(props) {
    return(
    <div className="bg-slate-100 w-[250px] h-[345px] justify-between flex flex-col border-spacing-1 rounded-lg pb-3 shadow-lg ">
    {/*url, width, nomeDoCurso, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio*/}
        <div className="rounded-md mx-0 mt-5 mb-1 flex justify-center items-center">
            <Image src={props.src}/>
        </div>
        <div className="gap-2 p-3 flex flex-col justify-between items-center">
            <h1 className="text-xl font-bold text-left">{props.titulo}</h1>
            <p className="w-[100%]">{props.resumoNoticia}<button className="text-blue-600 hover:underline">Ler tudo</button></p>
        </div>
    </div>
    )
}