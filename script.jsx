var typed = new Typed(".multiple-text", {
  strings: ["Apaixonado por Saionara, Vendedor Fudido"],
  typeSpeed: 100,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});
// Estudante", "Apaixonado por Tecnologia", "Desenvolvedor Front-End", "Futuro Analista de Sistemas

const inputName = document.getElementById("inputName");
const inputComment = document.getElementById("inputComment");
const form = document.getElementById("formulario");
const postComments = document.getElementById("postComments");

form.addEventListener('submit', (event)=>{
  event.preventDefault()
  let p = document.createElement('p');
  p.innerHTML = `<span>${inputName.value}: </span> &nbsp ${inputComment.value}`;
  postComments.appendChild(p);
  inputName.value = '';
  inputComment.value='';
})

// toggle icon

let menuIcon = document.querySelector("#menu-icon")
let navBar = document.querySelector('.navbar')


menuIcon.onclick = ()=> {
  menuIcon.classList.toggle('bx-x')
  navBar.classList.toggle('active')
}

