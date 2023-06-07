export default function Filtro(props){
return(
<div className="flex-row w-full h-[100px] rounded-b-xl flex justify-between items-center">
    <div className="flex flex-row justify-around w-[100%]">
        <div className="flex flex-col justify-center items-center">
            <p className="mb-2 text-lg font-semibold">Nome do Curso:</p>
            <input className="w-[150px] px-2 py-1 rounded-3xl text-center text-base" type="text"/>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="mb-2 text-lg font-semibold">Faculdade (opcional):</p>
            <select name="Faculdade" className="w-[120px] h-[35px] rounded-2xl text-center">
                <option value="UNIFTC">UNIFTC</option>
                <option value="Universo Salvador">Universo Salvador</option>
                <option value="UNIFATECIE">UNIFATECIE</option>
                <option value="Faculdade Santíssimo">Faculdade Santíssimo</option>
                <option value="FATEC">FATEC</option>
                <option value="Colégio Acadêmico">Colégio Acadêmico</option>
                <option value="EAD">EAD</option>
                <option value="EAD">EAD</option>
                <option value="EAD">EAD</option>
                <option value="EAD">EAD</option>
                <option value="EAD">EAD</option>
                <option value="EAD">EAD</option>
            </select>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="mb-2 text-lg font-semibold">Cidade:</p>
            <select name="Cidade" className="w-[170px] h-[35px] rounded-2xl text-center">
                <option value="Alagoinhas">Alagoinhas</option>
                <option value="Feira de Santana">Feira de Santana</option>
                <option value="Jequié">Jequié</option>
                <option value="Juazeiro">Juazeiro</option>
                <option value="Itabuna">Itabuna</option>
                <option value="Lauro de Freitas">Lauro de Freitas</option>
                <option value="Petrolina">Petrolina</option>
                <option value="Salvador">Salvador</option>
                <option value="Vitória da Conquista">Vitória da Conquista</option>
            </select>
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className="mb-2 text-lg font-semibold">Modalidade:</p>
            <select name="Modalidade" className="w-[120px] h-[35px] rounded-2xl text-center">
                <option value="Presencial">Presencial</option>
                <option value="EAD">EAD</option>
            </select>
        </div>
            <div className="flex justify-center items-center">
                <button className="p-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white rounded-lg text-lg font-semibold">Procurar</button>
            </div>
    </div>
</div>
)
}