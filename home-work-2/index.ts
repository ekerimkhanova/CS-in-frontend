import { onButtonGrey, onButtonInverse } from './filters';

const buttonGrey = <HTMLButtonElement>document.querySelector('#buttonGrey');
const buttonInverse = <HTMLButtonElement>document.querySelector('#buttonInverse');

buttonGrey.addEventListener('click', onButtonGrey );
buttonInverse.addEventListener('click', onButtonInverse );