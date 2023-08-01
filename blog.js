/* function inserir() {
    
    let itemUsuario = document.getElementById('entradaUsuario').value;
    let textNode = document.createTextNode(itemUsuario);

    let elementoFilhoLi = document.createElement('p');
    elementoFilhoLi.appendChild(textNode);

    let elementoPaiUl = document.getElementById('lista');

    elementoPaiUl.appendChild(elementoFilhoLi);

}*/


function comentar() {
    const inputName = document.getElementById('inputName');
    const textComment = document.getElementById('textComment');
    const form = document.getElementById('formulario');
    const commentPost = document.getElementById('comentario');

    // form.addEventListener('click', (event) => {
        event.preventDefault(); //**para impedir que a página recarregue

        let p = document.createElement('p');
        p.classList = 'd-flex text-wrap flex-wrap';
        p.innerHTML = `<strong>${inputName.value}: &nbsp </strong> ${textComment.value}`; 
        commentPost.appendChild(p);
        inputName.value = '';
        textComment.value = '';
        inputName.focus();

    };