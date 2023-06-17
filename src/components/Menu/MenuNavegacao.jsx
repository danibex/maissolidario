import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/img/logomaisnovo.png';
import BotaoMenu from './BotaoMenu';
import { useContext, useState } from 'react';
import {
  IconNews,
  IconCertificate,
  IconSchool,
  IconUser,
  IconUserPlus,
  IconUserCircle,
  IconMenu2,
  IconX,
  IconChevronDown,
  IconHome2
} from '@tabler/icons-react';
import BotaoMenuBolsas from './BotaoMenuBolsas';
import BotaoMenuUsuario from './BotaoMenuUsuario';
import { AutenticacaoContext } from '@/contexts/AuthGoogle';
export default function MenuNavegacao(props) {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const [toggleBolsas, setToggleBolsas] = useState(false);
  const [toggleUsuario, setToggleUsuario] = useState(false)
  function toggleBolsasDropdownBolsas(event) {
    event.preventDefault();
    setToggleBolsas(!toggleBolsas);
  }
  function toggleBolsasDropdownUsuario(event) {
    event.preventDefault();
    setToggleUsuario(!toggleUsuario);
  }

  const {logar, signed, user, Sair} = useContext(AutenticacaoContext)
  return (
    <div className={props.className}>
      <div className={`
        flex md:flex-row flex-col justify-between items-center p-4 border-b-2 border-green-100 shadow-lg
      `}>
        <div className='flex flex-row justify-between items-center w-[100%] md:w-auto'>
          <Link href="/"><Image alt="" width={150} src={logo} /></Link>
          <div className='md:hidden flex mr-5'>
            <button onClick={() => { toggleMenu() }}>{toggle ? <IconX size={40} /> : <IconMenu2 size={40} />}</button>
          </div>
        </div>
        <div className={`${toggle ? "flex" : "hidden"} w-[100%] flex-col md:flex md:flex-row justify-center items-center`}>
          <div className='w-[100%] flex flex-col md:flex-row justify-center items-center'>
            <div className='w-[100%] flex flex-col md:flex-row my-3 justify-center items-center'>
                <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/"><BotaoMenu><IconHome2 className='mr-1' />Início</BotaoMenu></Link>
              <div className='w-[100%] md:w-auto flex flex-col justify-center items-center'>
                <div className='flex flex-col text-center self-center w-[100%] md:w-auto'>
                <div className='w-[100%] flex justify-center items-center'>    
                    <button 
                    onClick={toggleBolsasDropdownBolsas}
                    className={`md:w-auto w-[50%] my-2 
                    md:my-0 bg-blue-400 hover:bg-blue-500
                    active:bg-blue-600 p-2 rounded-lg text-white 
                    font-medium mx-1 flex flex-row justify-center items-center`} 
                    >
                        <IconSchool className='mr-1' />Bolsas
                        <IconChevronDown className='ml-2' />
                    </button>
                </div>
                <div className='flex w-[100%] justify-center items-start'>
                  <div className={`${toggleBolsas ? "absolute" : "hidden"} flex flex-col justify-center items-center w-[50%]  mt-2 py-2 md:w-[200px] bg-white rounded-lg shadow-lg z-10`}>
                    <BotaoMenuBolsas href="/graduacao/1">Graduação</BotaoMenuBolsas>
                    <BotaoMenuBolsas href="/posgraduacao/1">Pós-Graduação</BotaoMenuBolsas>
                    <BotaoMenuBolsas href="/tecnico/1">Técnico</BotaoMenuBolsas>
                    <BotaoMenuBolsas href="/colegio/1">Colégio</BotaoMenuBolsas>
                    
                  </div>
                </div>
                </div>
              </div>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/vocacional"><BotaoMenu><IconCertificate className='mr-1' /> Teste Vocacional</BotaoMenu></Link>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/blog"><BotaoMenu><IconNews className='mr-1' /> Blog</BotaoMenu></Link>
            </div>
            <div className={`flex flex-row ${signed ? 'hidden' : 'flex'}`}>
              <button onClick={() => logar()} className="bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg py-2 px-4 text-white mx-2 font-bold text-lg flex flex-row justify-center items-center">
                <IconUser className='mr-1' />Entrar
              </button>
              <button onClick={() => logar()} className={`border ${props.esconderRegistro ? "hidden" : "flex"} border-green-500 bg-white hover:bg-gray-300 active:bg-gray-400 text-blue-400 py-2 px-4 mx-2 font-semibold rounded-lg text-lg flex flex-row justify-center items-center`}>
                <IconUserPlus className="mr-1" />Cadastro
              </button>
            </div>
            <div className={`${signed ? 'flex' : 'hidden'} justify-center items-center flex-row`}>
              <div className='flex flex-row justify-center items-center'>
                <p className='whitespace-nowrap mr-3 font-semibold'>Olá, {user.displayName}!</p>
                <button onClick={toggleBolsasDropdownUsuario}
                className={`
                  flex flex-row justify-center items-center
                  rounded-full text-lg p-2
                  bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold
                `}
                >
                  <IconUserCircle className='' strokeWidth={2} size={32} />
                </button>
              </div>
              <div className='flex w-[100%] justify-end items-start md:justify-end md:items-start mt-10'>
                  <div className={`${toggleUsuario ? "absolute" : "hidden"} flex flex-col justify-center items-center w-[50%]  mt-2 py-2 md:w-[200px] bg-white rounded-lg shadow-lg z-10`}>
                    <BotaoMenuUsuario href="/usuario/painel">Minha Bolsa</BotaoMenuUsuario>
                    <button onClick={() => {Sair()}} className="hover:bg-green-400 hover:text-white hover:underline active:bg-green-500 active:no-underline  flex justify-center items-center w-full text-left px-4 py-2">Sair</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {props.children}
      </div>
    </div>
  );
}
