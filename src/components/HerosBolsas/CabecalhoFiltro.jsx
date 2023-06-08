import BotaoFiltro from "./BotaoFiltro"
import Slider from "./Slider";
import Image from "next/image";
export default function CabecalhoFiltro(props) {
return (
<div className={`${props.fundo} flex flex-col justify-center items-center py-8 shadow-xl`}>
{/* Fundo Personalizado */}
    <Slider>
        <Image src="" alt="Slide"/>{/* Atualizar src para props.src */}
    </Slider>
<div className={`border h-fit w-[95%] rounded-2xl bg-slate-100`}>
    <div className="flex flex-col md:flex-row justify-center items-center md:justify-around bg-green-400 rounded-t-2xl">
    <BotaoFiltro active={props.graduacao} href="/bolsas/graduacao/1">
        Graduação
    </BotaoFiltro>
    <BotaoFiltro active={props.pos} href="/bolsas/pos-graduacao/1">
        Pós-Graduação
    </BotaoFiltro>
    <BotaoFiltro active={props.tecnico} href="/bolsas/tecnico/1">
        Técnico
    </BotaoFiltro>
    <BotaoFiltro active={props.colegio} href="/bolsas/colegio/1">
        Colégio
    </BotaoFiltro>
    </div>
    {props.children}
</div>
</div>
);
  }
  