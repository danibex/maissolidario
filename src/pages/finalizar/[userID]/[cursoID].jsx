import React, { useContext } from 'react'
import { AutenticacaoContext } from '@/contexts/AuthGoogle'
import Link from 'next/link'

export default function Finalizar() {
  const { signed, user, Sair } = useContext(AutenticacaoContext)
  if (signed) {
    return (
      <div>
        Pagina Privada<br/>
        Olá {user.displayName}!!!<br/>
        <button onClick={() => Sair()}>Sair</button>
      </div>
    )
  } else {
    return(
      <Link href="/">Inicio</Link>
    )
  }
}
