class Ui {
    showMessage (message, className){
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message))
        const selectMessage = document.querySelector('.mensajes');
        selectMessage.appendChild(div);
        setTimeout(()=> {
            selectMessage.innerHTML = '';
        }, 1300)
        clearTimeout();
    }
}