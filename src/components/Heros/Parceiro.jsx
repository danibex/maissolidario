import Image from "next/image";
import Link from "next/link";


export default function Parceiro(props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-3 flex flex-col justify-center items-center">
      <div>
        <Image src={props.URLescudo} alt="Escudo" />
      </div>
      <div>{props.porcentagemMaxima}</div>
      <div>{props.menorPreco}</div>
      <Link href={`/${props.link}`} className="px-2 py-2 rounded-lg bg-blue-500 text-white font-semibold my-2">
        Inscreva-se Grátis
      </Link>
    </div>
  );
}
