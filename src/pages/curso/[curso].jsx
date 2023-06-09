import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import Footer from "@/components/Footer/Footer";
import MenuNavegacao from "@/components/Menu/MenuNavegacao";
import Image from "next/image";
import imagemOdonto from "@/assets/img/Cursos/odontologia.png"
import imagemUniverso from "../../assets/img/Parceiros/Universo.png"
export default function Curso() {
return(
<MenuNavegacao>
<div className={`w-full bg-slate-100 flex flex-col sm:flex-row justify-around items-center gap-4 p-4`}>
    <div className={`flex flex-col gap-4 w-[60%] `}>
        <div className={`w-[100%] border pb-4 rounded-xl bg-white`}>
            <div className="relative">
                <Image src={imagemUniverso} className="absolute opacity-70 z-10 right-1 bottom-1" width={100}/>
                <Image src={imagemOdonto} className="rounded-t-xl shadow-lg"/>
            </div>
            {/* Refatorar itens (criar componentes) */}
            <h1 className="text-2xl font-bold my-3 text-center">"Nome do curso" na "Faculdade (Universo)"</h1>
            <div className="flex flex-col mx-4">
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Modalidade:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Presencial</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Duração:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold ml-4 border px-2 py-1 rounded-full">8 Semestres</p>
                    <p className="border-blue-400 text-blue-400 font-semibold ml-1 border px-2 py-1 rounded-full">4 Anos</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Nível:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Graduação</p>
                </div>
                <div className="my-2 flex flex-row justify-start items-center">
                    <h2 className="font-semibold text-lg">Turno:</h2>
                    <p className="border-blue-400 text-blue-400 font-semibold mx-4 border px-2 py-1 rounded-full">Noturno</p>
                </div>
            </div>
        </div>
        <div className={`w-[100%] p-4 border rounded-xl bg-white flex flex-row justify-center items-center`}>
            <button>Sobre</button>
            <button>Localização</button>
            <button>Conheça a "Faculdade (Universo)"</button>
        </div>
    </div>
    <div className={`flex flex-col p-4 border w-[40%] rounded-xl bg-white`}>
        <p>Preço cheio: (riscado)</p>
        <p>Desconto: (porcentagem)</p>
        <p>Valor: (valor com desconto)</p>
        <p>Economia Total: </p>
        <button>Garantir Esta Bolsa</button>
    </div>
</div>
<Footer/>
<BotaoWhatsapp/>
</MenuNavegacao>
)
}