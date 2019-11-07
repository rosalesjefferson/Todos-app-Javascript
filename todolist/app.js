const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')


// // You can put these codes inside addForm.EventListener but you can put these outside so it become reusable.
const generate = (todo) => { /*createtemplate is a variable*/
    const html= `
            <li class="list-group-item d-flex justify-content between align-items-center">
                <span>${todo}</span>
                <i class="fa fa-trash-alt delete"></i>
            </li>
    `;
    
    list.innerHTML += html;
};


addForm.addEventListener('submit', (e) => {
   e.preventDefault(); //Use this in submitting to prevent refreshing of the page
    //What the trim() does is to remove any space after submitting.
   const todo = addForm.adding.value.trim(); //adding is the name of the input field.


    if(todo.length){ //If todo (or the value that was input in the form is has value, the value will submit to the list, else the value will not submit)
        generate(todo);
        addForm.reset(); // reset () will reset or clear the  input field inside that form after submitting..
    }

   //You can do these codes outside so it become reusable. There's an example above.
    // const html= `
    //         <li class="list-group-item d-flex justify-content between align-items-center">
    //             <span>${todo}</span>
    //             <i class="fa fa-trash-alt delete"></i>
    //         </li>
    // `;
    // list.innerHTML += html;
    
});



//delete todos
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})



// // first way using multiple lines not single lines. The other way is below.
// search.addEventListener('keyup', () =>{
//     const term = search.value.trim().toLowerCase();
//     // filterTodos(term);

//     //Add filtered class
//     // Array.from(list.children)
//     // .filter((todoItem) =>{
//     //     return !todoItem.textContent.toLowerCase().includes(term);
//     // }).forEach((todoItem) => {
//     //     todoItem.classList.add('filtered');
//     // })
//     //Add filtered class in one line
//     Array.from(list.children)
//     .filter((todoItem) => !todoItem.textContent.toLowerCase().includes(term))
//     .forEach((todoItem) => todoItem.classList.add('filtered'));


//     //remove filtered class
//     // Array.from(list.children)
//     // .filter((todoItem) => {
//     //     return todoItem.textContent.toLowerCase().includes(term);
//     // }).forEach((todoItem) => {
//     //     return todoItem.classList.remove('filtered');
//     // });
//     //Remove filtered class in one line
//     Array.from(list.children)
//     .filter((todoItem) => todoItem.textContent.toLowerCase().includes(term))
//     .forEach((todoItem) => todoItem.classList.remove('filtered'));

// });


//Other way using one line
const filterTodos = (term) => {

    //Add filtered class in one line
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

