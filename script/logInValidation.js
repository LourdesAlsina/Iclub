window.onload = function(){

    let form = document.querySelector('#login-form');
    
    form.addEventListener('submit', async (e) => {
        let errors = []
        
        const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        let email = document.querySelector('#email')
        let contraseña = document.querySelector('#contraseña')

        if (expReg.test(email.value) == false) {
            errors.push('Debes ingresar un e-mail válido!')
            email.classList.add('is-invalid')
        }
        else{
            email.classList.add('is-valid')
            email.classList.remove('is-invalid')
        }
        if (contraseña.value.length <= 8) {
            errors.push('Debes ingresar una contraseña de al menos 9 caracteres!')
            contraseña.classList.add('is-invalid')
        }
        else{
            contraseña.classList.add('is-valid')
            contraseña.classList.remove('is-invalid')
        }
        let ulErrors = document.querySelector('#mistake');
        ulErrors.classList.add('is-invalid')
        ulErrors.innerHTML = '';
        if (errors.length > 0) {
            e.preventDefault()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Revise los errores!',
            })
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += `<li > ${errors[i]} </li>`
            }
        }
        else {
            ulErrors.innerHTML += `<li> Ingresaste los datos correctamente </li>`
            ulErrors.classList.add('is-valid')
            /*const body = {
                email: e.target.email.value,
                contraseña: e.target.contraseña.value,
                
            }*/
        }
    })
}