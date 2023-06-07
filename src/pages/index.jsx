import MenuNavegacao from '@/components/Menu/MenuNavegacao'
import HeroPrincipal from '@/components/HerosLandingPage/HeroPrincipal'
import HeroParceiros from '@/components/HerosLandingPage/HeroParceiros'
import HeroMaisProcurados from '@/components/HerosLandingPage/HeroMaisProcurados'
import PrincipaisNoticias from '@/components/HerosLandingPage/PrincipaisNoticias'
import HeroSobre from '../components/HerosLandingPage/HeroSobre'
import HeroDepoimentos from '../components/HerosLandingPage/HeroDepoimentos'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'
import BotaoWhatsapp from '@/components/BotaoWhatsapp'
export default function Home() {
  return (
    <div className='h-full w-full'>
      <MenuNavegacao>
      <Head>
        <title>Mais Solidário</title>
      </Head>
        <HeroPrincipal/>
        <HeroParceiros/>
        <HeroSobre/>
        <HeroMaisProcurados/>
        <PrincipaisNoticias/>
        <HeroDepoimentos/>
      <Footer/>
      <BotaoWhatsapp/>
      </MenuNavegacao>
    </div>

  )
}
