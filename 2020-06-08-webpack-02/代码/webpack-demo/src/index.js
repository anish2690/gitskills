import {hello} from './libs/kkb';
import fn from './libs/fn';
import './css/css.css';


// console.log(module.hot);

if (module.hot) {//如果开启 HMR

    // accept ： 事件监听，以模块为单位，监听webpack通知过来到模块变化
    module.hot.accept('./libs/kkb', () => {
        console.log('kkb变了');
        document.onclick = hello;
    });

    module.hot.accept('./libs/fn', () => {
        console.log('fn变了');
    });
}

document.onclick = hello;