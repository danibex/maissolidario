import Image from "next/image"
import direito from "@/assets/img/direito.jpg"
import { useState } from "react"
import {PrincipaisCursosPresenciais} from "../../data/PrincipaisCursosPresenciais"

export default function MaisProcurados() {
    let [painel, setPainel] = useState(false)
    function alternarPainel(alternar) {
        setPainel(alternar)
    }
    return(
    <div className={`w-[100%] bg-green-400 py-4 px-6 text-center flex flex-col justify-center items-center`}>
            <h1 className="text-3xl font-bold text-blue-800">Em dúvida sobre qual curso fazer?</h1>
        
        
		<div className="w-[100%]">
            <div className="w-[100%] bg-slate-100 rounded-xl my-3 shadow-md py-4 px-10 flex flex-col justify-center items-center">
            <div className="flex flex-row items-center justify-center">
                <button className={`
                hover:bg-blue-600 hover:text-white active:bg-blue-700 
                rounded-l-3xl p-2 mx-0 my-2 text-2xl font-medium text-blue-600 
                border-y border-l border-r-[0.5px] border-blue-600`}
                onClick={() => alternarPainel(false)}
                >
                    Presenciais
                </button>
                <button className={`
                hover:bg-blue-600 hover:text-white active:bg-blue-700 
                rounded-r-3xl p-2 mx-0 my-2 text-2xl font-medium text-blue-600 
                border-y border-r border-l-[0.5px]  border-blue-600 whitespace-nowrap`}
                onClick={() => alternarPainel(true)}
                >
                    A distância
                </button>
            </div>
        {/* Presencial */}
        <div className={`flex gap-3 flex-wrap justify-center items-center mt-2`}>
			
        <div className={`${painel ? 'hidden' : 'false'} flex gap-3 flex-wrap justify-center items-center mt-2`}>
            

            <div className="w-[250px] h-[345px] bg-white justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
                <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1">
                    <Image src={direito} alt="" width={250} className="rounded-t-lg"/>
                    <div className="text-2xl font-medium">Direito</div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-[90%]"/>
                </div>
                <div className="p-3 flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">R$ 2.000,00</p></div>
                    <div className="text-xl font-bold text-green-600">Desconto de 80%</div>
                    <div className="text-2xl font-bold text-green-700">R$ 399,00</div>
                    <div className="text-lg font-medium text-orange-500">Salário Médio: R$ 4.537,62</div>
                </div>
            </div>
            
            <button>
            <div className="w-[250px] h-[345px] bg-white justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
                <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1">
                    <Image src={direito} alt="" width={250} className="rounded-t-lg"/>
                    <div className="text-2xl font-medium">Direito</div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-[90%]"/>
                </div>
                <div className="p-3 flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">R$ 2.000,00</p></div>
                    <div className="text-xl font-bold text-green-600">Desconto de 80%</div>
                    <div className="text-2xl font-bold text-green-700">R$ 399,00</div>
                    <div className="text-lg font-medium text-orange-500">Salário Médio: R$ 4.537,62</div>
                </div>
            </div>
            </button>

            <div className="w-[250px] h-[345px] bg-white justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
                <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1">
                    <Image src={direito} alt="" width={250} className="rounded-t-lg"/>
                    <div className="text-2xl font-medium">Direito</div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-[90%]"/>
                </div>
                <div className="p-3 flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">R$ 2.000,00</p></div>
                    <div className="text-xl font-bold text-green-600">Desconto de 80%</div>
                    <div className="text-2xl font-bold text-green-700">R$ 399,00</div>
                    <div className="text-lg font-medium text-orange-500">Salário Médio: R$ 4.537,62</div>
                </div>
            </div>
            
            <div className="w-[250px] h-[345px] bg-white justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
                <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1">
                    <Image src={direito} alt="" width={250} className="rounded-t-lg"/>
                    <div className="text-2xl font-medium">Direito</div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-[90%]"/>
                </div>
                <div className="p-3 flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">R$ 2.000,00</p></div>
                    <div className="text-xl font-bold text-green-600">Desconto de 80%</div>
                    <div className="text-2xl font-bold text-green-700">R$ 399,00</div>
                    <div className="text-lg font-medium text-orange-500">Salário Médio: R$ 4.537,62</div>
                </div>
            </div>
            
            <div className="w-[250px] h-[345px] bg-white justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
                <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1">
                    <Image src={direito} alt="" width={250} className="rounded-t-lg"/>
                    <div className="text-2xl font-medium">Direito</div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-[90%]"/>
                </div>
                <div className="p-3 flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">R$ 2.000,00</p></div>
                    <div className="text-xl font-bold text-green-600">Desconto de 80%</div>
                    <div className="text-2xl font-bold text-green-700">R$ 399,00</div>
                    <div className="text-lg font-medium text-orange-500">Salário Médio: R$ 4.537,62</div>
                </div>
            </div>
            
            <div className="w-[250px] h-[345px] bg-white justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
                <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1">
                    <Image src={direito} alt="" width={250} className="rounded-t-lg"/>
                    <div className="text-2xl font-medium">Direito</div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-[90%]"/>
                </div>
                <div className="p-3 flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">R$ 2.000,00</p></div>
                    <div className="text-xl font-bold text-green-600">Desconto de 80%</div>
                    <div className="text-2xl font-bold text-green-700">R$ 399,00</div>
                    <div className="text-lg font-medium text-orange-500">Salário Médio: R$ 4.537,62</div>
                </div>
            </div>
        </div>
        {/* Fim Presencial */}

        {/* EAD */}
        <div className={`gap-3 flex-wrap justify-center items-center mt-2  ${painel ? 'flex' : 'hidden'} `}>
            <div className="w-[250px] h-[345px] bg-white justify-between flex flex-col border border-spacing-1 rounded-lg pb-3 shadow-lg">
                <div className="rounded-t-lg mx-0 px-0 mt-0 pt-0 mb-1">
                    <Image src={direito} alt="" width={250} className="rounded-t-lg"/>
                    <div className="text-2xl font-medium">Teste</div>
                </div>
                <div className="flex justify-center items-center">
                    <hr className="w-[90%]"/>
                </div>
                <div className="p-3 flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-center items-center"><p className="line-through text-lg text-red-600">R$ 2.000,00</p></div>
                    <div className="text-xl font-bold text-green-600">Desconto de 80%</div>
                    <div className="text-2xl font-bold text-green-700">R$ 399,00</div>
                    <div className="text-lg font-medium text-orange-500">Salário Médio: R$ 4.537,62</div>
                </div>
            </div>   
        </div>
        {/* Fim EAD */}
        </div>
    </div>
        </div>
    </div>
    )
}