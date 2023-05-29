class Parceiro {
    constructor(id, porcentagemMaxima, menorPreco, URLescudo, link, width = "") {
        this.id = id;
        this.porcentagemMaxima = porcentagemMaxima;
        this.menorPreco = menorPreco;
        this.URLescudo = URLescudo;
        this.link = link;
        this.width = width;
    }
}
const Universo = require("@/assets/img/Parceiros/Universo.png");
const Atualiza = require("@/assets/img/Parceiros/Atualiza.png");
const Batista = require("@/assets/img/Parceiros/Batista.png");
const Cairu = require("@/assets/img/Parceiros/Cairu.png");
const ColegioAcademico = require("@/assets/img/Parceiros/ColegioAcademico.png");
const CPET = require("@/assets/img/Parceiros/CPET.png");
const DimensaoMax = require("@/assets/img/Parceiros/DimensaoMax.png");
const EduTec = require("@/assets/img/Parceiros/EduTec.png");
const Fatec = require("@/assets/img/Parceiros/Fatec.png");
const SantissimoSacramento = require("@/assets/img/Parceiros/SantissimoSacramento.png");
const Unex = require("@/assets/img/Parceiros/Unex.png");
const UniESPG = require("@/assets/img/Parceiros/UniESPG.png");
const UniFatecie = require("@/assets/img/Parceiros/UniFatecie.png");
const Uniftc = require("@/assets/img/Parceiros/Uniftc.png");
export const parceiros = [
    new Parceiro(1, "Bolsas de até 80%", "A partir de R$ 399,00", Universo, ""),
    new Parceiro(13, "Bolsas de até 80%", "A partir de R$ 399,00", UniFatecie, ""),
    new Parceiro(14, "Bolsas de até 80%", "A partir de R$ 399,00", Uniftc, ""),
    new Parceiro(11, "Bolsas de até 80%", "A partir de R$ 399,00", Unex, ""),
    new Parceiro(8, "Bolsas de até 80%", "A partir de R$ 399,00", EduTec, ""),
    new Parceiro(6, "Bolsas de até 80%", "A partir de R$ 399,00", CPET, ""),
    new Parceiro(1, "Bolsas de até 80%", "A partir de R$ 399,00", Universo, ""),
    new Parceiro(13, "Bolsas de até 80%", "A partir de R$ 399,00", UniFatecie, ""),
    new Parceiro(14, "Bolsas de até 80%", "A partir de R$ 399,00", Uniftc, ""),
    new Parceiro(11, "Bolsas de até 80%", "A partir de R$ 399,00", Unex, ""),
    new Parceiro(8, "Bolsas de até 80%", "A partir de R$ 399,00", EduTec, ""),
    new Parceiro(6, "Bolsas de até 80%", "A partir de R$ 399,00", CPET, ""),
    new Parceiro(4, "Bolsas de até 80%", "A partir de R$ 399,00", Cairu, ""),
    new Parceiro(10, "Bolsas de até 80%", "A partir de R$ 399,00", SantissimoSacramento, ""),
    new Parceiro(3, "Bolsas de até 80%", "A partir de R$ 399,00", Batista, ""),
    new Parceiro(2, "Bolsas de até 80%", "A partir de R$ 399,00", Atualiza, ""),
    new Parceiro(5, "Bolsas de até 80%", "A partir de R$ 399,00", ColegioAcademico, ""),
    new Parceiro(7, "Bolsas de até 80%", "A partir de R$ 399,00", DimensaoMax, ""),
    new Parceiro(12, "Bolsas de até 80%", "A partir de R$ 399,00", UniESPG, ""),
    new Parceiro(9, "Bolsas de até 80%", "A partir de R$ 165,00", Fatec, ""),
];
  