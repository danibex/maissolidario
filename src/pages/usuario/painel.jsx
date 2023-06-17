import MenuNavegacao from '@/components/Menu/MenuNavegacao'
import Footer from '@/components/Footer/Footer'
import BotaoWhatsapp from '@/components/BotaoWhatsapp'
import { IconCheck, IconSchool } from '@tabler/icons-react'
import Link from 'next/link'
export default function Home() {
  return (
        <MenuNavegacao className="w-full">
        <div className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 via-blue-300 to-green-400">
        <div className="shadow-xl my-5 mb-5 flex flex-col justify-center items-center rounded-xl w-[95%]
        bg-slate-200">
            <h1 className={`
            bg-gradient-to-br to-green-400 via-green-500 from-green-600
            rounded-t-xl p-2 mt-0 w-full flex justify-center items-center text-center
            text-4xl text-white font-semibold
            `}>Meu Curso</h1> 
            <div className='flex flex-col justify-around items-center w-[100%] min-h-[400px]'>
                <h2 className='text-xl p-2 text-center'>Você ainda não escolheu nenhum curso!</h2>
                <h2>Sua Bolsa de Estudos Irá Aparecer Aqui</h2>
                <Link 
                    href="/graduacao/1"
                    className={`w-[200px] my-2 
                    bg-blue-400 hover:bg-blue-500
                    active:bg-blue-600 p-2 rounded-lg text-white 
                    font-medium mx-1 flex flex-row justify-center items-center`} 
                    >
                        <IconSchool className='mr-2' />Bolsas
                </Link>

                {/* 
                Pra depois
                <h2 className='text-3xl mt-4'>Status</h2>
                <div className='w-[100%] flex flex-row justify-around items-center'>
                    TRANSFORMAR BOLAS EM COMPONENTES
                    <div className='flex flex-col justify-center items-center my-3'>
                        <div className='border-black border bg-green-400 text-blue-700 p-4 rounded-full'>
                            <IconCheck size={45} strokeWidth={2}/>
                        </div>
                        <p className='text-xl font-semibold'>Ecolher Curso</p>
                    </div>
                    <div className='flex flex-col justify-center items-center my-3'>
                        <div className='border-black border bg-green-400 text-blue-700 p-4 rounded-full'>
                            <IconCheck size={45} strokeWidth={2}/>
                        </div>
                        <p className='text-xl font-semibold'>Preencher Formulário</p>
                    </div>
                    <div className='flex flex-col justify-center items-center my-3'>
                        <div className='border-black border bg-green-400 text-blue-700 p-4 rounded-full'>
                            <IconCheck size={45} strokeWidth={2}/>
                        </div>
                        <p className='text-xl font-semibold'>Realizar Pagamento</p>
                    </div>
                    <div className='flex flex-col justify-center items-center my-3'>
                        <div className='border-black border bg-green-400 text-blue-700 p-4 rounded-full'>
                            <IconCheck size={45} strokeWidth={2}/>
                        </div>
                        <p className='text-xl font-semibold'>Cursar</p>
                    </div>
                </div>
                */}
            </div>
        </div>
    </div>
      <Footer/>
      <BotaoWhatsapp/>
      </MenuNavegacao>
    

  )
}
