class Ui {
    constructor () {
        this.init();
    }
    init () {
        this.createCoinsSelect();
    }
    createCoinsSelect () {
        const api = new apiRequest('fe1abedc9012216acd7eede0bb1163112f258da35b2fb9a99a52d63783401a53');
        api.showAllCoins().then((response) => {
            console.log(response)
        })
    }
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