function inserir() {
    
    let itemUsuario = document.getElementById('entradaUsuario').value;
    let textNode = document.createTextNode(itemUsuario);

    let elementoFilhoLi = document.createElement('p');
    elementoFilhoLi.appendChild(textNode);

    let elementoPaiUl = document.getElementById('lista');

    elementoPaiUl.appendChild(elementoFilhoLi);

}


