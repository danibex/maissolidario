import Noticia from "./Noticia"
import { noticias } from "@/pages/api/data/PaginaPrincipal/Noticias"
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { IconNews } from '@tabler/icons-react';
import Link from "next/link"; 
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
    <div className="bg-green-400 w-[100%] h-auto p-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-blue-800">Últimas Novidades</h1>
        <div className="w-[100%] flex justify-center items-center gap-5 text-center">
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={1}
            slidesPerView={3}
            breakpoints={Breakpoints}
            loop={false}
            navigation
            autoplay={{
              delay: 3500,
              disableOnInteraction: false
            }}
          >
        <div className="swiper-slide flex items-center justify-center">  
          {noticias.map((noticia, index) => {
          return (
            <SwiperSlide key={index} style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Noticia
              key={index}
              src={noticia.urlImage}
              titulo={noticia.titulo}
              resumoNoticia={noticia.resumo}
              />
            </SwiperSlide>
          );
          })}
        </div>
        </Swiper>
        </div>
        <div className="flex justify-center items-center my-10">
        <Link href="/blog" className="p-3 flex flex-row bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg text-white font-medium text-xl justify-center items-center"><IconNews className="mr-1"/>Mais Notícias</Link>
        </div>
    </div>
    )
}