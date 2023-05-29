import MenuNavegacao from '@/components/Menu/MenuNavegacao'
import HeroPrincipal from '@/components/Heros/HeroPrincipal'
import HeroParceiros from '@/components/Heros/HeroParceiros'

import HeroMaisProcurados from '@/components/Heros/HeroMaisProcurados'
import PrincipaisNoticias from '@/components/Heros/PrincipaisNoticias'

export default function Home() {
  return (
    <div className='h-full w-full'>
      <MenuNavegacao>
        <HeroPrincipal/>
        <HeroParceiros/>
        <HeroMaisProcurados/>
        <PrincipaisNoticias/>

        <p>Depoimentos: https://www.educamaisbrasil.com.br/</p>
      </MenuNavegacao>
    </div>

  )
}
