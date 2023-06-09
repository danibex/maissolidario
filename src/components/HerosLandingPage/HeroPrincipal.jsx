import HeroBase from "./HeroBase"
import InputForm from "./InputForm"
import style from "../../styles/heroPrincipal.module.css"
import { IconRocket } from '@tabler/icons-react';
import Image from "next/image";

export default function Hero(props) {
    function previnir(e) {
        e.preventDefault()
    }
    return(
    <div className={`bg-[#147BA7] w-full p-3 m-0 h-auto`}>
        <div className={`p-4 rounded-lg justify-center items-center flex flex-col w-full md:flex-row-reverse`}>
            <HeroBase className="mb-10 flex justify-center items-center">
                <Image src="/images/jovemNoNotebook.png" width={500} height={200} className="rounded-xl" alt="Gif promoções mais solidário"/>
                {/*<iframe className="rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/lM8v8Tf2PIw" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>*/}
            </HeroBase>
            <HeroBase className="flex justify-center items-center">
                <div className="shadow-xl mb-5 flex flex-col justify-center items-center rounded-xl w-[90%] md:w-[80%] bg-slate-200">
                    <h1 className={`
                    bg-[#D64517]
                    rounded-t-xl p-2 mt-0 w-[100%] flex justify-center items-center text-center
                    text-4xl text-white font-semibold
                    `}>Preencha Aqui<br/>e Garanta sua Bolsa <br/> Agora Mesmo!</h1> 
                    <form className={`flex flex-col justify-center my-3 w-[90%]`}> 
                        <InputForm tipo="text" dica="Nome"/>
                        <InputForm tipo="text" dica="E-mail"/>
                        <InputForm tipo="text" dica="Telefone"/>
                        <InputForm tipo="text" dica="Curso Desejado"/>
                        <InputForm tipo="text" dica="Instituição de Ensino Desejada(opcional)"/>
                        <InputForm tipo="text" dica="Cidade"/>
                        <div className="w-[100%] flex justify-center items-center">
                            <button onClick={previnir} className="px-4 py-2 my-2 text-xl flex justify-center items-center w-[60%] rounded-2xl bg-[#D64517] hover:bg-orange-800 active:bg-orange-900 text-white font-medium mx-1">
                            <IconRocket size={40} className="mr-1"/>
                            Mudar Meu Futuro
                            </button>
                        </div>
                    </form>
                </div>
            </HeroBase>
        </div>
    </div>
    )
}