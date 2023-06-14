import React, { useContext } from 'react'
import { AutenticacaoContext } from '@/contexts/AuthGoogle'
import { IconUser, IconUserPlus } from '@tabler/icons-react'
import { useRouter } from 'next/router'

export default function Finalizar() {
  const { signed, user, Sair } = useContext(AutenticacaoContext)
  const router = useRouter()
  console.log(user)
  if(signed) {
    return (
      <div>
        Pagina Privada<br/>
        Olá {user.displayName}!!!<br/>
        <button onClick={() => Sair()}>Sair</button>
      </div>
    )
  } else {
    router.push("/")
    return null
  }
}
