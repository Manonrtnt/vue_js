let list = document.querySelector("ul");
let button = document.getElementById("buttonAdd");
let cpt = 1;

button.addEventListener("click", function(e){
    e.preventDefault();
    let input = document.querySelector("input");
    let content = document.createElement("li");

    content.textContent = "Tâche "+cpt+" : "+input.value;
    content.style.listStyle = "none";
    list.appendChild(content);

    input.value = "";
    cpt ++;
});
