import MenuNavegacao from "@/components/Menu/MenuNavegacao"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import Filtro from "@/components/HerosBolsas/Filtro"
import Footer from "@/components/Footer/Footer"
import style from "@/styles/heroPrincipal.module.css"
import ItemFiltro from "@/components/HerosBolsas/ItemFiltro"
import { IconSearch, IconChevronsRight, IconChevronsLeft } from "@tabler/icons-react"
import BotaoPaginacao from "@/components/HerosBolsas/BotaoPaginacao"
import CursosEcommerce from "@/components/HerosBolsas/CursosEcommerce"
import CardCurso from "@/components/HerosBolsas/CardCurso"
import odonto from "../../assets/img/Cursos/odontologia.png"
export default function Bolsas() {
return(
<MenuNavegacao>
<CabecalhoFiltro pos fundo={style.fundoBolsaPos}>
<Filtro>
<ItemFiltro titulo="Nome do Curso:" selectNome="Curso">
  <option value="Direito">Direito</option>
  <option value="Enfermagem">Enfermagem</option>
</ItemFiltro>
<ItemFiltro titulo="Faculdade (opcional):" selectNome="Faculdade">
  <option value="UNIFTC">UNIFTC</option>
  <option value="Universo Salvador">Universo Salvador</option>
  <option value="UNIFATECIE">UNIFATECIE</option>
  <option value="Faculdade Santíssimo">Faculdade Santíssimo</option>
  <option value="FATEC">FATEC</option>
  <option value="Colégio Acadêmico">Colégio Acadêmico</option>
</ItemFiltro>
<ItemFiltro titulo="Cidade:" selectNome="Cidade">
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
    <option value="Presencial">Presencial</option>
    <option value="EAD">EAD</option>
</ItemFiltro>
<div className="flex justify-center items-center">
    <button className="justify-center items-center flex flex-row p-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white rounded-lg text-lg font-semibold"><IconSearch className="mr-2"/>Procurar</button>
</div>
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
    <BotaoPaginacao className="py-2 pl-1 pr-4"><IconChevronsLeft size={30}/>Anterior</BotaoPaginacao>
    <BotaoPaginacao className="py-2 pr-1 pl-4">Próximo<IconChevronsRight size={30}/></BotaoPaginacao>
  </div>
<Footer/> 
</MenuNavegacao>
)
}