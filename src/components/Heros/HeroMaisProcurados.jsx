import { useState } from "react";
import { PrincipaisCursosPresenciais } from "../../data/PrincipaisCursosPresenciais";
import { PrincipaisCursosEad } from "../../data/PrincipaisCursosEad";
import MaisProcurado from "./MaisProcurado";
import { IconChevronsRight } from '@tabler/icons-react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const Breakpoints = {
  0: {
    slidesPerView: 1,
  },
  500: {
    slidesPerView: 2,
  },
  790: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1480: {
    slidesPerView: 5,
  },
};

export default function Parceiros() {
  const [painel, setPainel] = useState(false);

  function alternarPainel(alternar) {
    setPainel(alternar);
  }

  return (
      <div className="w-[100%] pt-2 pb-8 bg-slate-100 shadow-xl">
        <div className="flex flex-col justify-center items-center w-[100%] py-4">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Cursos Top 10:</h1>
          <div className="w-[290px] flex items-center justify-center border p-0 border-blue-500 bg-slate-100 rounded-full">
            <button
              className={`
                hover:bg-blue-500 hover:text-white active:bg-blue-600 
                rounded-3xl p-2 text-2xl font-medium text-blue-600 
                ${painel ? "" : "bg-blue-500 text-white"}
                m-1
                `}
              onClick={() => alternarPainel(false)}
            >
              Presenciais
            </button>
            <button
              className={`
                hover:bg-blue-500 hover:text-white active:bg-blue-600 
                rounded-3xl p-2 m-1 text-2xl font-medium text-blue-600 
                whitespace-nowrap
                ${painel ? "bg-blue-500 text-white" : ""}
                
                `}
              onClick={() => alternarPainel(true)}
            >
              A distância
            </button>
          </div>
        </div>

        <div className={`w-[100%] ${painel ? "hidden" : "flex"} justify-center items-center mt-2`}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={Breakpoints}
            loop={false}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              {PrincipaisCursosPresenciais.map((curso, index) => {
                return (
                  <div key={index} className="w-[100%]">
                  <SwiperSlide>
                  <button className="shadow-xl w-[250px] h-[345px] bg-white justify-between flex flex-col border rounded-lg pb-3 hover:opacity-80 active:opacity-70">
                    <MaisProcurado
                      url={curso.url}
                      nome={curso.nomeDoCurso}
                      precoCheio={curso.precoCheio}
                      porcentagemDesconto={curso.porcentagemDesconto}
                      valorComDesconto={curso.valorComDesconto}
                      salarioMedio={curso.salarioMedio}
                    />
                    </button>
                  </SwiperSlide>
                  </div>
                );
              })}
            </div>
          </Swiper>
        </div>

        <div className={`w-[100%] ${painel ? "flex" : "hidden"} justify-center items-center mt-2`}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={10}
            breakpoints={Breakpoints}
            loop={false}
            navigation
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            <div className="w-[100%] flex justify-center items-center">
              {PrincipaisCursosEad.map((curso, index) => {
                return (
                  <div key={index} className="w-[100%]">
                  <SwiperSlide>
                  <button className="shadow-xl w-[250px] h-[345px] bg-white justify-between flex flex-col border rounded-lg pb-3 hover:opacity-80 active:opacity-70">
                    <MaisProcurado
                      url={curso.url}
                      nome={curso.nomeDoCurso}
                      precoCheio={curso.precoCheio}
                      porcentagemDesconto={curso.porcentagemDesconto}
                      valorComDesconto={curso.valorComDesconto}
                      salarioMedio={curso.salarioMedio}
                    />
                  </button>
                  </SwiperSlide>
                  </div>
                );
              })}
            </div>
          </Swiper>
        </div>

        <div className="flex justify-center items-center mt-8">
          <button className="flex flex-row justify-center items-center active:bg-blue-700 hover:bg-blue-600 bg-blue-500 p-3 rounded-2xl font-bold text-2xl text-white">
            Consulte Mais
            <IconChevronsRight className="ml-2" size={35}/>
          </button>
        </div>

      </div>
  
  );
}
