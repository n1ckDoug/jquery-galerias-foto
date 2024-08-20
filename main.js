$(document).ready(() => {
   $('header button').click(() => {
      $('form').slideDown();
   });

   $('#btn-cancelar').click(() => {
      $('form').slideUp();
   });

   $('form').on('submit', (e) => {
      e.preventDefault();

      const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
      const novoItem = $('<li style="display:none"></li>');

      //.appendTo(alvo) -> Insira todos os elementos do conjunto de elementos correspondentes no final do alvo.
      $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
      $(`
         <div class="overlay-imagem-link">
            <a href="${enderecoDaNovaImagem}" target="_blank">
                  Veja imagem em tamanho real
               </a>
         </div>
         `).appendTo(novoItem);
         $(novoItem).appendTo('ul');

         //Animação se surgir -- fadeIn(tempo em milisegundos)
         $(novoItem).fadeIn(1000); // Apareça em 1s

         $('#endereco-imagem-nova').val('');

   });
});