
# # API Gerenciamento de projetos

Uma API pensada para que o usuario se registre e possa compartilhar ideias de projetos, contando com o apoio de outros usuarios, os tornando colaboradores do projetos. o criador do projeto pode dividir as tarefas entre os colaboradores conforme as habilidades e afinidade de cada um.


## Funcionalidades

- Registrar usuario
- Criar projeto
- Criar tarefas
- Registrar colaboradores


## Documentação da API

#### Retorna todos os itens

```http
  GET /user/
  GET /project/
  GET /collaborator/
  GET /task/
```
#### Retorna um item

```http
  GET /user/${id}
  GET /project/${id}
  GET /collaborator/${id}
  GET /task/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatório**. O ID do item que você quer. |

#### Criar usuario
```http
  POST /register
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | O máximo de caracteres permitidos é de 60. |
| `email` | `string` | **Email** deve ser único para cada usuário.
| `password` | `string` | A senha deve ser igual ou maior que 8 caracteres.


##### Exemplo
```json
{
  "username": "example",
  "email": "example123@gmail.com",
  "password": "exemplo1234"
}
```



#### Criar Projeto
```http
  POST /user/${id}/create-project
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name_project`      | `string` | É permitido um máximo de 200 caracteres. |
| `description` | `string` | Detalhe o objetivo do projeto.
| `project_priorty` | `enum` | Os níveis de prioridade aceitos são: `LOW` `MEDIUM` `HIGHT` `URGENT`

##### Exemplo
```json
{
  "name-project": "lading page",
  "description": "pagina para vendas de um ebook",
  "project_priorty": "MEDIUM"
}
```


#### Criar task
```http
  POST /project/${id}/create-task
```
| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `description_task`      | `string` | Detalhe toda a atividade que será passada. |
| `deadline` | `datetime` | A data está no padrão ISO 8601 sendo: `Ano-(AAAA) (MM)-Mês (DD)-Dia`
| `priority` | `enum` | Os níveis de prioridade aceitos são: `LOW` `NORMAL` `HIGH` `CRITICAL`
| `status_task`| `enum` | Tipos de status aceitos: `TODO` `IN_PROGRESS` `REVIEW` `DONE`

##### Exemplo
```json
{
  "description_task": "lading page",
  "deadline": "2024-02-01T23:59:59",
  "priority": "NORMAL",
  "status_task": "TODO"
}
```


#### Criar colaborador
```http
  POST /user/${id}/project/${id2}/register-collaborator
```
| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `function_project`      | `enum` | Opções disponíveis: `DEVELOPER` `DESIGNER` `PROJECT_MANAGER` `QA_TESTER` |
| `task_id` | `number` | ID da task que o colaborador está responsável

##### Exemplo
```json
{
  "function_project": "DEVELOPER",
  "task_id": "1"
}
```


#### Atualizar usuario
```http
  PUT /user/${id}/update
```
| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | O email não pode estar sendo usado por outro usuário. |
| `password` | `string` | A senha deve ser igual ou maior que 8 caracteres.

#### Atualizar projeto
```http
  PUT /project/${id}/update
```
| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name_project`      | `string` | O email não pode estar sendo usado por outro usuário. |
| `description_project` | `string` | A senha deve ser igual ou maior que 8 caracteres.
|`project_priorty`| `enum` | Os níveis de prioridade aceitos são: `LOW` `MEDIUM` `HIGHT` `URGENT`

#### Atualizar task
```http
  PUT /task/${id}/update
```

| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `description_task`      | `string` | Detalhe toda a atividade que será passada. |
| `priority` | `enum` | Os níveis de prioridade aceitos são: `LOW` `NORMAL` `HIGH` `CRITICAL`
|`status_task`| `enum` | Tipos de status aceitos: `TODO` `IN_PROGRESS` `REVIEW` `DONE`

#### Atualizar colaborador
```http
  PUT /collaborator/${id}/update
```
| Body   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `status_collaborator`      | `enum` | Opções de status disponíveis: `INACTIVE` `ACTIVE` `SUSPENSE`
| `function_project` | `enum` | Os níveis de prioridade aceitos são: `LOW` `NORMAL` `HIGH` `CRITICAL`

#### Deletar itens 
```http
  DELETE /user/${id}/delete
  DELETE /project/${id}/delete
  DELETE /task/${id}/delete
  DELETE /collaborator/${id}/delete
```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `number` | **Obrigatorio** ID do item que será deletado.



## Stack utilizada

**Back-end:** Node, Express


## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/mathfm/gerenciador-de-projetos-api.git
```

Entre no diretório do projeto

```bash
  cd gerenciador-de-projetos-api
```

Instale as dependências

```bash
  npm install
```

Crie um arquivo .env na raiz do projeto e cole esse trecho substituindo as informações necessarias.
```prisma
  DATABASE_URL="mysql://usuario:senha@localhost:3306/taskManagerDB?bd=public"
```

Execute o seguinte comando
```prisma
  npx prisma migrate dev
```

Inicie o servidor

```bash
  npm run dev
```

