import MenuNavegacao from "@/components/Menu/MenuNavegacao"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import Filtro from "@/components/HerosBolsas/Filtro"
import Footer from "@/components/Footer/Footer"
import style from "@/styles/heroPrincipal.module.css"
import ItemFiltro from "@/components/HerosBolsas/ItemFiltro"
import { IconSearch } from "@tabler/icons-react"
import CursosEcommerce from "@/components/HerosBolsas/CursosEcommerce"
import CardCurso from "@/components/HerosBolsas/CardCurso"
import { colegios } from "../api/data/Bolsas/Colegio"
export default function Bolsas() {
  console.log(colegios)
return(
<MenuNavegacao>
  <CabecalhoFiltro colegio fundo={style.fundoBolsaColegio}>
    <Filtro>
    <ItemFiltro titulo="Nome do Curso:" selectNome="Curso">
      <option value="Todos">Todos</option>
      <option value="Ensino Infantil - G03 ao G05">Ensino Infantil - G03 ao G05</option>
      <option value="Ensino Fundamental I - 1ª ao 5º ano">Ensino Fundamental I - 1ª ao 5º ano</option>
      <option value="Ensino Fundamental II - 6º ano">Ensino Fundamental II - 6º ano</option>
    </ItemFiltro>
    <ItemFiltro titulo="Parceiros (opcional):" selectNome="Parceiros">
      <option value="Colégio Acadêmico">Colégio Acadêmico</option>
    </ItemFiltro>
    <ItemFiltro titulo="Cidade:" selectNome="Cidade">
      <option value="Salvador">Salvador</option>
      <option value="Lauro de Freitas">Lauro de Freitas</option>
    </ItemFiltro>
    <ItemFiltro titulo="Modalidade:" selectNome="Modalidade">
        <option value="Presencial">Presencial</option>
    </ItemFiltro>
    <div className="flex justify-center items-center">
        <button className="justify-center items-center flex flex-row p-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white rounded-lg text-lg font-semibold"><IconSearch className="mr-2"/>Procurar</button>
    </div>
    </Filtro>
  </CabecalhoFiltro>
  <CursosEcommerce>
    <CardCurso/>
    <CardCurso/>
    <CardCurso/>
    <CardCurso/>
    <CardCurso/>
    <CardCurso/>
    <CardCurso/>
    <CardCurso/>
    <CardCurso/>
  </CursosEcommerce>
<Footer/> 
</MenuNavegacao>
)
}