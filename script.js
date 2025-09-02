document.addEventListener('DOMContentLoaded', () => {
    const characterList = document.getElementById("characterList");
    const characterInput = document.getElementById("characterInput");
    let turnIndex = -1;

    // Add character with Enter key
    characterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addCharacter();
        }
    });

    // Add character function
    function addCharacter() {
        const name = characterInput.value.trim();
        if (name === "") return;

        const characterItem = document.createElement("div");
        characterItem.className = "character-item";
        characterItem.draggable = true;
        
        characterItem.innerHTML = `
            <span class="character-name">${name}</span>
            <div class="character-actions">
                <button class="delete-btn" title="Remover personagem">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;

        // Add drag events
        characterItem.addEventListener("dragstart", (e) => {
            characterItem.classList.add("dragging");
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', '');
        });

        characterItem.addEventListener("dragend", () => {
            characterItem.classList.remove("dragging");
        });

        // Add delete functionality
        const deleteBtn = characterItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            characterItem.remove();
            // Reset turn if we removed the active character
            if (characterItem.classList.contains('active-turn')) {
                turnIndex = -1;
                nextTurn();
            }
        });

        characterList.appendChild(characterItem);
        characterInput.value = "";
        characterInput.focus();
    }

    // Make list sortable with drag and drop
    characterList.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        const afterElement = getDragAfterElement(characterList, e.clientY);
        
        if (afterElement) {
            characterList.insertBefore(dragging, afterElement);
        } else {
            characterList.appendChild(dragging);
        }
    });

    // Helper function for drag and drop
    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.character-item:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    // Next turn function
    window.nextTurn = function() {
        const items = characterList.querySelectorAll(".character-item");
        if (items.length === 0) return;

        // Reset active state
        items.forEach(item => item.classList.remove("active-turn"));

        // Move to next turn
        turnIndex = (turnIndex + 1) % items.length;

        // Highlight current turn
        items[turnIndex].classList.add("active-turn");
        
        // Scroll to show the active character if needed
        items[turnIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    // Expose addCharacter to global scope for the button
    window.addCharacter = addCharacter;
});