import Noticia from "./Noticia"
import { noticias } from "@/data/Noticias"
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export default function PrincipaisNoticias() {
    const Breakpoints = {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1250: {
          slidesPerView: 4,
        },
      };
    return(
    <div className="bg-green-500 w-[100%] h-auto p-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">Últimas Novidades</h1>
        <div className="w-[100%] flex justify-center items-center gap-5">
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={20}
            breakpoints={Breakpoints}
            loop={false}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
        <div className="flex items-center justify-center gap-2">  
            {noticias.map((noticia, index) => {
                return(
                <SwiperSlide>
                    <Noticia key={index} src={noticia.urlImage} titulo={noticia.titulo} resumoNoticia={noticia.resumo} /> 
                </SwiperSlide>
                )
            })}
        </div>
        </Swiper>
        </div>
    </div>
    )
}