const enviar = document.querySelector('.enviar')
const textInput = document.querySelector('.campo')
const validacao = document.getElementById('validacao')

enviar.addEventListener('click', () => {
    if(textInput.value === ''){
        validacao.classList.remove('valido')
        textInput.classList.add('invalido')
    }else {
        validacao.classList.add('valido')
        textInput.classList.remove('invalido')
    }
})
