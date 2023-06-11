// targeting the element

const text = document.querySelector('#text');
const camelCase =  document.querySelector('#camel-case');
const pascalCase =  document.querySelector('#pascal-case');
const snakeCase =  document.querySelector('#snake-case');
const kebabCase =  document.querySelector('#kebab-case');
const screamingKebabCase =  document.querySelector('#screaming-kebab-case');

const convert = document.querySelector('.convert-btn');

let first = text.innerText.charAt(0);
let rest = text.slice(1);
console.log(first + rest);
convert.addEventListener('click', ()=>{
    
})