$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const inputDescricaoTarefa = $("#nome-tarefa").val();
        const novaTarefa = $(`<li style="list-style: none" class="tarefa">${inputDescricaoTarefa}</li>`)
        $('<img src="Images/checkfalse.png"/>').prependTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass("riscado");
        // Selecionar a imagem dentro do elemento 'li' atual
        const imagem = $(this).find('img');
        // Obter o atributo 'src' atual
        const srcAtual = imagem.attr('src');
        // Verificar se a imagem atual é a checkfalse.png
        if (srcAtual === 'Images/checkfalse.png') {
            // Alterar para checktrue.png
            imagem.attr('src', 'Images/checktrue.png');
        } else {
            // Alterar para checkfalse.png
            imagem.attr('src', 'Images/checkfalse.png');
        }
    });
})