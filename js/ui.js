class Ui {
    constructor () {
        this.init();
    }

    init () {
        this.createCoinsSelect();
    }

    createCoinsSelect () {
        const api = new apiRequest('fe1abedc9012216acd7eede0bb1163112f258da35b2fb9a99a52d63783401a53');
        api.showAllCoins().then((coins) => {
            const select = document.querySelector('#criptomoneda');
            coins.forEach((item) => {
                const option = document.createElement('option');
                option.innerHTML = item.CoinName;
                option.value = `${item.Symbol}`;
                select.appendChild(option)
            })
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
    }

    showConversion (currency, crypto) {
        const result = document.querySelector('#resultado');
        result.innerHTML = '';
        const api = new apiRequest('fe1abedc9012216acd7eede0bb1163112f258da35b2fb9a99a52d63783401a53');
        api.showCoinValue(currency, crypto).then((coin) => {
        const { FROMSYMBOL, TOSYMBOL, PRICE, LASTUPDATE, MKTCAP } = coin;
        let update = new Date(LASTUPDATE*1000).toLocaleDateString('es-COL')
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                        <h2 class="card-title">Resultado:</h2>
                        <p>El Precio de ${FROMSYMBOL} a moneda ${TOSYMBOL} es de: $ ${Math.round(PRICE)}</p>
                        <p>MarketCap: $ ${Math.round(MKTCAP)}</p>
                        <p>Última Actualización: ${update}</p>
                </div>
            </div>
            `;
        this.showSpinner(result, templateHTML);
        })
    }

    showSpinner(result, templateHTML) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style = 'display:block'
        setTimeout(() => {
            spinner.style = 'none'
            result.innerHTML = templateHTML;
        },2000)
    }
}