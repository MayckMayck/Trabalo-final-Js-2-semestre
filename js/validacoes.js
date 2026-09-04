// function mostrarConteudo(tipo) {
//     let conteudoItem = document.querySelectorAll('.conteudo-item').forEach(function (item) {item.classList.remove('ativo');});
//     let conteudo = document.getElementById('conteudo-' + tipo).classList.add('ativo');
// }

// function irPara(botao, secao) {
//     const container = botao.closest('.conteudo-item');
//     const destino = container.querySelector('[data-secao="' + secao + '"]');

//     if (destino) {
//         destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
// }

// function alternarCodigo(botao) {
//     const codigo = botao.nextElementSibling;
//     if (codigo.style.display === 'none') {
//         codigo.style.display = 'block';
//         botao.textContent = 'Esconder código';
//     } else {
//         codigo.style.display = 'none';
//         botao.textContent = 'Ver código';
//     }
// }