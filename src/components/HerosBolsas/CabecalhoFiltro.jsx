import style from "@/styles/heroPrincipal.module.css"
import BotaoFiltro from "./BotaoFiltro"
import { useState } from "react"
export default function CabecalhoFiltro() {
    const [filtroSelecionado, setFiltroSelecionado] = useState(null);
  
    const handleFiltroClick = (filtro) => {
      setFiltroSelecionado(filtro);
    };
  
    return (
      <div className={`${style.fundoBolsa} flex flex-col justify-center items-center mb-4 py-8`}>
        {/* Fundo Personalizado */}
        <div className="h-[200px] flex justify-center items-center">
          Slides Persolanlizados PNG
        </div>
        <div className={`border h-[300px] w-[95%] rounded-2xl bg-slate-100`}>
          <div className="flex flex-row justify-around bg-green-400 rounded-t-2xl">
            <BotaoFiltro
              active={filtroSelecionado === "graduacao"}
              onClick={() => handleFiltroClick("graduacao")}
            >
              Graduação
            </BotaoFiltro>
            <BotaoFiltro
              active={filtroSelecionado === "posgraduacao"}
              onClick={() => handleFiltroClick("posgraduacao")}
            >
              Pós-Graduação
            </BotaoFiltro>
            <BotaoFiltro
              active={filtroSelecionado === "tecnico"}
              onClick={() => handleFiltroClick("tecnico")}
            >
              Técnico
            </BotaoFiltro>
            <BotaoFiltro
              active={filtroSelecionado === "colegio"}
              onClick={() => handleFiltroClick("colegio")}
            >
              Colégio
            </BotaoFiltro>
          </div>
          Filtro
        </div>
      </div>
    );
  }
  