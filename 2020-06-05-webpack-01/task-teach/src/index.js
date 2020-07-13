import {kkb} from "./fn";
import img from './images/logo.png';
import css from './css/index.css';

document.querySelector(".btn").addEventListener("click", (e) => {
    const name = "陈浩杰";
    console.log(`开课吧-${name}`);
}
)

kkb();
const ele = new Image();
ele.src = img;
document.body.appendChild(ele)
console.log(css)
console.log(img)
