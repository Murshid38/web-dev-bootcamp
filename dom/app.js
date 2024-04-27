// const heading = document.querySelector("h1");

// for (let heading of heading) {
// heading.style.color = "blue";
// here only inline style will be replaced
// so it's not recommended. because of the specificity
// so the recommended way is to create CSS classes using JS
// no font-size here. these are js properties so, fontSize
// we can't just read the values of the style properties from document object. mostly it will be empty
// so we need the window.getComputedStyle(element).cssproperty
// }

// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// const letters = document.querySelectorAll("span");
// const letter = document.querySelector("span");

// alert(letter.getAttribute('style'));

//let i = 0;
//
//for (let letter of letters) {
//    letter.style.color = colors[i];
//    i++;
//}

// letter.setAttribute('class', 'biggerFont');

// we can add classes one by one using spaces or we can use classList object to manipulate classes of an object 
// letter.classList.add('biggerFont');
// letter.classList.add('wavyFont');
// letter.classList.remove('wavyFont');
// letter.classList.contains('wavyFont');
// letter.classList.toggle('wavyFont');

//const hellos = document.querySelectorAll('li');
//
//for (let hello of hellos) {
//    hello.classList.toggle('highlight')
//}

// parentElement - property gives the parent element
// ul.children[0] - will give the first child element

// node is different from an element
// nodes can contain text - even newlines resulted from return
// that's why in most cases we use nextElementSibling & previousElementSibling rather than nextSibling & prevSibling

// we can create Elements using document.createElement('elementtag')
// if we are creating an element using document.createElement, we have to add the location of using append or appendChild or prepend for it to become visible
// and append it to tell where it should go in html document
// e.g. document.body.appendChild(newImg);
// there is also append method. which is newer way. we can add text in to an element easily to the end
// and using prepend method we can add some element or value to an element beginning

// we can insert adjacent elements(like siblings) using insertAdjacentElement()

const div = document.querySelector('#container');
// const body = document.querySelector('body');
const h1 = document.querySelector('h1');

for (let i = 0; i < 100; i++) {
    const button = document.createElement('button');
    button.innerText = 'Heyy!';
    div.appendChild(button);
}

h1.remove();