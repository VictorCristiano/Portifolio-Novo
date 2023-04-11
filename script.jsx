var typed = new Typed(".multiple-text", {
  strings: ["Estudante", "Apaixonado por Tecnologia", "Desenvolvedor Front-End", "Futuro Analista de Sistemas"],
  typeSpeed: 100,
  backSpeed: 70,
  backDelay: 1000,
  loop: true
});


const inputName = document.getElementById("inputName");
const inputComment = document.getElementById("inputComment");
const form = document.getElementById("formulario");
const postComments = document.getElementById("postComments");

form.addEventListener('submit', (event)=>{
  event.preventDefault()
  let p = document.createElement('p');
  p.innerHTML = `<strong>${inputName.value}: </strong> &nbsp ${inputComment.value}`;
  postComments.appendChild(p);
  inputName.value = '';
  inputComment.value='';
})