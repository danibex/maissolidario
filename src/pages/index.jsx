import MenuNavegacao from '@/components/Menu/MenuNavegacao'
import HeroPrincipal from '@/components/Heros/HeroPrincipal'
import HeroParceiros from '@/components/Heros/HeroParceiros'
import whatsapp from '@/assets/img/whatsappLogo.png'
import HeroMaisProcurados from '@/components/Heros/HeroMaisProcurados'
import PrincipaisNoticias from '@/components/Heros/PrincipaisNoticias'
import Image from 'next/image'
import HeroSobre from '../components/Heros/HeroSobre'
import HeroDepoimentos from '../components/Heros/HeroDepoimentos'
export default function Home() {
  return (
    <div className='h-full w-full'>
      <MenuNavegacao>
        <HeroPrincipal/>
        <HeroParceiros/>
        <HeroSobre inverter/>
        <HeroMaisProcurados/>
        <PrincipaisNoticias/>
        {/*<p>Depoimentos: https://www.educamaisbrasil.com.br/</p> */}
        <HeroDepoimentos/>
        <button className='fixed right-8 bottom-5 z-10'>
          <Image src={whatsapp} width={70} alt='Logo Whatsapp'/>
        </button>
      </MenuNavegacao>
    </div>

  )
}
