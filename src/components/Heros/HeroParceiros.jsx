import Parceiro from "./Parceiro"
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


import {parceiros} from "@/data/Parceiros"

const Breakpoints = {
    0: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    },
    820: {
        slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  };

export default function Parceiros() {
return(
    <div className="w-[100%] flex justify-center items-center">
    <div className="w-[100%] bg-slate-100 py-4 px-0 text-center h-[370px] shadow-lg">
        <h1 className="text-3xl font-bold mb-3 text-blue-800">Melhores Bolsas</h1>
        <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        breakpoints={Breakpoints}
        loop={true}
        autoplay={
        {delay: 3000, // Tempo entre cada rolagem
        disableOnInteraction: false // Permitir rolagem manual sem interrupção
        }}
        >
        <div className="flex flex-row justify-center items-center">
            {parceiros.map(parceiro => {
                return(
                <SwiperSlide key={parceiro.id}>
                <button>
                    <Parceiro URLescudo={parceiro.URLescudo} 
                    porcentagemMaxima={parceiro.porcentagemMaxima} 
                    menorPreco={parceiro.menorPreco} 
                    link={parceiro.link}/>
                </button>
                </SwiperSlide>
                )
            })}
          </div>
        </Swiper>
    </div>
    </div>
)
}