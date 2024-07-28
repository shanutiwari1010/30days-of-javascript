
const el = document.getElementById("learn");
if (el) { // Check if the element exists
    console.log(el.innerHTML);
} else {
    console.log("Element with ID 'learn' not found.");
}

const ele = document.querySelector(".js").style.backgroundColor="pink";

const create = document.createElement("div");
create.textContent = "hey there , this is shanu !"

document.body.appendChild(create);


const ul = document.querySelector("#list")
const newLi = document.createElement("li")
newLi.textContent= "nodejs "
ul.appendChild(newLi)


// Remove the last child of a specific HTML element.
ul.lastElementChild.remove()


const image = document.querySelector("#image")
image.setAttribute("src","./assets/flower.jpg")