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
        id: "",
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


function renderCard(card) {

    const article = document.createElement("article")
    article.classList.add("card")

    const divTitle = document.createElement("div")
    divTitle.classList.add("div-title")

    const title = document.createElement("h3")
    title.textContent = card.title

    const category = document.createElement("span")
    category.textContent = card.category

    const answer = document.createElement("p")
    answer.textContent = `Resposta: ${card.answer}`
    answer.classList.add("answer")
    answer.style.display = "none" 

    const divIcon = document.createElement("div")
    divIcon.classList.add("div-icon-card")

    const deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    deleteBtn.classList.add("icon-card")
    deleteBtn.addEventListener("click", () => deleteCard(card.id))

    const editBtn = document.createElement("button")
    editBtn.innerHTML = `<i class="fa-solid fa-pen"></i>`
    editBtn.classList.add("icon-card")
    editBtn.addEventListener("click", () => editCard(card.id))


    const showBtn = document.createElement("button")
    showBtn.classList.add("button-card")
    showBtn.textContent = "Mostrar"


    showBtn.addEventListener("click", () => {
        if (answer.style.display === "none") {
            answer.style.display = "block"
            showBtn.textContent = "Ocultar"
        } else {
            answer.style.display = "none"
            showBtn.textContent = "Mostrar"
        }
    })


    divIcon.append(deleteBtn, editBtn)
    divTitle.append(title, divIcon)

    article.append(divTitle, category, answer, showBtn)

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