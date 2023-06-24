import MenuNavegacao from "@/components/Menu/MenuNavegacao"
import CabecalhoFiltro from "@/components/HerosBolsas/CabecalhoFiltro"
import Filtro from "@/components/HerosBolsas/Filtro"
import Footer from "@/components/Footer/Footer"
import style from "@/styles/heroPrincipal.module.css"
import ItemFiltro from "@/components/HerosBolsas/ItemFiltro"
import { IconSearch, IconChevronsRight, IconChevronsLeft } from "@tabler/icons-react"
import CursosEcommerce from "@/components/HerosBolsas/CursosEcommerce"
import CardCurso from "@/components/HerosBolsas/CardCurso"
import { useState, useEffect } from "react"
import BotaoWhatsapp from "@/components/BotaoWhatsapp"

export default function Bolsas() {
  const [paginacao, setPaginacao] = useState(1)
  const [dados, setDados] =useState({cursos: [], limite: 0})
  function carregarDados() {
    fetch(`api/cursos/graduacao/${paginacao}`)
    .then((response) => response.json())
    .then((data) => {
      setDados({ cursos: data.cursos, limite: Math.ceil(data.limite / 9) });
      console.log(dados.cursos); // Verificar se os dados estão sendo retornados corretamente
    })
    .catch((error) => {
      console.error('Erro ao carregar os dados:', error);
    });
  }
  useEffect(() => {
    carregarDados()
  }, []);

  useEffect(() => {
    carregarDados();
  }, [paginacao]);

  function proximaPagina() {
    setPaginacao(prevPaginacao => prevPaginacao + 1)
  }

  function paginaAnterior() {
    setPaginacao(prevPaginacao => prevPaginacao - 1)
  }

return(
<MenuNavegacao>
  <CabecalhoFiltro graduacao fundo={style.fundoBolsaGraduacao}>
    <Filtro>
      <ItemFiltro titulo="Nome do Curso:" selectNome="Curso">
        <option value="Todos">Todos</option>
        <option value="Direito">Direito</option>
        <option value="Enfermagem">Enfermagem</option>
      </ItemFiltro>
      <ItemFiltro titulo="Faculdade:" selectNome="Faculdade">
        <option value="Todas">Todas</option>
        <option value="UNIFTC">UNIFTC</option>
        <option value="Universo Salvador">Universo Salvador</option>
        <option value="UNIFATECIE">UNIFATECIE</option>
        <option value="Faculdade Santíssimo">Faculdade Santíssimo</option>
        <option value="FATEC">FATEC</option>
        <option value="Colégio Acadêmico">Colégio Acadêmico</option>
        <option value="+Edutec">+Edutec</option>
      </ItemFiltro>
      <ItemFiltro titulo="Cidade:" selectNome="Cidade">
        <option value="Todas">Todas</option>
        <option value="Alagoinhas">Alagoinhas</option>
        <option value="Feira de Santana">Feira de Santana</option>
        <option value="Jequié">Jequié</option>
        <option value="Juazeiro">Juazeiro</option>
        <option value="Itabuna">Itabuna</option>
        <option value="Lauro de Freitas">Lauro de Freitas</option>
        <option value="Petrolina">Petrolina</option>
        <option value="Salvador">Salvador</option>
        <option value="Vitória da Conquista">Vitória da Conquista</option>
      </ItemFiltro>
      <ItemFiltro titulo="Modalidade" selectNome="Modalidade">
          <option value="Todas">Todas</option>
          <option value="Presencial">Presencial</option>
          <option value="EAD">EAD</option>
      </ItemFiltro>
      <div className="flex justify-center items-center my-2 mr-4">
          <button className="justify-center items-center flex flex-row p-2 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white rounded-lg text-lg font-semibold"><IconSearch className="mr-2"/>Procurar</button>
      </div>
    </Filtro>
  </CabecalhoFiltro>
  <CursosEcommerce>
    {/* url, nome, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio */}
    {dados.cursos.map(curso => {
      return(
      <CardCurso 
        economia={curso.economia_total} 
        url={curso.urlimagem} 
        nome={curso.nome} 
        precoCheio={curso.valor_cheio} 
        porcentagemDesconto={curso.porcentagem_desconto} 
        valorComDesconto={curso.valor_com_desconto}
        salarioMedio={curso.salario_medio}/>
      )
    })}
  </CursosEcommerce>
  <div className="text-xl font-medium flex flex-row items-center justify-center w-full bg-slate-100 py-8">
      {/* REFATORAR BOTÃO */}
      <button 
      onClick={paginaAnterior}
      disabled={paginacao == 1 ? true : false} 
      className={`py-2 pl-1 pr-4 flex flex-row justify-center items-center m-3 border border-blue-500 text-blue-500 rounded-full ${paginacao == 1  ? "opacity-50" : "hover:bg-blue-500 hover:text-white hover:underline active:shadow-none"}  shadow-xl`}
      >
        <IconChevronsLeft size={30}/>Anterior
      </button>
      <button
      disabled={paginacao == dados.limite ? true : false} 
      className={`py-2 pr-1 pl-4 flex flex-row justify-center items-center m-3 border border-blue-500 text-blue-500 rounded-full ${paginacao == dados.limite ? "opacity-50" : "hover:bg-blue-500 hover:text-white hover:underline active:shadow-none"} shadow-xl`}
      onClick={proximaPagina}
      >
        Próximo<IconChevronsRight size={30}/>
      </button>
    </div>
<Footer/> 
<BotaoWhatsapp/>
</MenuNavegacao>
)
}