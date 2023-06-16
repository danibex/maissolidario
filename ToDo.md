# DEFINIR INTERAÇÕES DO USUÁRIO COM A APLICAÇÃO PARA CRIAR FUNÇOES NO BACKEND

~~~sql
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    displayName VARCHAR(100),
    email VARCHAR(100),
    uid VARCHAR(20),
    address VARCHAR(200),
    addressNumber VARCHAR(10),
    cpfCnpj VARCHAR(20),
    mobilePhone VARCHAR(20),
    name VARCHAR(100),
    postalCode VARCHAR(20),
    province VARCHAR(50),
    state VARCHAR(50),
    curso VARCHAR(100)
);

// ACESSAR BANCO DE DADOS
\c nome_do_banco_de_dados
// LISTAR BANCO DE DADOS
\l

~~~

# Usuário:
## Google Auth:
	displayName
	email
	uid
## Asaas:
	address
	addressNumber
	cpfCnpj
	email
	id
	mobilePhone
	name
	postalCode
	province //bairro
	state //estado
## Mais Solidário
	curso
	
# Cobrança:
id chave estrangeira (id cliente)(customer id)
billingType // BOLETO, PIX, CREDIT_CARD
value // Valor
dueDate // Data de Vencimento
description // nome do curso

# Parceiros
id
nome

# Curso
valor cheio
porcentagem desconto
valor com desconto
economia total 
salario medio


# Entidades
* Parceiros
    * ID
    * Nome
* Bolsas
    * ID
    * Nome ou Curso
    * Parceiro
    * Cidado
    * Estado
    * Modalidade
    * Nível
    * Preço cheio
    * Porcentagem desconto
    * Valor com desconto
    * Duração
    * Sobre
    * Localização
    * Turno
* Usuários
    * ID externo
    * ID interno PostgreSQL
    * Nome Completo
    * Email
    * Telefone
    * Cidade
    * Estado
    * Rua
    * Bairro 
    * Numero casa
    * CPF
    * CEP
    * Curso (Quando Comprado)
    * Boletos
* Compra
    * ID
    * Usuário 
    * Bolsa
    * Data



# Refatorar
    1. mais procurados


# Backend

# Usuários
## GET
* /usuarios = criar
* /usuarios/[id] = recuperar
* /usuarios?nome=daniel&email=danielivam96@gmail = listar com filtro

## POST
* /usuarios/[id] = atualizar

## DELETE
* /usuarios/[id] = deletar

# Pagamentos
## POST
* /pagamentos
    * body (olhar documentação)





# (Done) Toggle Menu Responsive Mobile (pegar de ecommerceburguer) 
# (Done) Atualizar preço/porcentagem parceiros
# (Done)Função Map consumir dados ficticios principais cursos
# (Done)Swiper condicional Responsive Mobile Principais Cursos
# (Done)Swiper automático infinito parceiros

# (Done)Botão zap fixo
# (Done)Atualizar nome/imagem/desconto... principais cursos

# (Done)Criar banco de dados fictios para notícias
# (Done)Card Notícias fazer
# (Done)Card notícias Swiper automático infinito
# (Done)Botão para acessar blog através das notícias (embaixo no meio)
# (Done)Função map para rederizar notícias
# (Done)Depoimentos card com foto redonda e texto simples educamaisbrasil chatgpt
# (Done)Footer (pegar de site principal)