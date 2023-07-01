let taskInp = document.getElementById("task"); 
let btn = document.getElementById("add");
let listEl = document.getElementById("task_list");


btn.addEventListener("click",add);

//add task function
function add(){
   let li = document.createElement("li");
   li.textContent = taskInp.value ;
   li.classList.add("removeBtn");
   listEl.appendChild(li);


   //done icon
   let doneIcon = document.createElement("i");
   doneIcon.classList = "fas fa-check";
   li.appendChild(doneIcon);


//done function
 doneIcon.addEventListener("click",verify);
 let editIcon = document.createElement("i");
 editIcon.classList = "fas fa-pencil-alt";
 li.appendChild(editIcon);


 //edit function
 editIcon.addEventListener("click",edit);
 function edit(){
  li.contentEditable = true;
  doneIcon.add();
 }


 //function verify
 function verify() {
   doneIcon.remove();
   editIcon.remove();
   let del = document.createElement("button");
   del.textContent = "X";
   del.classList.add("del");
   del.addEventListener("click",clear);
   li.appendChild(del);

      function clear(){  
         li.remove();
         }
        }
        li.style.display = "block";
        li.style.marginBottom = "-10px";  
        taskInp.value = "";
}





///in progress function
let toggle = document.getElementById("toggle");
let progress = document.getElementById("in_progress");

//toggle function
toggle.addEventListener("click",tog);
function tog(){
   let isVisible  = progress.style.display === "block";
   if(isVisible){
         progress.style.display = "none";
   }else{
      progress.style.display = "block" ;
   }
}


//done function
let toggle2 = document.getElementById("toggle2");
let done = document.getElementById("done");

toggle2.addEventListener("click",tog2);
function tog2(){
   li.add();
   let isVisible  = done.style.display === "block";
   if(isVisible){
         done.style.display = "none";
   }else{
      done.style.display = "block" ;
   }
}