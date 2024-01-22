import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";


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
     liImg.setAttribute("alt", `${basic.description}`);}
     itemA.setAttribute("href", `${basic.original}`);
     itemA.setAttribute("title", `${basic.description}`);
    

     itemLi.append(itemA);
     itemA.append(liImg);
     fragment.append(itemLi);
    }
};    
liImages();
container.append(fragment)


//Listener

container.addEventListener("click", (event) => {
  event.preventDefault();
  let presentation = new SimpleLightbox('.gallery a', { /* options */ });})





