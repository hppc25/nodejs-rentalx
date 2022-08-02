# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.
Deve ser possível listar todas as categorias.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
*Não deve ser possível alterar uma placa de um carro.
O carro deve ser cadastrado, por padrão com disponibilidade.
*O usuário responsável pelo cadastro, deve ser um usuário administrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pela nome da categoria.
Deve ser possível listar todos os carros disponíveis pela nome da marca.
Deve ser possível listar todos os carros disponíveis pela nome do carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.
Deve ser possível listar todas as especificações.
Deve ser possível listar todos os carros.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro, deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.
Deve ser possível listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro, deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.

# Definições

Requisitos são uma parte importante onde um analista conversa com um cliente e através disso, trás os requisitos funcionais e não funicionais, podendo mudar esses de acordo com futuras conversas, tendo assim uma evolução contínua.

**RF** => Requisitos Funcionais (Funcionalidades que aplicação pode ter)

**RNF** => Requisitos Não Funcionais (São requisitos que não estão ligados diretamente com a aplicação Ex: dados devem ser salvos em um banco de dados postgres)

**RN** => Regra de negócio (Regras por trás de nossos requisitos Ex: não deve ser possível cadastrar uma categoria com nome já existente)