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

/*
TOKEN=aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAzMTMwNjY6OiRhYWNoX2RjNmQzZjE0LWExNjEtNGI2Ni04ZDc4LWQ4MjcwYTc1MTNiOA==
API_CREATE_CUSTOMER=https://www.asaas.com/api/v3/customers
API_LIST_CUSTOMER_CPF=https://www.asaas.com/api/v3/customers?cpfCnpj=

USER_POSTGRES=Daniel
HOST=localhost
DATABASE_POSTGRES=maissolidario
PASSWORD=323019
PORT=5432
*/