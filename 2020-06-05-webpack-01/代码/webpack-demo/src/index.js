import {kkb} from './lib';
import txt from './data/kkb.txt';
import logo from './images/logo.png';
import css from './css/css.css';


let rs = kkb();
console.log('rs', rs);

console.log('txt', txt);
console.log('logo', logo);



let img = new Image();
img.src = logo;
document.body.appendChild(img);



// console.log('css', css.toString());
// let style = document.createElement('style')
// style.innerHTML = css.toString();
// document.head.appendChild(style);