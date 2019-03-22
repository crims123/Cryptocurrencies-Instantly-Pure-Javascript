const userInterface = new Ui();
const form = document.querySelector('#formulario');
const currency = document.querySelector('#moneda');
const cripto = document.querySelector('#criptomoneda');

form.addEventListener('submit', handleForm);

function handleForm (e) {
    e.preventDefault();
    if (currency.value ==='' || cripto.value ==='') {
        userInterface.showMessage('Complete All the Fields', 'alert bg-danger text-center')
    }
    else {
        console.log('datos correctos')
    }
}