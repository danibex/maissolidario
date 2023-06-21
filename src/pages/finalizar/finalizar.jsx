import BotaoWhatsapp from "@/components/BotaoWhatsapp";
import Footer from "@/components/Footer/Footer";
import MenuNavegacao from "@/components/Menu/MenuNavegacao";
import { IconQrcode, IconCreditCard, IconFileBarcode } from "@tabler/icons-react";
import { useState } from "react";
import { IconCash } from "@tabler/icons-react";
export default function Registro(props) {
    const [carregando, setCarregando] = useState(false);
    const [togglePagamento, setPagamento] = useState({pix: false, boleto: false, cartao: false})
    
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
<div className="w-full md:flex-row flex-col gap-4 flex justify-center items-center bg-gradient-to-b from-blue-200 via-blue-300 to-green-400">
        <div className="shadow-xl my-5 mb-5 flex flex-col justify-center items-center rounded-xl w-[80%] md:w-[50%]  bg-slate-200">
            <h1 className={`
            bg-gradient-to-br to-green-400 via-green-500 from-green-600
            rounded-t-xl p-2 mt-0 w-[100%] flex justify-center items-center text-center
            text-4xl text-white font-semibold
            `}>Finalizar Compra</h1> 
            <form className={`flex flex-col justify-center items-center my-3 w-[90%]`}> 
                <div className="flex flex-col md:flex-row items-center justify-center w-full">
                    <div className="flex flex-col items-center justify-center w-[100%] md:w-1/2">
                        <input type={"text"} placeholder="Nome Completo"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.name}
                        onChange={atualizarNome}
                        required
                        />
                        <input type={"text"} placeholder="CPF"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.cpfCnpj}
                        onChange={atualizarCPF}
                        />
                        <input type={"text"} placeholder="E-mail"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.email}
                        onChange={atualizarEmail}
                        />
                        <input type={"text"} placeholder="Telefone"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.mobilePhone}
                        onChange={atualizarTelefone}
                        />  
                    </div>
                    <div className="md:w-1/2 w-[100%] flex flex-col justify-center items-center">
                        <input type={"text"} placeholder="CEP"
                            className={`p-2 m-2 rounded-2xl w-[95%]`}
                            value={usuario.postalCode}
                            onChange={atualizarCEP}
                            />
                        <input type={"text"} placeholder="Bairro"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.province}
                        onChange={atualizarBairro}
                        />
                        <input type={"text"} placeholder="Rua"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.address}
                        onChange={atualizarRua}
                        />
                        <input type={"text"} placeholder="Complemento"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.complement}
                        onChange={atualizarComplemento}
                        />
                    </div>
                </div>
                        <input type={"text"} placeholder="Número da Casa"
                        className={`p-2 m-2 rounded-2xl w-[95%]`}
                        value={usuario.addressNumber}
                        onChange={atualizarNumero}
                        />
                <div className="w-auto md:w-[100%] flex justify-center items-center">
                </div>
            </form>
        </div>
        
        <div className={`flex flex-col p-4 border min-h-[430px] md:w-[40%] md:min-w-[40%] min-w-[90%] rounded-xl bg-white mt-5`}>
        <div className="mb-4">
            <div className="mb-2">
                <h2 className="font-medium text-center text-xl mb-1">Odontologia na Universo</h2>
                <div className="flex flex-row flex-wrap justify-center items-center whitespace-nowrap">   
                    <p className="border-blue-400 text-blue-400 font-semibold border px-2 py-1 mx-1 my-1 rounded-full">Presencial</p>
                    <p className="border-blue-400 text-blue-400 font-semibold border px-2 py-1 mx-1 my-1 rounded-full">8 Semestres</p>
                    <p className="border-blue-400 text-blue-400 font-semibold border px-2 py-1 mx-1 my-1 rounded-full">Graduação</p>
                    <p className="border-blue-400 text-blue-400 font-semibold border px-2 py-1 mx-1 my-1 rounded-full">Noturno</p>
                </div>
            </div>
            <div className="flex justify-center items-center"><hr className="w-[95%]"/></div>
        </div>
        <div>
            <div className="flex flex-row justify-between items-center text-base text-blue-400 font-medium">
                <p>Mensalidade Integral:</p>
                <p className="line-through">R$ 2.200,00</p>
            </div>
            <div className="flex flex-row justify-between items-center text-lg text-green-500 font-semibold">
                <p>Desconto do mais solidário:</p>
                <p>R$ -1.760,00</p>
            </div>
            <div className="flex flex-row justify-between items-center text-xl text-green-700 font-semibold">
                <p>Você pagará por mês:</p>
                <p>R$ 440,00</p>
            </div>
            <div className="flex justify-center items-center">
                <hr className="w-[95%] mt-6"/>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-4 text-blue-500 font-medium">
            <button onClick={() => {setPagamento({boleto:true, pix: false, cartao: false}); /*  */}} className={`${togglePagamento.boleto ? "bg-blue-600 text-white" : ""} active:bg-blue-600 hover:bg-blue-400 hover:text-white bg-slate-100 m-2 border border-blue-400 px-4 py-2 rounded-xl flex flex-row`}><IconFileBarcode className="mr-1"/>Boleto</button>
            <button onClick={() => {setPagamento({boleto:false, pix: true, cartao: false});}} className={`${togglePagamento.pix ? "bg-blue-600 text-white" : ""} active:bg-blue-600 hover:bg-blue-400 hover:text-white bg-slate-100 m-2 border border-blue-400 px-4 py-2 rounded-xl flex flex-row`}><IconQrcode className="mr-1"/> PIX</button>
            <button onClick={() => {setPagamento({boleto:false, pix: false, cartao: true});}} className={`${togglePagamento.cartao ? "bg-blue-600 text-white" : ""} active:bg-blue-600 hover:bg-blue-400 hover:text-white bg-slate-100 m-2 border border-blue-400 px-4 py-2 rounded-xl flex flex-row`}><IconCreditCard className="mr-1"/>Crédito</button>
        </div>
        <div className="mt-4 mb-4 flex justify-center items-center">
            <button href="/finalizar/finalizar" className="w-[250px] h-[55px] flex flex-row border p-4 text-xl font-bold text-white bg-blue-400 rounded-xl hover:bg-blue-500 active:bg-blue-600 justify-center items-center">
                <IconCash className={`mr-2`}/>
                <p>Gerar Pagamento</p>
            </button>
        </div> 
    </div>
</div>
    <Footer/>
    <BotaoWhatsapp/>
</MenuNavegacao>
)
}