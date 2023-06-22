~~~ json
{
  "customer": "{CUSTOMER_ID}",
  "billingType": "BOLETO",
  "dueDate": "2017-06-10",
  "value": 100,
  "description": "Pedido 056984",
  "externalReference": "056984",
  "discount": {
    "value": 10,
    "dueDateLimitDays": 0
  },
  "fine": {
    "value": 1
  },
  "interest": {
    "value": 2
  },
  "postalService": false
}
~~~

~~~sql
  -- CRIAR NO BANCO DE DADOS EXATAMENTE COMO ESTÁ
    CREATE TABLE usuarios (
        -- Google
        displayName VARCHAR(100), -- Preenchido
        email VARCHAR(100), -- Preenchido
        uid VARCHAR(100), -- Preenchido
        -- Asaas (compra)
        id VARCHAR(50) SERIAL PRIMARY KEY, 
        address VARCHAR(200),
        addressNumber VARCHAR(10),
        cpfCnpj VARCHAR(20),
        mobilePhone VARCHAR(20),
        name VARCHAR(100),
        postalCode VARCHAR(20),
        province VARCHAR(50),
        state VARCHAR(50),
        -- Mais Solidário
        curso VARCHAR(100)
    );

CREATE TABLE compra (
  id_cobranca SERIAL PRIMARY KEY,
  id_cliente VARCHAR REFERENCES usuarios(id),
  billing_type VARCHAR(20),
  value VARCHAR(10),
  due_date DATE,
  description VARCHAR(100),
  curso VARCHAR(100),
);

CREATE TABLE cursos (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  valor_cheio DECIMAL(10, 2),
  porcentagem_desconto DECIMAL(5, 2),
  valor_com_desconto DECIMAL(10, 2),
  economia_total DECIMAL(10, 2),
  salario_medio DECIMAL(10, 2),
  cidade VARCHAR(100),
  modalidade VARCHAR(50),
  sobre TEXT,
  localizacao VARCHAR(200),
  conheca TEXT,
  duracao VARCHAR(50),
  nivel VARCHAR(50),
  turno VARCHAR(50)
  urlImagem VARCHAR(100)
  parceiro_id (chave estrangeira)
);

CREATE TABLE parceiros (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100),
  urlImagem VARCHAR(100)
);


// ACESSAR BANCO DE DADOS
\c nome_do_banco_de_dados
// LISTAR BANCO DE DADOS
\l

~~~