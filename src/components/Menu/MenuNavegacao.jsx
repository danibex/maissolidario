import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/img/logomaisnovo.png'
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
    IconX
  } from '@tabler/icons-react';


export default function MenuNavegacao(props) {
    let autenticado = false
    const [toggle, setToggle] = useState(false)
    const toggleMenu = () => {
    setToggle(!toggle)
}
    
    return(
        <div>
                <div  className={`
                flex sm:flex-row flex-col justify-between items-center p-4 border-b-2 border-green-100 shadow-lg
                `}>
                    <div className='flex flex-row justify-between items-center w-[100%] sm:w-auto'>
                        <Link href="/"><Image alt="" width={150} src={logo}/></Link>
                        <div className='sm:hidden flex'>
                            <button onClick={() => {toggleMenu()}}>{toggle ? <IconX/> : <IconMenu2/>}</button>
                        </div>
                    </div>
                <div className={`${toggle ? "flex" : "hidden" } w-[100%] flex-col sm:flex sm:flex-row justify-center items-center`}>
                    <div className='w-[100%] flex flex-col sm:flex-row justify-center items-center'>
                        <div className='w-[100%] flex flex-col sm:flex-row my-3 justify-center items-center'>
                            <BotaoMenu><IconSchool className='mr-1'/>Bolsas</BotaoMenu>
                            <BotaoMenu><IconCertificate className='mr-1'/> Teste Vocacional</BotaoMenu>
                            <BotaoMenu><IconNews className='mr-1'/> Blog</BotaoMenu>   
                        </div>
                        <div className={`flex flex-row ${autenticado?'hidden':'flex'}`}>
                            <button className="bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-lg py-2 px-4 text-white mx-2 font-bold text-lg flex flex-row justify-center items-center">
                                <IconUser className='mr-1'/>Entrar
                            </button>
                            <button className="border border-green-500 bg-white hover:bg-gray-300 active:bg-gray-400 text-blue-400 py-2 px-4 mx-2 font-semibold rounded-lg text-lg flex flex-row justify-center items-center">
                                <IconUserPlus className="mr-1"/>Cadastro
                            </button>
                        </div>
                        <div className={`${autenticado?'flex':'hidden'}`}>
                            <button className={`
                            flex flex-row justify-center items-center
                            px-2 py-3 rounded-lg text-lg
                            bg-green-500 hover:bg-green-600 active:bg-green-700 text-white mx-2 font-bold
                            `}>
                                <p className='absolute flex text-center items-center rounded-full h-[15px] w-[15px] text-black text-xs p-1 bg-red-500 ml-[-90px] mb-[-22px]'>1</p>
                                <IconBackpack className='mr-1' strokeWidth={2} size={32}/>
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
    )
}