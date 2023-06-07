import MenuNavegacao from "@/components/Menu/MenuNavegacao"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import Filtro from "@/components/HerosBolsas/Filtro"
import Footer from "@/components/Footer/Footer"
import style from "@/styles/heroPrincipal.module.css"
import ItemFiltro from "@/components/HerosBolsas/ItemFiltro"
export default function Bolsas() {
    return(
      <MenuNavegacao>
        <CabecalhoFiltro colegio fundo={style.fundoBolsaColegio}>
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
          <button className="p-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white rounded-lg text-lg font-semibold">Procurar</button>
      </div>
    </Filtro>
        </CabecalhoFiltro>
        <Footer/> 
      </MenuNavegacao>
    )
}