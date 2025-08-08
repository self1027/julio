# Projeto Julio

Este é um projeto de exemplo para gerenciamento de tarefas.

## Estrutura do Projeto

- `db/sequelize.js`: Configuração do Sequelize para conexão com o banco de dados.
- `tasks/tasksModel.js`: Modelo de dados para as tarefas.
- `tasks/tasksRoutes.js`: Rotas da API para as operações CRUD de tarefas.
- `index.js`: Ponto de entrada principal da aplicação.
- `package.json`: Dependências e scripts do projeto.

## Como Rodar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a aplicação:
   ```bash
   node index.js
   ```

## Endpoints da API (Exemplo)

- `GET /tasks`: Lista todas as tarefas.
- `POST /tasks`: Cria uma nova tarefa.
- `GET /tasks/:id`: Retorna uma tarefa específica.
- `PUT /tasks/:id`: Atualiza uma tarefa existente.
- `DELETE /tasks/:id`: Deleta uma tarefa.