window.onload = function(){
    

    let form = document.querySelector('.register-form');
   

    form.addEventListener('submit', async (e) => {
        
        

        let errors = []

        const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

      
        let nombre = document.querySelector('.iNombre')
        let apellido = document.querySelector('.iApellido')
        let genero = document.querySelector('.generoC')
        let birth_date = document.querySelector('.iFecha')
        let tel = document.querySelector('.iTel')
        let provincias = document.querySelector('.sProvincia')
        let domicilio = document.querySelector('.iDirección')
        let email = document.querySelector('.iEmail')
        let pass = document.querySelector('.iPass')
        let pass_confirm = document.querySelector('.iCPass')
        let terycon = document.querySelector('.Icheckbox')
        
        
        
        /// VALIDACION NOMBRE
        if (nombre.value == '' || nombre.value.length < 2) {
            errors.push('El campo nombre debe tener más de 2 caracteres!')
            nombre.classList.add('is-invalid')
        }
        else{
            nombre.classList.add('is-valid')
            nombre.classList.remove('is-invalid')
        }
        /// VALIDACION APELLIDO
        if (apellido.value == '' || apellido.value.length < 2) {
            errors.push('El campo apellido debe tener más de 2 caracteres!')
            apellido.classList.add('is-invalid')
        }
        else{
            apellido.classList.add('is-valid')
            apellido.classList.remove('is-invalid')
        }
        /// VALIDACION EMAIL
        if (email.value == '' || expReg.test(email.value) == false ) {
            errors.push('Debes ingresar un e-mail válido!')
            email.classList.add('is-invalid')
        }
        else{
            email.classList.add('is-valid')
            email.classList.remove('is-invalid')
        }
        /// VALIDACION TELEFONO
        if (tel.value == '' ) {
            errors.push('Debes ingresar tu teléfono!')
            tel.classList.add('is-invalid')
        }
        else{
            tel.classList.add('is-valid')
            tel.classList.remove('is-invalid')
        }
        /// VALIDACION FECHA NACIMIENTO
        if (birth_date.value == '') {
            errors.push('Debes ingresar tu cumpleaños!')
            birth_date.classList.add('is-invalid')
        }
        else{
            birth_date.classList.add('is-valid')
            birth_date.classList.remove('is-invalid')
        }
        /// VALIDACION domicilio
        if (domicilio.value == '') {
            errors.push('Debes ingresar tu domicilio!')
            domicilio.classList.add('is-invalid')
        }
        else{
            domicilio.classList.add('is-valid')
            domicilio.classList.remove('is-invalid')
        }
        /// VALIDACION CONTRASEÑA
        if (pass.value.length <= 8) {
            errors.push('Debes ingresar una contraseña de al menos 9 caracteres!')
            pass.classList.add('is-invalid')
        }
        else{
            pass.classList.add('is-valid')
            pass.classList.remove('is-invalid')
        }
        if (pass_confirm.value !== pass.value ) {
            errors.push('Las contraseñas ingresadas no coinciden!')
            pass_confirm.classList.add('is-invalid')
        }
        else{
            pass_confirm.classList.add('is-valid')
            pass_confirm.classList.remove('is-invalid')
        }
        if (provincias.value == "") {
            errors.push('Debes elegir tu provincia')
            provincias.classList.add('is-invalid')
        }
        else{
            provincias.classList.add('is-valid')
            provincias.classList.remove('is-invalid')
        }
        if (genero.value == "") {
            errors.push('Campo obligatorio')
            provincias.classList.add('is-invalid')
        }
        else{
            genero.classList.add('is-valid')
            genero.classList.remove('is-invalid')
        }
        
        let ulErrors = document.querySelector('.errores');
        ulErrors.classList.add('alert-warning')
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
            e.preventDefault()

        }
    })
}