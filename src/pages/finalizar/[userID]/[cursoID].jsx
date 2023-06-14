import React, { useContext } from 'react'
import { AutenticacaoContext } from '@/contexts/AuthGoogle'
import { IconUser, IconUserPlus } from '@tabler/icons-react'
import { useRouter } from 'next/router'

export default function Finalizar() {
  const { signed, user, Sair } = useContext(AutenticacaoContext)
  const router = useRouter()
  let usuarioLogado = null;

  if (signed && user) {
    try {
      usuarioLogado = JSON.parse(user);
      usuarioLogado = {
        uid: usuarioLogado.uid,
        email: usuarioLogado.email,
        emailVerified: usuarioLogado.emailVerified,
        displayName: usuarioLogado.displayName,
        photoURL: usuarioLogado.photoURL,
      };
    } catch (error) {
      console.error('Erro ao converter o JSON em objeto:', error);
    }
  }

  console.log(usuarioLogado);
  
  if(signed) {
    return (
      <div>
        Pagina Privada
        
        <button onClick={() => Sair()}>Sair</button>
      </div>
    )
  } else {
    router.push("/")
    return null
  }
}
