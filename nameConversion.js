
//  targeting the element to manupilate in the dom
const inputField = document.querySelector('#text');
const convertBtn = document.querySelector('#convert-btn');

const toCamelCase =  document.querySelector('#camel-case'); // p tag
const toPascalCase =  document.querySelector('#pascal-case'); // p tag
const toSnakeCase =  document.querySelector('#snake-case'); // p tag
const toKebabCase =  document.querySelector('#kebab-case'); // p tag
const toScreamingKebabCase =  document.querySelector('#screaming-kebab-case'); // p tag
const toScreamingSnakeCase =  document.querySelector('#screaming-snake-case'); // p tag

// function to convert normal text value into  pascal or snake or kebab

function toPascal(inputText) {
    return inputText.split(' ').map(word => word[0].toUpperCase().concat(word.slice(1))).join('')
}

function toCamel(inputText) {
    let camel = inputText.split(' ').map(word => word[0].toUpperCase().concat(word.slice(1))).join('')
    return (camel[0].toLowerCase().concat(camel.slice(1))) 
}

function toSnake(inputText) {
    let snake = inputText.split(" ").map(word => "_".concat(word)).join("")
    return (snake.replace("_", ""))
}

function toScreamSnake(inputText) {
    let scrSnake = inputText.split(" ").map(word => "_".concat(word)).join("")
    return(scrSnake.replace("_", "").toUpperCase())
}

function toKebab(inputText) {
    let kebab = inputText.split(" ").map(word => "-".concat(word)).join("")
    return(kebab.replace("-", ""))
}

function toScreamKebab(inputText) {
    let scrKebab = inputText.split(" ").map(word => "-".concat(word)).join("")
    return(scrKebab.replace("-", "").toUpperCase())
}



convertBtn.addEventListener("click", () => {
    toCamelCase.textContent = toCamel(inputField.value) // setting value to toCamel() function from inputField.value
    toPascalCase.textContent = toPascal(inputField.value)  // setting value to toPascal() function from inputField.value
    toSnakeCase.textContent = toSnake(inputField.value)   // setting value to toSnake() function from inputField.value
    toScreamingSnakeCase.textContent = toScreamSnake(inputField.value)  // setting value to toScreamSnake() function from inputField.value
    toKebabCase.textContent = toKebab(inputField.value)   // setting value to toKebab() function from inputField.value
    toScreamingKebabCase.textContent = toScreamKebab(inputField.value)  // setting value to toScreamKebab() function from inputField.value
});



// 

// let pascal = inputText.split(' ').map(word => word[0].toUpperCase().concat(word.slice(1))).join('')
//     return (pascal[0].toLowerCase().concat(pascal.slice(1)))

//1. inputText.split(' ') -- it is used to split two words using a space
// 2. .map(word => word[0].toUpperCase() this is used to map(select) all the words and setting their 1st character as a CAPITAL.
// 3. .concat(word.slice(1))).join('')