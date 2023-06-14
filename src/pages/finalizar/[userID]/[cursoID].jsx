import React, { useContext, useEffect } from 'react'
import { AutenticacaoContext } from '@/contexts/AuthGoogle'
import { IconUser, IconUserPlus } from '@tabler/icons-react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Finalizar() {
  const { signed, user, Sair } = useContext(AutenticacaoContext)
  const router = useRouter()
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
