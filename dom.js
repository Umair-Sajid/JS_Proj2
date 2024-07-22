console.log(document.URL);
console.log(document.domain);
console.log(document.title);
console.log(document.doctype);
document.title = 'item Lister';
console.log(document.head);
console.log(document.body);
// console.log(document.all);
console.log(document.forms);
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
// headerTitle.style.borderBottom='solid white 3px';
headerTitle.style.borderLeft = 'solid white 3px';
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent = 'Hello';
items[3].style.backgroundColor = 'coral';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }
// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
let odd = document.querySelectorAll('li:nth-Child(odd)');
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = '#f4f4f4';
}
// 
let itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';


let newDiv = document.createElement('div');
newDiv.className = 'Hello';
newDiv.id = "hello1";
newDiv.setAttribute('title', 'div');
let newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);


let header = document.querySelector('header');
let container = header.querySelector('.container');
let h1 = header.querySelector('h1');

console.log(newDiv);

// Insert the newDiv before the h1 inside the container
container.insertBefore(newDiv, h1);

let button = document.getElementById('button').addEventListener('click', buttonClick)

function buttonClick(e) {

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.clientX);

}


// let box = document.getElementById('box')
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mousemove', runEvent);



let itemInput=document.querySelector('input[type="text"]');
let form= document.querySelector('form');
let select=document.querySelector('select')

// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('cut',runEvent);
// select .addEventListener('change',runEvent);  
// select .addEventListener('input',runEvent);
form.addEventListener('submit',runEvent)




function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE:' +e.type);
    // console.log(e.target.value); 

    // output.innerHTML ='<h3>MouseX:'+e.offsetX+'</h3><h3>MouseY:'+e.offsetY+'</h3>'
    // box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}   





























