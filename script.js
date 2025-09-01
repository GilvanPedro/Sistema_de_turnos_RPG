const characterList = document.getElementById("characterList");
let turnIndex = -1;

// Adicionar personagem
function addCharacter() {
    const input = document.getElementById("characterInput");
    const name = input.value.trim();
    if (name === "") return;

    const li = document.createElement("li");
    li.textContent = name;
    li.draggable = true;

    // Eventos de drag
    li.addEventListener("dragstart", () => {
        li.classList.add("dragging");
    });
    li.addEventListener("dragend", () => {
        li.classList.remove("dragging");
    });

    characterList.appendChild(li);
    input.value = "";
}

// Permitir arrastar e soltar na lista
characterList.addEventListener("dragover", (e) => {
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    const siblings = [...characterList.querySelectorAll("li:not(.dragging)")];
    const nextSibling = siblings.find(sibling => {
        return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });
    characterList.insertBefore(dragging, nextSibling);
});

// Próximo turno
function nextTurn() {
    const items = characterList.querySelectorAll("li");
    if (items.length === 0) return;

    // Resetar cores
    items.forEach(item => item.classList.remove("active-turn"));

    // Avançar turno
    turnIndex = (turnIndex + 1) % items.length;

    // Destacar personagem atual
    items[turnIndex].classList.add("active-turn");
}