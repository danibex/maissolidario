import Image from "next/image";
import Link from "next/link";


export default function Parceiro(props) {
  return (
    <div className="flex justify-between bg-white h-[270px] rounded-xl shadow-md p-3  flex-col  items-center">
      <div className="min-h-[160px] flex justify-center items-center">
        <Image src={props.URLescudo} alt="Escudo" />
      </div>
     
      <div className="mb-2 pb-1">
        <div>{props.porcentagemMaxima}</div>
        <div>{props.menorPreco}</div>
      </div> 
     
    
    </div>
  );
}
