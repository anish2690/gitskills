import { kkb } from './lib';
import txt from "./data/kkb.txt";
import img from "./images/logo.png";
import css from "./css/index.css";

console.log("css", css.toString())
console.log("img", img)

// let style = document.createElement("style");
// style.innerHTML = css.toString();
// document.head.appendChild(style);

let imgElement = new Image();
imgElement.src = img;
document.body.appendChild(imgElement)

console.log("txt", txt)

let rs = kkb();
console.log('rs', rs);