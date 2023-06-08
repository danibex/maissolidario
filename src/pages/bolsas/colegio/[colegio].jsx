import MenuNavegacao from "@/components/Menu/MenuNavegacao"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import Filtro from "@/components/HerosBolsas/Filtro"
import Footer from "@/components/Footer/Footer"
import style from "@/styles/heroPrincipal.module.css"
import ItemFiltro from "@/components/HerosBolsas/ItemFiltro"
import CursosEcommerce from "@/components/HerosBolsas/CursosEcommerce"
import CardCurso from "@/components/HerosBolsas/CardCurso"
import { colegios } from "@/pages/api/data/Bolsas/Colegio"
import { IconSearch, IconChevronsRight, IconChevronsLeft } from "@tabler/icons-react"
import BotaoPaginacao from "@/components/HerosBolsas/BotaoPaginacao"
import odonto from "@/assets/img/Cursos/odontologia.png"
import BotaoWhatsapp from "@/components/BotaoWhatsapp"
import { useRouter } from 'next/router';
import { useState, useEffect } from "react"
import Link from "next/link"
export default function Bolsas() {
  const router = useRouter();
  const [paginacao, setPaginacao] = useState(1)

  useEffect(() => {
    router.push(`/bolsas/colegio/${paginacao}`)
  }, [paginacao])

  function proximaPagina() {
    setPaginacao(prevPaginacao => prevPaginacao + 1)
  }

  function paginaAnterior() {
    setPaginacao(prevPaginacao => prevPaginacao - 1)
  }

return(
<MenuNavegacao>
  <CabecalhoFiltro colegio fundo={style.fundoBolsaColegio}>
    <Filtro>
    <ItemFiltro titulo="Nome do Curso:" selectNome="Curso">
        <option value="Todos">Todos</option>
        <option value="Direito">Direito</option>
        <option value="Enfermagem">Enfermagem</option>
      </ItemFiltro>
      <ItemFiltro titulo="Faculdade:" selectNome="Faculdade">
        <option value="Todas">Todas</option>
        <option value="UNIFTC">UNIFTC</option>
        <option value="Universo Salvador">Universo Salvador</option>
        <option value="UNIFATECIE">UNIFATECIE</option>
        <option value="Faculdade Santíssimo">Faculdade Santíssimo</option>
        <option value="FATEC">FATEC</option>
        <option value="Colégio Acadêmico">Colégio Acadêmico</option>
      </ItemFiltro>
      <ItemFiltro titulo="Cidade:" selectNome="Cidade">
        <option value="Todas">Todas</option>
        <option value="Alagoinhas">Alagoinhas</option>
        <option value="Feira de Santana">Feira de Santana</option>
        <option value="Jequié">Jequié</option>
        <option value="Juazeiro">Juazeiro</option>
        <option value="Itabuna">Itabuna</option>
        <option value="Lauro de Freitas">Lauro de Freitas</option>
        <option value="Petrolina">Petrolina</option>
        <option value="Salvador">Salvador</option>
        <option value="Vitória da Conquista">Vitória da Conquista</option>
      </ItemFiltro>
      <ItemFiltro titulo="Modalidade" selectNome="Modalidade">
          <option value="Todas">Todas</option>
          <option value="Presencial">Presencial</option>
          <option value="EAD">EAD</option>
      </ItemFiltro>
    </Filtro>
  </CabecalhoFiltro>
  <CursosEcommerce>
    {/* url, nome, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio */}
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
    <CardCurso url={odonto} nome="Odontologia" precoCheio="2.000" porcentagemDesconto="75" valorComDesconto="580" salarioMedio="4.000"/>
  </CursosEcommerce>
    <div className="text-xl font-medium flex flex-row items-center justify-center w-full bg-slate-100 py-8">
      {/* REFATORAR BOTÃO */}
      <button 
      onClick={paginaAnterior}
      disabled={router.query.colegio == 1 ? true : false} 
      className={`py-2 pl-1 pr-4 flex flex-row justify-center items-center m-3 border border-blue-500 text-blue-500 rounded-full ${router.query.colegio == 1  ? "opacity-50" : "hover:bg-blue-500 hover:text-white hover:underline active:shadow-none"}  shadow-xl`}
      >
        <IconChevronsLeft size={30}/>Anterior
      </button>
      <button 
      className={`py-2 pr-1 pl-4 flex flex-row justify-center items-center m-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white hover:underline active:shadow-none shadow-xl`}
      onClick={proximaPagina}
      >
        Próximo<IconChevronsRight size={30}/>
      </button>
    </div>
<Footer/> 
<BotaoWhatsapp/>
</MenuNavegacao>
)
}