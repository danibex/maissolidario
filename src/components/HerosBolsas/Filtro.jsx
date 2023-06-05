export default function Filtro(props){
return(
<div className="flex-col w-full border-blue-800 border h-[240px] rounded-b-xl flex justify-center items-center">
    <div className="flex flex-row justify-around w-[100%]">
        <div>
            <p>Digite o Nome do Curso:</p>
            <input type="text" placeholder="Teste"/>
        </div>
        <div>
            <p>Nome da Faculdade (opcional):</p>
            <input type="text" placeholder="Teste"/>
        </div>
        <div>
            <p>Cidade:</p>
            <input type="text" placeholder="Teste"/>
        </div>
        <button>Procurar</button>
    </div>
    filtro
</div>
)
}