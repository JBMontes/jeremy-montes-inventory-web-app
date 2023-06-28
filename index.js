let removals = document.querySelectorAll("button");

let form = document.querySelector("form");

let collection = document.querySelector(".collection");

let div = document.createElement("div");

let hOne = document.querySelector("h1")


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
  let paragraph4 = document.createElement("p");
  let paragraph5 = document.createElement("p");
  let button = document.createElement("button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.remove();
    e.target.reset();
  });

  
  shirtImage.src = e.target["image"].value;
  div.append(shirtImage);

  div.append(hr);

  paragraph1.innerText = `Name: ${e.target["name"].value}`;
  div.append(paragraph1);
  paragraph2.innerText = `Price: $${e.target["price"].value}`;
  div.append(paragraph2);
  paragraph3.innerText = `Size: ${e.target["size"].value}`;
  div.append(paragraph3);
  paragraph4.innerText = `In-Stock: ${e.target["in-stock"].value}`;
  div.append(paragraph4);
  paragraph5.innerText = `Condition: ${e.target["condition"].value}`;
  div.append(paragraph5);
  button.innerText = "Remove";
  div.append(button);
  div.append(hr)

  collection.append(div);

  e.target.reset();
});


for (let removalButton of removals) {
  removalButton.addEventListener("click", (e) => {
    console.log(e.target);
    e.preventDefault();
    e.target.parentElement.remove();
    
    if(collection.childElementCount > 0){
        collection.style.background = "white"
        collection.style.border = "3px solid black"
        
    }
    else{
        collection.style.background = "none"
        collection.style.border = "none"
  }
    });

  let resetButton = document.querySelector("#resetButton")
  resetButton.addEventListener("click", (e)=>{
        e.target.reset()  // IS THIS THE KIND OF RESET THEY WANT TO SEE?
  })
}
