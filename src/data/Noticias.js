class Noticia {
    constructor(id, urlImage, titulo, resumo, noticia,) {
        this.id = id;
        this.urlImage = urlImage;
        this.titulo = titulo;
        this.resumo = resumo;
        this.noticia = noticia;
    }
}

import estudanteDiploma from "../assets/img/Noticias/estudanteDiploma.jpg"

export const noticias = [
    new Noticia(
        1, 
        estudanteDiploma, 
        "Bolsas de Estudos Transformadoras no Nordeste", 
        "Startup Baiana Mais Solidário gera mais de 1 milhão e meio de reais em Economia...", 
        ""),
    new Noticia(
        2, 
        estudanteDiploma, 
        "Bolsas de Estudos Transformadoras no Nordeste", 
        "Startup Baiana Mais Solidário gera mais de 1 milhão e meio de reais em Economia...", 
        ""),
    new Noticia(
        3, 
        estudanteDiploma, 
        "Bolsas de Estudos Transformadoras no Nordeste", 
        "Startup Baiana Mais Solidário gera mais de 1 milhão e meio de reais em Economia...", 
        ""),
    new Noticia(
        4, 
        estudanteDiploma, 
        "Bolsas de Estudos Transformadoras no Nordeste", 
        "Startup Baiana Mais Solidário gera mais de 1 milhão e meio de reais em Economia...", 
        ""),
];
  