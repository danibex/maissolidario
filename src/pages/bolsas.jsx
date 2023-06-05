import Footer from "@/components/Footer/Footer"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import MenuNavegacao from "@/components/Menu/MenuNavegacao"
export default function Bolsas(props) {
    return(
      <MenuNavegacao>
        <CabecalhoFiltro/>
        <Footer/> 
      </MenuNavegacao>
    )
}