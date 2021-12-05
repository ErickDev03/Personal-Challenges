let todos = [];

const btnCheckGet = document.getElementById('btn-check');
const elementActive = document.getElementById('active');

const btnTimesGet = document.getElementById('btn-times');
const elemenGet = document.getElementById('elemen');



function getDatas() {
    const form = document.getElementById('form-todos');
    form.onsubmit = (e) =>{
        e.preventDefault();
        const todo = document.getElementById('todo').value;
        const todoText = todo;
        todo.value = '';
        
        todos.push(todoText);
        const todoList = document.getElementById('todo-list');
        const todoli = document.createElement('div');
        todoli.classList.add('todo-li');
        todoList.appendChild(todoli);
        const todoTitle = document.createElement('div');
        todoTitle.classList.add('add-todolist-new');
        todoli.appendChild(todoTitle);
        const todoH3 = document.createElement('h3');
        todoTitle.appendChild(todoH3);

        const btn = document.createElement('div');
        btn.classList.add('btn');
        todoli.appendChild(btn);

        const btncheck = document.createElement('button');
        btncheck.classList.add('btn-check');
        btncheck.addEventListener('click', () => {
            todoTitle.classList.toggle('active');
            // console.log('medio click');
            todoH3.classList.toggle('active');
        })

        btn.appendChild(btncheck);
        const iconos = document.createElement('i');
        iconos.classList.add('fas');
        iconos.classList.add('fa-check');
        btncheck.appendChild(iconos);

        const btntimes = document.createElement('button');
        btn.appendChild(btntimes);

        btntimes.addEventListener('click', () => {
            todoTitle.classList.add('active-delete');
            todoH3.classList.add('active-delete');
            setTimeout(() => {
                todoli.remove();
            }, 3000);
        })
        const iconostwo = document.createElement('i');
        iconostwo.classList.add('fas');
        iconostwo.classList.add('fa-times');
        btntimes.appendChild(iconostwo);

        todos.map( (todosTitles) =>{
            todoH3.innerText = todosTitles;
        });
        form.reset();
    }
}
getDatas();


btnCheckGet.addEventListener('click', () =>{
    elementActive.classList.toggle('active');
})

function deleteElement() {
    const title = document.getElementById('todo-title');
    elementActive.classList.add('active-delete');
    title.classList.add('active-delete');
    // todoH3.classList.add('active-delete');
    setTimeout(() => {
        elemenGet.remove();
    }, 3000);
}

btnTimesGet.addEventListener('click', () => {
    deleteElement();
});
