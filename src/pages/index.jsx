import MenuNavegacao from '@/components/Menu/MenuNavegacao'
import HeroPrincipal from '@/components/HerosLandingPage/HeroPrincipal'
import HeroParceiros from '@/components/HerosLandingPage/HeroParceiros'
import whatsapp from '@/assets/img/whatsappLogo.png'
import HeroMaisProcurados from '@/components/HerosLandingPage/HeroMaisProcurados'
import PrincipaisNoticias from '@/components/HerosLandingPage/PrincipaisNoticias'
import Image from 'next/image'
import HeroSobre from '../components/HerosLandingPage/HeroSobre'
import HeroDepoimentos from '../components/HerosLandingPage/HeroDepoimentos'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'
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
        <button className='fixed right-8 bottom-5 z-10'>
          <Image src={whatsapp} width={70} alt='Logo Whatsapp'/>
        </button>
      </MenuNavegacao>
    </div>

  )
}
