import '@/styles/globals.css'
import '@/styles/heroPrincipal.module.css'
import { AutenticacaoProvider } from '@/contexts/AuthGoogle'
export default function App({ Component, pageProps }) {
  return (
  <AutenticacaoProvider>
    <Component {...pageProps} />
  </AutenticacaoProvider>
  )
}
