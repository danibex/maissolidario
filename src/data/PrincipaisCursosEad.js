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


  
  export const PrincipaisCursosEad = [
    new Curso(1, "Medicina", 1223.64, 80, 460, 4537.62, direito),
    new Curso(2, "Medicina", 1223.64, 80, 460, 4537.62, direito),
    new Curso(3, "Medicina", 1223.64, 80, 460, 4537.62, direito),
    new Curso(4, "Medicina", 1223.64, 80, 460, 4537.62, direito),
    new Curso(5, "Medicina", 1223.64, 80, 460, 4537.62, direito),
    new Curso(6, "Medicina", 1223.64, 80, 460, 4537.62, direito)
  ];
  