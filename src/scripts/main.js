const btn = document.getElementById('btn');
const conteudo = 'Sucesso!!';
const span = document.getElementById('sucess')

if (btn){
    btn.addEventListener('click', function(e){
        e.preventDefault();
        span.innerHTML = conteudo
    })
}