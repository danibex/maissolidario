import Colegio from "./ConstrutoraCursos"
/* 
id, 
nomeDoCurso, 
cidade, 
modalidade, 
especializacao, 
parceiro, 
precoCheio, 
porcentagemDesconto,
economiaTotal,
campus, 
sobre, 
duracao, 
urlImage
*/

// Pagamento: BOLETO, CREDIT_CARD, PIX
export const colegios = [
    new Colegio(
        1,
        "Ensino Infantil - G3 ao G5", 
        "Salvador", 
        "Modalidade", 
        "Especialização",
        "Parceiro",
        500,
        45,
        "84.480",
        "Salvador",
        "Curso Muito Bom!!",
        "1 ano",
        )
]