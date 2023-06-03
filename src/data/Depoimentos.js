class Noticia {
    constructor(id, urlImage, nome, profissao, depoimento) {
        this.id = id;
        this.urlImage = urlImage;
        this.nome = nome;
        this.profissao = profissao;
        this.depoimento = depoimento;
    }
}

import anaSilva from "../assets/img/Depoimentos/anaSilva.png"

export const depoimentos = [
    new Noticia(
        1, 
        anaSilva, 
        "Ana Silva", 
        "Advogada", 
        "A oportunidade proporcionada pela bolsa de estudo do programa Mais Solidário foi o ponto de virada na minha vida, permitindo-me ingressar em uma faculdade e transformar minha realidade. Hoje, sou uma graduada em Direito pela Universo, atuando com sucesso na área há mais de 4 anos."
        ),
    new Noticia(
        2, 
        anaSilva, 
        "Ana Silva", 
        "Advogada", 
        "A oportunidade proporcionada pela bolsa de estudo do programa Mais Solidário foi o ponto de virada na minha vida, permitindo-me ingressar em uma faculdade e transformar minha realidade. Hoje, sou uma graduada em Direito pela Universo, atuando com sucesso na área há mais de 4 anos."
        ),
    new Noticia(
        2, 
        anaSilva, 
        "Ana Silva", 
        "Advogada", 
        "A oportunidade proporcionada pela bolsa de estudo do programa Mais Solidário foi o ponto de virada na minha vida, permitindo-me ingressar em uma faculdade e transformar minha realidade. Hoje, sou uma graduada em Direito pela Universo, atuando com sucesso na área há mais de 4 anos."
        ),
]