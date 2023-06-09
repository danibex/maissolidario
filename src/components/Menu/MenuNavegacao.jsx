import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/img/logomaisnovo.png';
import BotaoMenu from './BotaoMenu';
import { useState } from 'react';
import {
  IconNews,
  IconCertificate,
  IconSchool,
  IconUser,
  IconUserPlus,
  IconBackpack,
  IconMenu2,
  IconX,
  IconChevronDown,
  IconHome2
} from '@tabler/icons-react';
import BotaoMenuBolsas from './BotaoMenuBolsas';

export default function MenuNavegacao(props) {
  let autenticado = false;
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const [toggleBolsas, setToggleBolsas] = useState(false);
  function toggleBolsasDropdown(event) {
    event.preventDefault();
    setToggleBolsas(!toggleBolsas);
    console.log(toggleBolsas);
  }

  return (
    <div>
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
                    onClick={toggleBolsasDropdown}
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
                    <BotaoMenuBolsas href="/bolsas/graduacao/1">Graduação</BotaoMenuBolsas>
                    <BotaoMenuBolsas href="/bolsas/posgraduacao/1">Pós-Graduação</BotaoMenuBolsas>
                    <BotaoMenuBolsas href="/bolsas/tecnico/1">Técnico</BotaoMenuBolsas>
                    <BotaoMenuBolsas href="/bolsas/colegio/1">Colégio</BotaoMenuBolsas>
                    
                  </div>
                </div>
                </div>
              </div>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/vocacional"><BotaoMenu><IconCertificate className='mr-1' /> Teste Vocacional</BotaoMenu></Link>
              <Link className='w-[100%] md:w-auto flex justify-center items-center' href="/blog"><BotaoMenu><IconNews className='mr-1' /> Blog</BotaoMenu></Link>
            </div>
            <div className={`flex flex-row ${autenticado ? 'hidden' : 'flex'}`}>
              <Link href="/login" className="bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg py-2 px-4 text-white mx-2 font-bold text-lg flex flex-row justify-center items-center">
                <IconUser className='mr-1' />Entrar
              </Link>
              <Link href="/registro" className="border border-green-500 bg-white hover:bg-gray-300 active:bg-gray-400 text-blue-400 py-2 px-4 mx-2 font-semibold rounded-lg text-lg flex flex-row justify-center items-center">
                <IconUserPlus className="mr-1" />Cadastro
              </Link>
            </div>
            <div className={`${autenticado ? 'flex' : 'hidden'}`}>
              <button className={`
                flex flex-row justify-center items-center
                px-2 py-3 rounded-lg text-lg
                bg-green-500 hover:bg-green-600 active:bg-green-700 text-white mx-2 font-bold
              `}>
                <p className='absolute flex text-center items-center rounded-full h-[15px] w-[15px] text-black text-xs p-1 bg-red-500 ml-[-90px] mb-[-22px]'>1</p>
                <IconBackpack className='mr-1' strokeWidth={2} size={32} />
                Mochila
              </button>
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
