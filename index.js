let removals = document.querySelectorAll("#removeButton");

let form = document.querySelector("form");

let collection = document.querySelector(".collection");

let div = document.createElement("div");

let hOne = document.querySelector("h1")

formUpdate = document.querySelector(".formUpdate")

let inStock = document.querySelectorAll("#in-stock")





div.classList.add("shirt");
// let shirtImage = document.createElement("img");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let div = document.createElement("div");
  div.classList.add("shirt");
  let hr = document.createElement("HR") 
  let shirtImage = document.createElement("img");
  let paragraph = document.createElement("p");
  let paragraph1 = document.createElement("p");
  let paragraph2 = document.createElement("p");
  let paragraph3 = document.createElement("p");
  let br = document.createElement("br");
  let instockButton = document.createElement("button")
  let paragraph5 = document.createElement("p");
  let button = document.createElement("button");
  button.setAttribute("id","removeButton")
  
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.remove();
    e.target.reset();

   
  });

    let clicks = 0
    instockButton.addEventListener("click", (e)=>{
         e.preventDefault();
        clicks++
         if(clicks % 2 ===1){
            instockButton.textContent = "In Stock ✖︎";
            instockButton.style.background = "red";
            instockButton.style.textcolor = "white"
         }
         else{
            instockButton.textContent = "In Stock ✔︎";
            instockButton.style.background = "green";
            instockButton.style.textcolor = "white";
         }
    })


  
  shirtImage.src = e.target["image"].value;
  div.append(shirtImage);

  div.append(hr);

  paragraph1.innerText = `Name: ${e.target["name"].value}`;
  div.append(paragraph1);
  paragraph2.innerText = `Price: $${e.target["price"].value}`;
  div.append(paragraph2);
  paragraph3.innerText = `Size: ${e.target["size"].value}`;
  div.append(paragraph3);
  paragraph5.innerText = `Condition: ${e.target["condition"].value}`;
  div.append(paragraph5);
  div.append(br)
  
  instockButton.setAttribute("id", "in-stock")
  instockButton.textContent = e.target["in-stock"].textContent 
  instockButton.style.backgroundColor = e.target["in-stock"].style.backgroundColor
  instockButton.style.textcolor = e.target["in-stock"].style.textcolor
  
  div.append(instockButton)
  div.append(br)
 
  button.innerText = "Remove";
  div.append(button);
  div.append(hr)
  collection.append(div);

collection.style.background = "white"
collection.style.border = "3px solid black"

  e.target.reset();
});


for (let removalButton of removals) {
  removalButton.addEventListener("click", (e) => {
    console.log(e.target);
    e.preventDefault();
    e.target.parentElement.remove();
    
    if(collection.childElementCount <= 0){

        collection.style.background = "none"
        collection.style.border = "none"
        formUpdate.style.padding="350px"
  }
    });

  let resetButton = document.querySelector("#resetButton")
  resetButton.addEventListener("click", (e)=>{
        formUpdate.reset()  
  })
}


for(let stock of inStock){
    let clicks = 0
    stock.addEventListener("click", (e)=>{
         e.preventDefault();
        clicks++
         if(clicks % 2 ===1){
            stock.textContent = "In Stock ✖︎";
            stock.style.background = "red";
            stock.style.textcolor = "white"
         }
         else{
            stock.textContent = "In Stock ✔︎";
            stock.style.background = "green";
            stock.style.textcolor = "white"

         }

      
    })
}