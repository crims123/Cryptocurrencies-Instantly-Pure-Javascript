const form = document.querySelector('#formulario');
const currency = document.querySelector('#moneda');
const cripto = document.querySelector('#criptomoneda');

form.addEventListener('submit', handleForm);

function handleForm (e) {
    e.preventDefault();
    if (currency.value ==='' || cripto.value ==='') {
        console.log('Estan vacias')
    }
    else {
        console.log('datos correctos')
    }
}