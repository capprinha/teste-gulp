const meuBtn = document.getElementById('btn');
const span = document.getElementById('sucess');
const usuario = document.getElementById('nomeUsuario');
const email = document.getElementById('email');
const checkbox = document.getElementById('checkbox')


if(meuBtn){
    meuBtn.addEventListener("click",function(e){
        e.preventDefault();
        
        if (usuario.value === '' && email.value === '' && checkbox.checked) {
            span.innerHTML = 'Ambos os campos não estão preenchidos'
        }
        else if(usuario.value === '' ){
            span.innerHTML = 'Usuario não preenchido'
        }
        else if(email.value === ''){
            span.innerHTML = 'E-mail não preenchido'
        }
        else{
            span.innerHTML = 'Sucesso!!'
        }
        if(checkbox){
            if(checkbox.checked){
                console.log('esta marcado')
            }
            else{
                span.innerHTML = 'Aceite os ternos e condições'
            }
        
        }
    });
};