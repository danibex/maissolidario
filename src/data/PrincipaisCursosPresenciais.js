class Curso {
    constructor(id, nomeDoCurso, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio, url, width = "") {
        this.id = id;
        this.nomeDoCurso = nomeDoCurso;
        this.precoCheio = precoCheio;
        this.porcentagemDesconto = porcentagemDesconto;
        this.valorComDesconto = valorComDesconto;
        this.salarioMedio = salarioMedio;
        this.url = url;
    }
}
  
  const direito = require("@/assets/img/Cursos/direito.png");
  const administracao = require("@/assets/img/Cursos/administracao.png");
  const enfermagem = require("@/assets/img/Cursos/enfermagem.png");
  const psicologia = require("@/assets/img/Cursos/psicologia.png");
  const pedagogia = require("@/assets/img/Cursos/pedagogia.png");
  const fisioterapia = require("@/assets/img/Cursos/fisioterapia.png");
  const nutricao = require("@/assets/img/Cursos/nutricao.png");
  const farmacia = require("@/assets/img/Cursos/farmacia.png");
  const contabeis = require("@/assets/img/Cursos/contabeis.png");
  const educacaoFisica = require("@/assets/img/Cursos/educacaoFisica.png");
  const odontologia = require("@/assets/img/Cursos/odontologia.png");

  // id, nome do curso, preco cheio, porcentagem desconto, valor com desconto, salario, url
  export const PrincipaisCursosPresenciais = [
    new Curso(1, "Direito", 1223.64, 80, 460, 4537.62, direito),
    new Curso(2, "Adminisração", 1223.64, 80, 460, 4537.62, administracao),
    new Curso(3, "Enfermagem", 1223.64, 80, 460, 4537.62, enfermagem),
    new Curso(4, "Psicologia", 1223.64, 80, 460, 4537.62, psicologia),
    new Curso(5, "Pedagogia", 1223.64, 80, 460, 4537.62, pedagogia),
    new Curso(6, "Fisioterapia", 1223.64, 80, 460, 4537.62, fisioterapia),
    new Curso(7, "Nutrição", 1223.64, 80, 460, 4537.62, nutricao),
    new Curso(8, "Farmácia", 1223.64, 80, 460, 4537.62, farmacia),
    new Curso(9, "Ciências Contábeis", 1223.64, 80, 460, 4537.62, contabeis),
    new Curso(10, "Educação Física", 1223.64, 80, 460, 4537.62, educacaoFisica),
    new Curso(10, "Odontologia", 1223.64, 80, 460, 4537.62, odontologia),
  ];
  