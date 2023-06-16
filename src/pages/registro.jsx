import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import Footer from "@/components/Footer/Footer";
import MenuNavegacao from "@/components/Menu/MenuNavegacao";
import { IconUserPlus } from "@tabler/icons-react";
import { useState } from "react";
import {Circles} from 'react-loader-spinner';

export default function Registro(props) {
    const [carregando, setCarregando] = useState(false);
    
    let novoUsuario = {
        name: "",
        email: "",
        phone: "",
        mobilePhone: "",
        cpfCnpj: "",
        postalCode: "",
        address: "", // rua
        addressNumber: "",
        complement: "",
        province: "",
        externalReference: "",
        notificationDisabled: false,
        additionalEmails: "",
        municipalInscription: "",
        stateInscription: "",
        observations: ""
    };
    const [usuario, setUsuario] = useState(novoUsuario)
    
    function cadastrar (e) {
        setCarregando(true);
        e.preventDefault()
        fetch('/api/asaas/cadastrarUsuario', {
            method: 'POST',
            body: JSON.stringify(usuario)
        })
        .then(resp =>  resp.json()) 
        .then(data => { console.log(data)}) 
        .finally(() => {
            setTimeout(() => {
              setCarregando(false);
            }, 1000); // Atraso de 2 segundos (2000 milissegundos)
          })
}

function atualizarNome(event) {
    setUsuario({...usuario, name: event.target.value})
}
function atualizarCPF(event) {
    setUsuario({...usuario, cpfCnpj: event.target.value})
}
function atualizarEmail(event) {
    setUsuario({...usuario, email: event.target.value})
}
function atualizarTelefone(event) {
    setUsuario({...usuario, mobilePhone: event.target.value})
}
function atualizarCEP(event) {
    setUsuario({...usuario, postalCode:  event.target.value})
}
function atualizarComplemento(event) {
    setUsuario({...usuario, complement: event.target.value })
}
function atualizarRua(event) {
    setUsuario({...usuario, address: event.target.value })
}
function atualizarNumero(event) {
    setUsuario({...usuario, addressNumber: event.target.value })
}
function atualizarBairro(event) {
    setUsuario({...usuario, province: event.target.value })
}
return(
<MenuNavegacao>
<div className="w-full flex justify-center items-center bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
        <div className="shadow-xl my-5 mb-5 flex flex-col justify-center items-center rounded-xl w-[80%] md:w-[50%]  bg-slate-200">
            <h1 className={`
            bg-gradient-to-br to-green-400 via-green-500 from-green-600
            rounded-t-xl p-2 mt-0 w-[100%] flex justify-center items-center text-center
            text-4xl text-white font-semibold
            `}>Finalizar Compra</h1> 
            <form className={`flex flex-col justify-center items-center my-3 w-[90%]`}> 
                <div className="flex flex-col md:flex-row items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center w-1/2">
                        <input type={"text"} placeholder="Nome Completo"
                        className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                        value={usuario.name}
                        onChange={atualizarNome}
                        />
                        <input type={"text"} placeholder="CPF"
                        className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                        value={usuario.cpfCnpj}
                        onChange={atualizarCPF}
                        />
                        <input type={"text"} placeholder="E-mail"
                        className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                        value={usuario.email}
                        onChange={atualizarEmail}
                        />
                        <input type={"text"} placeholder="Telefone"
                        className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                        value={usuario.mobilePhone}
                        onChange={atualizarTelefone}
                        />  
                    </div>
                    <div className="w-1/2 flex flex-col justify-center items-center">
                        <input type={"text"} placeholder="CEP"
                            className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                            value={usuario.postalCode}
                            onChange={atualizarCEP}
                            />
                        <input type={"text"} placeholder="Bairro"
                        className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                        value={usuario.province}
                        onChange={atualizarBairro}
                        />
                        <input type={"text"} placeholder="Rua"
                        className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                        value={usuario.address}
                        onChange={atualizarRua}
                        />
                        <input type={"text"} placeholder="Complemento"
                        className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                        value={usuario.complement}
                        onChange={atualizarComplemento}
                        />
                    </div>
                </div>
                        <input type={"text"} placeholder="Número da Casa"
                        className={`p-2 m-2 rounded-2xl md:w-[95%]`}
                        value={usuario.addressNumber}
                        onChange={atualizarNumero}
                        />
                <div className="w-auto md:w-[100%] flex justify-center items-center">
                    <button onClick={cadastrar} className="w-[230px] h-[45px] px-4 py-2 my-2 text-xl flex flex-row justify-center items-center rounded-2xl bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white font-medium mx-1">
                    <IconUserPlus className={`mr-2 ${carregando ? "hidden" : " "}`}/>
                    <div className={`mr-2 ${carregando ? "block" : "hidden"}`}>
                    <Circles
                    type="Puff"
                    color="#4ade80"
                    height={30}
                    width={30}
                    />
                    </div>
                    <p className={`${carregando ? "hidden" : " "} whitespace-nowrap`}>Finalizar Cadastro</p>
                    </button>
                </div>
            </form>
        </div>
</div>
    <Footer/>
    <BotaoWhatsapp/>
</MenuNavegacao>
)
}