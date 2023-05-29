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
  
  const pedagogia = require("@/assets/img/Cursos/pedagogia.png");
  const administracao = require("@/assets/img/Cursos/administracao.png");
  const logistica = require("@/assets/img/Cursos/logistica.png");
  const assistenteSocial = require("@/assets/img/Cursos/assistenteSocial.png");
  const gastronomia = require("@/assets/img/Cursos/gastronomia.png");
  const marketing = require("@/assets/img/Cursos/marketing.png");


  
  export const PrincipaisCursosEad = [
    new Curso(1, "Pedagogia", 1223.64, 80, 460, 4537.62, pedagogia),
    new Curso(2, "Administração", 1223.64, 80, 460, 4537.62, administracao),
    new Curso(3, "Logística", 1223.64, 80, 460, 4537.62, logistica),
    new Curso(4, "Serviço Social", 1223.64, 80, 460, 4537.62, assistenteSocial),
    new Curso(5, "Gastronomia", 1223.64, 80, 460, 4537.62, gastronomia),
    new Curso(6, "Marketing", 1223.64, 80, 460, 4537.62, marketing)
  ];
  