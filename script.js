// Seleciona o formulário, campo de entrada, lista de tarefas e botão de limpar
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');
const clearBtn = document.getElementById('clear-btn');

// Cria um botão de exclusão para uma tarefa
function createDeleteButton(li) {
const button = document.createElement('button');
button.classList.add('delete');
button.textContent = 'Apagar';
li.appendChild(button);
}

// Remove uma tarefa da lista
function removeTask(li) {
li.remove();
}

// Limpa a lista de tarefas
function clearList() {
ul.innerHTML = '';
}

// Adiciona eventos de clique para a lista de tarefas
ul.addEventListener('click', (event) => {
if (event.target.tagName === 'INPUT') {
const li = event.target.parentNode;
li.classList.toggle('done');
} else if (event.target.classList.contains('delete')) {
const li = event.target.parentNode;
removeTask(li);
}
});

// Adiciona evento de envio para o formulário
form.addEventListener('submit', (event) => {
event.preventDefault();
const text = input.value.trim();
if (text !== '') {
const li = document.createElement('li');
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
const span = document.createElement('span');
span.textContent = text;
createDeleteButton(li);
li.appendChild(checkbox);
li.appendChild(span);
ul.appendChild(li);
input.value = '';
}
});

// Adiciona evento de clique para o botão de limpar
clearBtn.addEventListener('click', () => {
clearList();
});