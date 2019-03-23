const userInterface = new Ui();
const api = new apiRequest('fe1abedc9012216acd7eede0bb1163112f258da35b2fb9a99a52d63783401a53');
const form = document.querySelector('#formulario');
const currency = document.querySelector('#moneda');
const cripto = document.querySelector('#criptomoneda');

form.addEventListener('submit', handleForm);
document.addEventListener

function handleForm (e) {
    e.preventDefault();
    if (currency.value ==='' || cripto.value ==='') {
        userInterface.showMessage('Complete All the Fields', 'alert bg-danger text-center')
    }
    else {
        console.log('datos correctos')
    }
}