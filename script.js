// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    // Elementos da interface
    const characterList = document.getElementById("characterList");
    const characterInput = document.getElementById("characterInput");
    let turnIndex = -1; // Índice do personagem atual no turno

    // Adiciona personagem ao pressionar Enter
    characterInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addCharacter();
        }
    });

    /**
     * Adiciona um novo personagem à lista de turnos
     */
    function addCharacter() {
        const name = characterInput.value.trim();
        if (name === "") return; // Ignora se o nome estiver vazio

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

        // Configura eventos de arrastar
        characterItem.addEventListener("dragstart", (e) => {
            characterItem.classList.add("dragging");
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', '');
        });

        characterItem.addEventListener("dragend", () => {
            characterItem.classList.remove("dragging");
        });

        // Configura botão de remoção
        const deleteBtn = characterItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            characterItem.remove();
            // Reinicia o turno se o personagem ativo for removido
            if (characterItem.classList.contains('active-turn')) {
                turnIndex = -1;
                nextTurn();
            }
        });

        characterList.appendChild(characterItem);
        characterInput.value = "";
        characterInput.focus();
    }

    // Habilita funcionalidade de arrastar e soltar
    characterList.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        const afterElement = getDragAfterElement(characterList, e.clientY);
        
        // Insere o elemento arrastado na nova posição
        if (afterElement) {
            characterList.insertBefore(dragging, afterElement);
        } else {
            characterList.appendChild(dragging);
        }
    });

    /**
     * Encontra o elemento após o qual o item arrastado deve ser posicionado
     * @param {HTMLElement} container - Elemento pai que contém os itens
     * @param {number} y - Posição Y do cursor
     * @returns {HTMLElement} - Elemento de referência para inserção
     */
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

    /**
     * Avança para o próximo turno
     */
    window.nextTurn = function() {
        const items = characterList.querySelectorAll(".character-item");
        if (items.length === 0) return; // Não faz nada se não houver personagens

        // Remove o destaque do turno atual
        items.forEach(item => item.classList.remove("active-turn"));

        // Avança para o próximo personagem (volta ao início se chegar ao fim)
        turnIndex = (turnIndex + 1) % items.length;

        // Destaca o personagem do turno atual
        items[turnIndex].classList.add("active-turn");
        
        // Rola a tela para mostrar o personagem ativo, se necessário
        items[turnIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    };

    /**
     * Rola os dados de acordo com a quantidade selecionada
     */
    function rollDice() {
        const diceCount = parseInt(document.getElementById('diceCount').value) || 1;
        const diceResults = document.getElementById('diceResults');
        
        // Limpa resultados anteriores
        diceResults.innerHTML = '';
        
        // Rola cada dado individualmente
        for (let i = 0; i < diceCount; i++) {
            const die = document.createElement('div');
            die.className = 'die';
            die.innerHTML = '<div class="die-inner"></div>';
            diceResults.appendChild(die);
            
            // Adiciona animação de rolagem
            die.classList.add('rolling');
            
            // Define um resultado aleatório após a animação
            setTimeout(() => {
                const result = Math.floor(Math.random() * 20) + 1; // Gera número entre 1 e 20
                die.innerHTML = `<div class="die-inner">${result}</div>`;
                die.classList.remove('rolling');
                die.classList.add('show-result');
                
                // Aplica classes baseadas no resultado
                if (result === 20) {
                    die.classList.add('critical-success'); // Sucesso crítico
                } else if (result === 1) {
                    die.classList.add('critical-failure'); // Falha crítica
                } else if (result >= 15) {
                    die.classList.add('high-roll'); // Acerto alto (15-19)
                } else if (result <= 5) {
                    die.classList.add('low-roll'); // Acerto baixo (2-5)
                }
            }, 1000 + (i * 200)); // Intervalo entre as rolagens para melhor visualização
        }
    }

    // Expõe funções para o escopo global
    window.addCharacter = addCharacter;
    window.rollDice = rollDice;
});