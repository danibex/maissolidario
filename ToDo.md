# DEFINIR INTERAÇÕES DO USUÁRIO COM A APLICAÇÃO PARA CRIAR FUNÇOES NO BACKEND

~~~sql
    CREATE TABLE usuarios (
        displayName VARCHAR(100), // Preenchido
        email VARCHAR(100), // Preenchido
        uid VARCHAR(100), // Preenchido
        // Asaas (compra)
        id VARCHAR(50), 
        address VARCHAR(200),
        addressNumber VARCHAR(10),
        cpfCnpj VARCHAR(20),
        mobilePhone VARCHAR(20),
        name VARCHAR(100),
        postalCode VARCHAR(20),
        province VARCHAR(50),
        state VARCHAR(50),
        // Mais Solidário
        curso VARCHAR(100)
    );

CREATE TABLE compras (
  id_cobranca SERIAL PRIMARY KEY,
  id_cliente VARCHAR REFERENCES usuarios(id),
  billing_type VARCHAR(20),
  value VARCHAR(10),
  due_date DATE,
  description VARCHAR(100)
);

CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  valor_cheio DECIMAL(10, 2),
  porcentagem_desconto DECIMAL(5, 2),
  valor_com_desconto DECIMAL(10, 2),
  economia_total DECIMAL(10, 2),
  salario_medio DECIMAL(10, 2),
  parceiro VARCHAR(100),
  cidade VARCHAR(100),
  modalidade VARCHAR(50),
  sobre TEXT,
  localizacao VARCHAR(200),
  conheca TEXT,
  duracao VARCHAR(50),
  nivel VARCHAR(50),
  turno VARCHAR(50)
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
id cobrança (criada automaticamente)
id chave estrangeira (id cliente)(customer id)
billingType (string) // BOLETO, PIX, CREDIT_CARD
value (string) // Valor
dueDate (string) // Data de Vencimento
description (string) // nome do curso

# Curso
nome
valor cheio
porcentagem desconto
valor com desconto
economia total 
salario medio
parceiro
id
cidade
modalidade
sobre
localizacao
conheca
duracao
nivel
turno


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