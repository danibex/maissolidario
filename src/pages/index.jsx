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
import { Element } from 'react-scroll';
export default function Home() {
  return (
    <div className='h-full w-full'>
      <MenuNavegacao>
      <Head>
        <title>Mais Solidário</title>
      </Head>
        <HeroSobre/>
        <Element name="cursos" className="cursos">
          <HeroMaisProcurados/>
        </Element>
        <Element name="formulario" className="formulario">
          <HeroPrincipal/>
        </Element>
        <Element name="parceiros" className="parceiros">
          <HeroParceiros/>
        </Element>
        <Element name="depoimentos" className="depoimentos">
          <HeroDepoimentos/>
        </Element>
        <Element name="selos" className="selos">
          <PrincipaisNoticias/>
        </Element>
      <Footer/>
      <BotaoWhatsapp/>
      </MenuNavegacao>
    </div>

  )
}

/*
TOKEN=aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAzMTMwNjY6OiRhYWNoXzE0Mjc3NWNmLTUxNTYtNDBlMC04OThhLTE5MTg4MjdjOWI0Mw==
API_CREATE_CUSTOMER=https://www.asaas.com/api/v3/customers
API_LIST_CUSTOMER_CPF=https://www.asaas.com/api/v3/customers?cpfCnpj=

USER_POSTGRES=Daniel
HOST=localhost
DATABASE_POSTGRES=maissolidario
PASSWORD=323019
PORT=5432
*/