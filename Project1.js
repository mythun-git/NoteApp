console.log("Welcome to Project");
showNotes()
let addBtn = document.getElementById('addbtn')
addBtn.addEventListener("click",function(e){
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [ ];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addText.value = "";
    console.log(notesObj);
    showNotes()
})
function showNotes(){
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [ ];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    let html = "";
    notesObj.forEach(function(element ,index) {
        html+=`
        <div class="notecard card my-2 mx-2" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id ="${index}"onclick="DeleteNote(this.id)"class="btn btn-primary deletebtn">Delete Note</button>
          </div>
        </div>`
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length != 0){
        notesElm.innerHTML=html
    }
    else{
        notesElm.innerHTML = `Nothing to Show `
    }
}

//Delete a node
function DeleteNote(index){
    console.log("I am getting deleted",index);
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [ ];
    }
    else{
        notesObj = JSON.parse(notes)
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes()
}

let search = document.getElementById('searchtab');
search.addEventListener("input",function(e){
    console.log("Input event Fired");
    let inputVal = search.value.toLowerCase();
    console.log(inputVal)

    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0];
        if(cardTxt.innerText.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";

        }
    })
})