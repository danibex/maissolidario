import React from 'react';
import { useContext } from 'react';
import { TesteContext } from '@/contexts/TesteContext';
export default function Teste() {
    // const usuario = {nome: "daniel", cpf: "06353867557"}
    const {teste, mudarValorDoTeste} = useContext(TesteContext)
  /*function testar() {
    fetch("http://localhost:3000/api/daniel/1", {
      method: 'POST',
      body: JSON.stringify(usuario),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
      });
  }*/
  function Mudar() {
    mudarValorDoTeste("Novo Valor")
  }
  return (
    <div>
        <p>{teste}</p>
        <button onClick={Mudar}>Mudar</button>
    </div>
  );
}
