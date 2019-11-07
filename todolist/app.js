const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')



const generate = (todo) => { 
    const html= `
            <li class="list-group-item d-flex justify-content between align-items-center">
                <span>${todo}</span>
                <i class="fa fa-trash-alt delete"></i>
            </li>
    `;
    
    list.innerHTML += html;
};


addForm.addEventListener('submit', (e) => {
   e.preventDefault(); 
   const todo = addForm.adding.value.trim(); 
      generate(todo);
    
});



//delete todos
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


const filterTodos = (term) => {

    //Add filtered class 
    Array.from(list.children)
    .filter((todoItem) => !todoItem.textContent.toLowerCase().includes(term))
    .forEach((todoItem) => todoItem.classList.add('filtered'));


    //remove filtered class
    Array.from(list.children)
    .filter((todoItem) => todoItem.textContent.toLowerCase().includes(term))
    .forEach((todoItem) => todoItem.classList.remove('filtered'));

};

search.addEventListener('keyup', () =>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});

