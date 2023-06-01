# 🚀 API Node.js com MongoDB

Este é um repositório que contém uma API básica construída com Node.js e MongoDB. A API permite a criação, leitura, atualização e exclusão (CRUD) de recursos em um banco de dados MongoDB.

## 📋 Pré-requisitos

Antes de executar a API, verifique se você tem as seguintes ferramentas instaladas em seu sistema:

- Node.js (versão 12 ou superior) ✅
- MongoDB (instância local ou remota) 🗄️

## ⚙️ Configuração

1. Clone este repositório em sua máquina local:

```bash
git clone https://github.com/Bruno-CLM/api-node-mongodb.git
```

2. Acesse o diretório do projeto:

```bash
cd api-node-mongodb
```

3. Instale as dependências do projeto:

```bash
npm install
```

4. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto e defina as seguintes variáveis:

```plaintext
MONGODB_URI=<URL_DO_MONGODB>
PORT=<PORTA_DO_SERVIDOR>
```

Substitua `<URL_DO_MONGODB>` pela URL de conexão com o banco de dados MongoDB e `<PORTA_DO_SERVIDOR>` pela porta em que deseja executar o servidor.

5. Inicie o servidor:

```bash
npm start
```

Após executar essas etapas, a API estará disponível em `http://localhost:<PORTA_DO_SERVIDOR>`.

## 🔀 Rotas

A API possui as seguintes rotas principais:

- `PUT /person/:id`: Atualiza um registro de pessoa existente com base no ID fornecido. ✏️
- `DELETE /person/:id`: Exclui um registro de pessoa específico com base no ID fornecido. ❌
- `POST /person`: Cria um novo registro de pessoa com base nos dados fornecidos no corpo da requisição. ➕
- `GET /person/:id`: Retorna um registro de pessoa específico com base no ID fornecido. 🔍
- `GET /person`: Retorna todos os registros de pessoas cadastradas. 📋
- `GET /`: Rota raiz da API. Pode ser usada para verificar se a API está funcionando corretamente.

Certifique-se de enviar as solicitações HTTP adequadas para cada rota, com os dados corretos no corpo da requisição, quando aplicável.

## 🤝 Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie um branch para sua nova funcionalidade ou correção de bug: `git checkout -b minha-nova-funcionalidade`.
3. Faça suas alterações e adicione os arquivos modificados: `git add .`.
4. Faça o commit das suas alterações: `git commit -m "Minha nova funcionalidade"`.
5. Envie para o branch remoto: `git push origin minha-nova-funcionalidade`.
6. Crie um novo Pull Request.

Peço desculpas pela omissão. Aqui está a seção de URL da API atualizada no arquivo `README.md`, incluindo o exemplo de JSON para a rota POST:

## 🔗 URL da API

A API está hospedada em:

```
https://nvt1v1w9sl.execute-api.us-east-1.amazonaws.com/
```

A parte inicial da URL representa o domínio e o caminho base da API. A partir dessa URL base, você pode adicionar os caminhos específicos para acessar diferentes rotas da API.

### Rotas da API

- `POST /api-node/person/create`: Cria um novo registro de pessoa com base nos dados fornecidos no corpo da requisição. ➕
- `GET /api-node/person`: Retorna todos os registros de pessoas cadastradas. 📋
- `GET /api-node/person/:id`: Retorna um registro de pessoa específico com base no ID fornecido. 🔍
- `PUT /api-node/person/:id`: Atualiza um registro de pessoa existente com base no ID fornecido e nos dados fornecidos no corpo da requisição. ✏️
- `DELETE /api-node/person/:id`: Exclui um registro de pessoa específico com base no ID fornecido. ❌

Certifique-se de enviar as solicitações HTTP adequadas para cada rota, com os dados corretos no corpo da requisição, quando aplicável.

### Exemplo de requisição POST

Você pode criar uma nova pessoa enviando uma solicitação POST para a rota `/api-node/person/create` com um corpo de requisição JSON contendo os dados da pessoa. Por exemplo:

**Rota:** `POST /api-node/person/create`

**Corpo da requisição (JSON):**
```json
{
    "name": "Mario",
    "salary": 3400,
    "approved": true
}
```

Certifique-se de enviar uma solicitação POST para a rota `/api-node/person/create` com um corpo de requisição JSON válido, conforme exemplificado acima, para criar uma nova pessoa na API.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
