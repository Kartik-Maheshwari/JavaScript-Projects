// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector(".submit-btn"); 20
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//form submission
form.addEventListener("submit", addItem);

//clear all items
clearBtn.addEventListener("click", clearItems);



// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault();
    const val = grocery.value;
    const id = new Date().getTime().toString(); //to get unique id;
    if (val && !editFlag) {   //if my value is not empty and I am not editing--> so we need to create another article to be added to the list
        //add Id
        const element = document.createElement('article');
        //add class
        element.classList.add("grocery-item");
        const attr = document.createAttribute('data-id');
        attr.val = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${val}</p>
        <div class="btn-container">
          <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
          </button>
          <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
          </button>
        </div>`

        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener("click",deleteItem);
        editBtn.addEventListener("click",editItem);

        // append child
        list.appendChild(element);
        //display message
        disAlert("Item added to the list", "success");
        //showing container
        container.classList.add("show-container");
        //add to local storage
        addToLocalStorage(id, val);
        //set back to deafult
        setBackToDefault();
    }
    else if (val && editFlag) {   //if my value is not empty and I am  editing
        editElement.innerHTML = val;
        disAlert("value changed","success");
        editLocalStorage(editID,val);
        setBackToDefault();
    }
    else {
        disAlert("Empty Value", "danger");
    }
}

function disAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 1200)
}

function clearItems() {
    var a = confirm("Do You want to Clear all Items?:");
    if (a) {
        const items = document.querySelectorAll(".grocery-item");

        if (items.length > 0) {
            items.forEach((item) => {
                list.removeChild(item);
            })
        }
        container.classList.remove("show-container");
        disAlert("All items removed successfully", "success");
        setBackToDefault();
    }
}

function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;    //to select grocery item
    const id= element.dataset.id;
    list.removeChild(element);
    if(list.children.length == 0){
        container.classList.remove("show-container");
    }
    disAlert("Item Removed","danger");
    removeFromLocalStorage(id);
    setBackToDefault();
}

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;    //to select grocery item
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value = editElement.innerHTML;
    editFlag=true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}

function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = "submit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
    // const grocery = {id:id,value:value}
    const grocery = {id,value}; //shortcut with ES6

    let items = getLocalStorage();
    console.log(items)
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items))
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();

    items = items.filter((item)=>{
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem('list',JSON.stringify(items))
}

function editLocalStorage(id,value){

}

function getLocalStorage(){
    return localStorage.getItem('list') ?JSON.parse(localStorage.getItem('list')) : [];
}

// ****** SETUP ITEMS **********
