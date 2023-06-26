
let inventory =  document.querySelectorAll(".shirt")

let removals = document.querySelectorAll("button")

for(let shirts of inventory){
for(let removalButton of removals){
    removalButton.addEventListener("click", (e)=>{
        e.preventDefault();
      if(shirts.contains(removalButton)){
        shirts.remove()
      }
    })
}
}

