import { galleryItems } from './gallery-items.js';
import basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/+esm";


//Declaration
const body = document.body
const container =  document.querySelector(".gallery");
const fragment = document.createDocumentFragment();
let max = galleryItems.length;

//Function
function liImages()
{
  for(let i = 0; i < max; i++)
    {let itemLi = document.createElement("li");
     itemLi.classList.add("gallery__item");
     let itemA = document.createElement("a");
     itemA.classList.add("gallery__link");
     let liImg = document.createElement("img");
     liImg.classList.add("gallery__image");

  let basic = galleryItems[i];
  for(let item of galleryItems){
     liImg.setAttribute("src", `${basic.preview}`);
     itemA.setAttribute("href", `${basic.original}`);
     liImg.setAttribute("data-source", `${basic.original}`);
     liImg.setAttribute("alt", `${basic.description}`);}

     itemLi.append(itemA);
     itemA.append(liImg);
     fragment.append(itemLi);
    }
};    
liImages();
container.append(fragment)


//Listener
let instance;
container.addEventListener("click", (event) => {
  event.preventDefault();
  let x = event.target;
  let y = x.getAttribute("data-source");
  let z = x.getAttribute("alt");
  instance = basicLightbox.create(`<img src = ${y} alt = ${z}>`).show();})

document.addEventListener("keydown", (event) => {if(event.key == "Escape"){event.preventDefault();
                                                                             const elem = document.querySelector(".basicLightbox");
                                                                             elem.remove()}})

// am incercat sa folosesc instance.close() dar nu imi recunoaste functie