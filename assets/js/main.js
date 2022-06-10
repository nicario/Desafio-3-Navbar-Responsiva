const imagem = document.querySelector('.img__cabecalho');
const div = document.querySelector('#div__cabecalho');


imagem.addEventListener("click", function(){
  if(div.classList.contains('div__cabecalho')
) {
  div.classList.toggle('aparecer');
  }
})

