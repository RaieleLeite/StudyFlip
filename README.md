# StudyFlip

Plataforma web para criação e estudo de **flashcards**, desenvolvida para auxiliar estudantes na revisão de conteúdos de forma rápida e interativa.

O sistema permite criar cartões com perguntas e respostas e utilizar um **modo de estudo interativo**, onde o usuário pode tentar responder a pergunta antes de visualizar a resposta e registrar se acertou ou errou.

---

# Funcionalidades

- Criar flashcards
- Visualizar lista de flashcards
- Deletar flashcards
- Modo de estudo interativo
- Registro de acertos e erros
- Organização por categorias

---

# Motivação

O projeto foi desenvolvido para praticar conceitos de **desenvolvimento full stack**, incluindo:

- Arquitetura cliente-servidor
- Criação de APIs REST
- Persistência de dados
- Integração entre frontend e backend
- Manipulação do DOM

---

O frontend consome a API para criar, listar e atualizar os flashcards armazenados no banco de dados.

---

# Tecnologias Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript / TypeScript
- Fetch API

## Backend

- Flask

## Banco de Dados

- MySQL

---


# Funcionalidades do Sistema

## Criar Flashcards

Usuários podem criar flashcards contendo:

- Pergunta
- Resposta
- Categoria

---

## Listar Flashcards

Visualização de todos os flashcards cadastrados no sistema.

Cada flashcard pode ser:

- Estudado
- Removido

---

## Modo de Estudo

No modo de estudo:

1. O sistema apresenta a pergunta
2. O usuário tenta responder mentalmente
3. A resposta pode ser revelada
4. O usuário marca se acertou ou errou

---

## Estatísticas

Cada flashcard armazena:

- Número de acertos
- Número de erros

Isso permite acompanhar o progresso de aprendizado.

---

# Modelagem do Banco de Dados

Tabela **flashcards**

| Campo | Tipo | Descrição |
|------|------|-----------|
| id | INTEGER | Identificador do flashcard |
| question | TEXT | Pergunta |
| answer | TEXT | Resposta |
| category | TEXT | Categoria |
| correct_count | INTEGER | Número de acertos |
| wrong_count | INTEGER | Número de erros |
| created_at | DATETIME | Data de criação |



