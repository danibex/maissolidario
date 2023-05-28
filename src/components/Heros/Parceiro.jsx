import Image from "next/image";
import Link from "next/link";


export default function Parceiro(props) {
  return (
    <div className="flex justify-between bg-white h-[270px] rounded-xl shadow-md p-3  flex-col  items-center">
      <div className="min-h-[160px] flex justify-center items-center">
        <Image src={props.URLescudo} alt="Escudo" width={150} height={150}/>
      </div>
     
      <div className="mb-2 pb-1 text-lg text-green-600 font-bold">
        <div>{props.porcentagemMaxima}</div>
        <div>{props.menorPreco}</div>
      </div> 
     
    
    </div>
  );
}
