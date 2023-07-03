let removals = document.querySelectorAll("#removeButton");

let form = document.querySelector("form");

let collection = document.querySelector(".collection");

let div = document.createElement("div");

let hOne = document.querySelector("h1");

formUpdate = document.querySelector(".formUpdate");

let inStock = document.querySelectorAll("#in-stock");

let errorMessage = document.querySelector(".errorMessage");

let inStockclick = true;

div.classList.add("shirt");




form.addEventListener("submit", (e) => {
  console.log(e.target);
  e.preventDefault();

  let div = document.createElement("div");
  div.classList.add("shirt");
  let hr = document.createElement("HR");
  let shirtImage = document.createElement("img");
  let paragraph = document.createElement("p");
  shirtImage.src = e.target["image"].value;
  let paragraph1 = document.createElement("p");
  let paragraph2 = document.createElement("p");
  let paragraph3 = document.createElement("p");
  let br = document.createElement("br");
  let instockButton = document.createElement("button");
  let paragraph5 = document.createElement("p");

  let button = document.createElement("button");
  button.setAttribute("id", "removeButton");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.remove();
    e.reset();
  });

  let clicks = 0;
  
  instockButton.addEventListener("click", (e) => {
    e.preventDefault();

    inStockclick = !inStockclick

    if(inStockclick){
        instockButton.textContent = "In Stock ✔︎";
      instockButton.style.background = "green";
      instockButton.style.textcolor = "white";
    }else{
      instockButton.textContent = "In Stock ✖︎";
        instockButton.style.background = "red";
        instockButton.style.textcolor = "white";
    }
  });

  //Start of Append Process
  if(e.target["image"].value === ""){
    errorMessage.removeAttribute("hidden");
    errorMessage.innerText = "Image Field Required";
    errorMessage.style.border = "3px solid black";
    errorMessage.style.backgroundColor = "white";

    e.target["errorMessage"].reset()

  }else{
    div.append(shirtImage);
    errorMessage.innerText = "";
     errorMessage.style.background = "none";
     errorMessage.style.border = "0px";
  }
  
  div.append(hr);

  paragraph1.innerText = `Name: ${e.target["name"].value}`;
 
  if(e.target["name"].value === ""){
    errorMessage.removeAttribute("hidden");
    errorMessage.innerText = "Name Field Required";
    errorMessage.style.border = "3px solid black";
    errorMessage.style.backgroundColor = "white"; 

    e.target["errorMessage"].reset();
   
  }else{

     div.append(paragraph1);
     errorMessage.innerText = "";
     errorMessage.style.background = "none";
     errorMessage.style.border = "0px";
}

  paragraph2.innerText = `Price: $${e.target["price"].value}`;

  div.append(paragraph2);
  paragraph3.innerText = `Size: ${e.target["size"].value}`;
  div.append(paragraph3);
  paragraph5.innerText = `Condition: ${e.target["condition"].value}`;
  div.append(paragraph5);
  div.append(br);

  instockButton.setAttribute("id", "in-stock");
  instockButton.textContent = e.target["in-stock"].textContent;
  instockButton.style.backgroundColor =
  e.target["in-stock"].style.backgroundColor;
  instockButton.style.textcolor = e.target["in-stock"].style.textcolor;

  div.append(instockButton);
  div.append(br);

  button.innerText = "Remove";
  div.append(button);
  div.append(hr);
  collection.append(div);
  collection.style.background = "white";
  collection.style.border = "3px solid black";

  e.target.reset();
});
// collection remove button
for (let removalButton of removals) {
  removalButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.remove();

    if (collection.childElementCount <= 0) {
      collection.style.background = "none";
      collection.style.border = "none";
      formUpdate.style.padding = "350px";
    }
  });
  let resetButton = document.querySelector("#resetButton");
  resetButton.addEventListener("click", (e) => {
    formUpdate.reset();
    errorMessage.innerText = "";
    errorMessage.style.background = "none";
    errorMessage.style.border = "0px";
  });
}

//collection in stock button
for (let stock of inStock) {
  let clicks = 0;
  stock.addEventListener("click", (e) => {
    e.preventDefault();
      inStockclick = !inStockclick
      if(inStockclick){
        stock.textContent = "In Stock ✔︎";
        stock.style.background = "green";
        stock.style.textcolor = "white";
      }else{
        stock.textContent = "In Stock ✖︎";
          stock.style.background = "red";
        stock.style.textcolor = "white";
      }
  });
}
