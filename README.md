# StudyFlip

Plataforma web para criação e estudo de **flashcards**, desenvolvida para auxiliar estudantes na revisão de conteúdos de forma rápida e interativa.

O sistema permite criar cartões com perguntas e respostas e utilizar um **modo de estudo interativo**, onde o usuário pode tentar responder a pergunta antes de visualizar a resposta e registrar se acertou ou errou.

---

# Funcionalidades

- Criar flashcards
- Visualizar lista de flashcards
- Editar flashcards
- Deletar flashcards
- Modo de estudo interativo

---

# Motivação

O projeto foi desenvolvido para praticar conceitos de **desenvolvimento full stack**, incluindo:

- Arquitetura cliente-servidor
- Criação e consumo de APIs REST
- Persistência de dados
- Integração entre frontend e backend
- Manipulação do DOM para atualização dinâmica da interface

---

O frontend consome a API para criar, listar, atualizar e deletar os flashcards armazenados no banco de dados.

---

# Tecnologias Utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript 
- Axios

## Backend

- Spring Boot

## Banco de Dados

- MySQL

---


# Funcionalidades do Sistema

## Criar Flashcards

Usuários podem criar flashcards contendo:

- Título
- Categoria
- Resposta


---

## Listar Flashcards

Visualização de todos os flashcards cadastrados no sistema.

Cada flashcard pode ser:

- Estudado
- Editado 
- Removido

---

## Modo de Estudo

No modo de estudo:

1. O sistema apresenta a pergunta
2. O usuário tenta responder mentalmente
3. A resposta pode ser revelada

---

# Modelagem do Banco de Dados

Tabela **flashcards**

| Campo | Tipo | Descrição |
|------|------|-----------|
| id | INTEGER | Identificador do flashcard |
| title | TEXT | Pergunta |
| answer | TEXT | Resposta |
| category | TEXT | Categoria |




