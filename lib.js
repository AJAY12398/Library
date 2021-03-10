console.log("this is gona to make libarary");
function Book(name , author , type) {

    this.name = name;
    this.author = author;
    this.type = type;
}
// constructor disp
function Display() {
}
//prototype
Display.prototype.add = function(book){
    console.log('adding all the items');
    let tableBody  = document.getElementById("tableBody")
    let tableitems =  `
                <tr>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>`;
        tableBody.innerHTML +=  tableitems;
}


Display.prototype.clear = function(book){
    let submitform = document.getElementById("libraryForm");
    submitform.reset();
}
Display.prototype.validate = function(book){
        if(book.name.length<2 || book.author.length<2){
            alert('enter minimum 2 character')
                return false;
        }else 
        {
            return true;
        }
}
Display.prototype.show = function(){
    alert('Sucess Fully added')
}




let submitform = document.getElementById("libraryForm")
submitform.addEventListener('submit' , formsubmit)

function formsubmit(e) {
    //if book is submited  then make a new object so
    let name =   document.getElementById("bookName").value ; 
    let author =  document.getElementById("author").value; 
    let type;

    let fiction =   document.getElementById("fiction");
    let programming =  document.getElementById("programming");
    let cooking =   document.getElementById("cooking");
    if(fiction.checked){
        type= fiction.value;
    }
    else if(cooking.checked){
        type= cooking.value;
    }
    else if(programming.checked){
        type= programming.value;
    }
    
    let book = new  Book(name , author , type);
    console.log('sucess full submit');
    console.log(book);

    let display = new Display();
        if(display.validate(book)){
            display.add(book)
            display.clear();
            display.show();
        }
        
    e.preventDefault();
}