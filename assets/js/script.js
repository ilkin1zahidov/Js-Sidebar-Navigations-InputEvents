let icon = document.getElementById("open");


let sidebar = document.getElementById("sidebar");

icon.onclick=function(){
    sidebar.classList.add("active");

}

document.getElementById("close").onclick=function(){
    sidebar.classList.remove("active")
}



let input = document.querySelector(".text-input");



input.addEventListener("keyup", function (e) {

    if (e.keyCode == 13) {
     
        for (let i = 1; i <= e.target.value; i++) {
            let li = document.createElement("li");
            li.className = "list-group-item";
            li.innerText= i;

            e.target.nextElementSibling.append(li);
        }
   
   
    }
   
 

})
