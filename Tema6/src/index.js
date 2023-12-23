import _ from 'lodash';
import './style.css';
import image from './image.png';
import datos from './datos.csv';
import yaml from './datos.yaml';
import json5 from './datos.json5';

if('serviceWorker' in navigator){
    window.addEventListener('load', ()=> {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            console.log("SW Registrado ", registration)
        }).catch(err => {
            console.log("SW No Registrado", err)
        });
    });
}

function componente(){
    
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola',datos[2][3]], ' ');
    elemento.classList.add('hola');
    const img = new Image();
    img.src = image;
    elemento.appendChild(img)

    console.log(datos);
    return elemento;
}

console.log(yaml.title);
console.log(json5.owner.name);



document.body.appendChild(componente());