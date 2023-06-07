import whatsapp from '@/assets/img/whatsappLogo.png'
import Image from 'next/image'
export default function BotaoWhatsapp() {
    return(
        <button className='fixed right-8 bottom-5 z-10'>
          <Image src={whatsapp} width={70} alt='Logo Whatsapp'/>
        </button>
    )
}