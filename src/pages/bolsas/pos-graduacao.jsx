import MenuNavegacao from "@/components/Menu/MenuNavegacao"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import Filtro from "@/components/HerosBolsas/Filtro"
import Footer from "@/components/Footer/Footer"
export default function Bolsas(props) {
    return(
      <MenuNavegacao>
        <CabecalhoFiltro pos>
          <Filtro/>
          Pós Graduação
        </CabecalhoFiltro>
        <Footer/> 
      </MenuNavegacao>
    )
}