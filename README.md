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

- `GET /api/users`: Retorna todos os usuários cadastrados. 📋
- `GET /api/users/:id`: Retorna um usuário específico com base no ID fornecido. 🔍
- `POST /api/users`: Cria um novo usuário com base nos dados fornecidos no corpo da requisição. ➕
- `PUT /api/users/:id`: Atualiza um usuário existente com base no ID fornecido e nos dados fornecidos no corpo da requisição. ✏️
- `DELETE /api/users/:id`: Exclui um usuário específico com base no ID fornecido. ❌

Certifique-se de enviar as solicitações HTTP adequadas para cada rota, com os dados corretos no corpo da requisição, quando aplicável.

## 🤝 Contribuição

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório.
2. Crie um branch para sua nova funcionalidade ou correção de bug: `git checkout -b minha-nova-funcionalidade`.
3. Faça suas alterações e adicione os arquivos modificados: `git add .`.
4. Faça o commit das suas alterações: `git commit -m "Minha nova funcionalidade"`.
5. Envie para o branch remoto: `git push origin minha-nova-funcionalidade`.
6. Crie um novo Pull Request.

## 📄 Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
