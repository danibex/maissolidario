import Image from 'next/image'
import Link from 'next/link'
import logo from '../../assets/img/logomaisnovo.png'
import BotaoMenu from './BotaoMenu';
import { IconNews } from '@tabler/icons-react';
import { IconCertificate } from '@tabler/icons-react';
import { IconSchool } from '@tabler/icons-react';
import { IconUser } from '@tabler/icons-react';
import { IconUserPlus } from '@tabler/icons-react';
import { IconBackpack } from '@tabler/icons-react';

export default function menuNavegacao(props) {
    let autenticado = true
    return(
        <div className="flex flex-col">
            <div  className={`flex justify-between items-center p-4 border-b-2 border-green-100 shadow-lg`}>
                <div>
                    <Link href="/"><Image alt="" width={150} src={logo}/></Link>
                </div>
                <div className='flex flex-row'>
                
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
            <div>
                {props.children}
            </div>
        </div>
    )
}