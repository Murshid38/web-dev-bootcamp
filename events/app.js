// alert("Hello");
const v2Button = document.querySelector('#v2');

// this is the second approach using properties of the html element object
// downside of this mehthod is we can't assign two functions(if we want to run both of them) in the object property.
// v2Button.onclick = () => {
//     alert("Hello");
// }
// here the assigning the function definition is what we do(not calling here). 

// this is the last and best method
// find list of different events in mdn
// we can assign two or more functions to run here
// and we can pass more parameters here when we add the function to event listener

function scream() {
    alert("Aaaaaaahhhhh");
}

function welcome() {
    alert("Heyy it's youuu, welcome");
}

v2Button.addEventListener('click', scream);
v2Button.addEventListener('click', welcome);