import * as _ from 'lodash';

function componente(){
    
    const elemento = document.createElement('div');
    //lodash
    elemento.innerHTML = _.join(['Hola','Webpack Tema 2'], ' ');
    return elemento;
}


document.body.appendChild(componente());