const form = document.querySelector("form");
const inputName = document.getElementById('inputName');
const textareaFeedback = document.getElementById('TextFeedback');

form.addEventListener("submit", (event) => {
  
  if (!inputName.value.trim() || !textareaFeedback.value.trim()) {
    event.preventDefault(); 
    
    inputName.value = ""
    textareaFeedback.value = ""
    
    alert("Erro: Por favor, preencha todos os campos do formulário!");
  }
});