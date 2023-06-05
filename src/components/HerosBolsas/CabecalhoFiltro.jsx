import style from "@/styles/heroPrincipal.module.css"
import BotaoFiltro from "./BotaoFiltro"
import Slider from "./Slider";
import Image from "next/image";
export default function CabecalhoFiltro(props) {
return (
<div className={`${style.fundoBolsa} flex flex-col justify-center items-center mb-4 py-8`}>
{/* Fundo Personalizado */}
    <Slider>
        <Image src="" alt="Slide"/>{/* Atualizar src para props.src */}
    </Slider>
<div className={`border h-[300px] w-[95%] rounded-2xl bg-slate-100`}>
    <div className="flex flex-row justify-around bg-green-400 rounded-t-2xl">
    <BotaoFiltro active={props.graduacao} href="/bolsas/graduacao">
        Graduação
    </BotaoFiltro>
    <BotaoFiltro active={props.pos} href="/bolsas/pos-graduacao">
        Pós-Graduação
    </BotaoFiltro>
    <BotaoFiltro active={props.tecnico} href="/bolsas/tecnico">
        Técnico
    </BotaoFiltro>
    <BotaoFiltro active={props.colegio} href="/bolsas/colegio">
        Colégio
    </BotaoFiltro>
    </div>
    {props.children}
</div>
</div>
);
  }
  