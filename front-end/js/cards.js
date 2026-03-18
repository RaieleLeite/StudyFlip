// Elementos DOM
const sectionCards = document.querySelector(".section-cards")
const button = document.getElementById("create-card")
const modal = document.getElementById("modal")
const closeBtn = document.querySelector(".close")
const buttonSave = document.getElementById("button-save")

const titleInput = document.getElementById("title")
const categoryInput = document.getElementById("category")
const answerInput = document.getElementById("answer")

let editingCardId = null
let cardDraft = { 
    title: "", 
    category: "", 
    answer: "",
    id:""

}


const api = axios.create({
    baseURL: "http://localhost:8080/cards"
})

button.addEventListener("click", openModal)
closeBtn.addEventListener("click", closeModal)
buttonSave.addEventListener("click", saveCard)

titleInput.addEventListener("input", e => cardDraft.title = e.target.value)
categoryInput.addEventListener("input", e => cardDraft.category = e.target.value)
answerInput.addEventListener("input", e => cardDraft.answer = e.target.value)

function openModal() {
    modal.style.display = "block"
}

function closeModal() {
    modal.style.display = "none"
    clearInputs()
}

function clearInputs() {
    titleInput.value = ""
    categoryInput.value = ""
    answerInput.value = ""
    editingCardId = null
    cardDraft = { 
        title: "", 
        category: "", 
        answer: "" 
    }
}

async function loadCards() {
    try {
        sectionCards.innerHTML = ""

        const response = await api.get("")
        const cards = response.data

        if (cards.length === 0) {
            sectionCards.innerHTML = "<p>Nenhum card encontrado.</p>"
            return
        }

        cards.forEach(card => renderCard(card))

    } catch (error) {
        console.error("Erro ao carregar cards:", error)
        sectionCards.innerHTML = "<p>Erro ao carregar cards. Tente novamente.</p>"
    }
}

// Renderizar card
function renderCard(card) {
    const article = document.createElement("article")
    article.classList.add("card")

    const title = document.createElement("h3")
    title.textContent = card.title

    const category = document.createElement("span")
    category.textContent = card.category

    const answer = document.createElement("p")
    answer.textContent = card.answer

    const divBtn = document.createElement("div")
    divBtn.classList.add("div-button-card")

    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Deletar"
    deleteBtn.classList.add("button-card")
    deleteBtn.addEventListener("click", () => deleteCard(card.id))

    const editBtn = document.createElement("button")
    editBtn.textContent = "Editar"
    editBtn.classList.add("button-card")
    editBtn.addEventListener("click", () => editCard(card.id))

    divBtn.append(deleteBtn, editBtn)
    article.append(title, category, answer, divBtn)
    sectionCards.appendChild(article)
}

async function editCard(idCard) {
    try {
        editingCardId = idCard
        const response = await api.get(`/${idCard}`)
        const card = response.data

        titleInput.value = card.title
        categoryInput.value = card.category
        answerInput.value = card.answer

        cardDraft.id = idCard
        cardDraft.title = card.title
        cardDraft.category = card.category
        cardDraft.answer = card.answer

        openModal()
    } catch (error) {
        console.error("Erro ao buscar card:", error)
    }
}

async function saveCard() {
    if (!cardDraft.title || !cardDraft.category || !cardDraft.answer) {
        console.log("Todos os campos devem ser preenchidos!")
        return
    }

    try {
        if (editingCardId) {
            await api.put(`/${editingCardId}`, cardDraft)
            editingCardId = null
        } else {
            await api.post("/save", cardDraft)
        }

        closeModal()
        loadCards()
    } catch (error) {
        console.error("Erro ao salvar card:", error)
    }
}

async function deleteCard(id) {
    try {
        await api.delete(`/${id}`)
        loadCards()
    } catch (error) {
        console.error("Erro ao deletar card:", error)
    }
}

loadCards()