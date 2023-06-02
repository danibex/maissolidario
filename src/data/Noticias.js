class Noticia {
    constructor(id, urlImage, titulo, resumo, noticia,) {
        this.id = id;
        this.urlImage = urlImage;
        this.titulo = titulo;
        this.resumo = resumo;
        this.noticia = noticia;
    }
}

import estudanteDiploma from "../assets/img/Noticias/estudanteDiploma.png"
import alunosMaisVelhos from "../assets/img/Noticias/alunosMaisVelhos.png"

export const noticias = [
    new Noticia(
        1, 
        estudanteDiploma, 
        "Bolsas de Estudos Transformadoras no Nordeste", 
        "Startup Baiana Mais Solidário gera mais de 1 milhão e meio de reais em Economia...", 
        ""),
    new Noticia(
        2, 
        alunosMaisVelhos, 
        "Nunca é Tarde para entrar para a faculdade", 
        "A procura de uma graduação entre oessoas maduras após 40 anos aumentam significativamente....", 
        ""),
    new Noticia(
        3, 
        estudanteDiploma, 
        "Superando Limitações financeiras", 
        "Startup Baiana Mais Solidário gera mais de 1 milhão e meio de reais em Economia...", 
        ""),
    new Noticia(
        4, 
        estudanteDiploma, 
        "Bolsas de Estudos Transformadoras no Nordeste", 
        "Startup Baiana Mais Solidário gera mais de 1 milhão e meio de reais em Economia...", 
        ""),
];
  