class Curso {
    constructor(id, nomeDoCurso, precoCheio, porcentagemDesconto, valorComDesconto, salarioMedio, url, width = "") {
        this.id = id;
        this.nomeDoCurso = nomeDoCurso;
        this.precoCheio = precoCheio;
        this.porcentagemDesconto = porcentagemDesconto;
        this.valorComDesconto = valorComDesconto;
        this.salarioMedio = salarioMedio;
        this.url = url;
        this.width = width;
    }
}
  
  const direito = require("@/assets/img/direito.jpg");
  
  export const PrincipaisCursosPresenciais = [
    new Curso(1, "Direito", 1223.64, 62.5, 460, 4537.62, direito),
    new Curso(2, "Direito", 1223.64, 62.5, 460, 4537.62, direito),
    new Curso(3, "Direito", 1223.64, 62.5, 460, 4537.62, direito),
    new Curso(4, "Direito", 1223.64, 62.5, 460, 4537.62, direito),
    new Curso(5, "Direito", 1223.64, 62.5, 460, 4537.62, direito),
    new Curso(6, "Direito", 1223.64, 62.5, 460, 4537.62, direito)
  ];
  