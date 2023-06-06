import MenuNavegacao from "@/components/Menu/MenuNavegacao"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import Filtro from "@/components/HerosBolsas/Filtro"
import Footer from "@/components/Footer/Footer"
import style from "@/styles/heroPrincipal.module.css"
export default function Bolsas() {
    return(
      <MenuNavegacao>
        <CabecalhoFiltro pos fundo={style.fundoBolsaPos}>
          <Filtro/>
        </CabecalhoFiltro>
        <Footer/> 
      </MenuNavegacao>
    )
}