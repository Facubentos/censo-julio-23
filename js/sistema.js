
class Sistema {
    constructor() {
        this.censistas = [];
        this.censados = [];

        this.departamentos = ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandú", "Río Negro", "Rivera", "Rocha", "Salto", "San José", "Soriano", "Tacuarembó", "Treinta y Tres"];
        this.ocupaciones = ["Dependiente", "Independiente", "Estudiante", "No trabaja"];
    }

    darCensistas() {
        return this.censistas;
    }


    precargarCensistas() {
        const censistaPrecargadoUno = new Censista("José", "joselo123", "JoseE321", this.obtenerIdLibre());
        const censistaPrecargadoDos = new Censista("María", "mari01", "Mar14", this.obtenerIdLibre());
        const censistaPrecargadoTres = new Censista("Pablo", "pablo777", "olbaP7", this.obtenerIdLibre());
        this.censistas.push(censistaPrecargadoUno);
        this.censistas.push(censistaPrecargadoDos);
        this.censistas.push(censistaPrecargadoTres);
        console.log(this.censistas);
    }

    precargarPersonas() {
        const p1 = new Persona("Pedro", "Gonzalez", "34", "43523459", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), true, this.censistas[1].id);

        const p2 = new Persona("Laura", "Ferreira", "21", "53421681", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), true, this.censistas[0].id);

        const p3 = new Persona("Julieta", "Alvarez", "65", "32632221", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), false, this.censistas[2].id);

        const p4 = new Persona("Mariano", "Rodriguez", "12", "32635432", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), false, this.censistas[1].id);

        const p5 = new Persona("Luciano", "Nuñez", "20", "53333321", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), false, this.censistas[0].id);

        const p6 = new Persona("Ana María", "Rosande", "45", "22613351", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), true, this.censistas[2].id);

        const p7 = new Persona("Gonzalo", "Gutierrez", "35", "42313215", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), false, this.censistas[1].id);

        const p8 = new Persona("Martin", "Perez", "55", "23542347", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), true, this.censistas[0].id);

        const p9 = new Persona("Maria José", "Pereira", "29", "38688881", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), false, this.censistas[2].id);

        const p10 = new Persona("Sergio", "Pacheco", "11", "54566548", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), true, this.censistas[1].id);

        const p11 = new Persona("Alvaro", "Forte", "67", "23455433", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), false, this.censistas[0].id);

        const p12 = new Persona("Mariana", "Rodriguez", "38", "47867869", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), true, this.censistas[2].id);

        const p13 = new Persona("Pablo", "Caffaro", "37", "33002001", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), false, this.censistas[1].id);

        const p14 = new Persona("Florencia", "Fernandez", "28", "5123321", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), true, this.censistas[0].id);

        const p15 = new Persona("Abril", "Ramirez", "33", "5111234", this.asignarAutomaticamentePreCarga(this.departamentos), this.asignarAutomaticamentePreCarga(this.ocupaciones), false, this.censistas[2].id);


        this.censados.push(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15);
        console.log(this.censados);
    }

    asignarAutomaticamentePreCarga(arreglo) {
        let iteradorAleatorio = Math.floor(Math.random() * arreglo.length) // numero random entre 0 y 18
        return arreglo[iteradorAleatorio];
    }
    asignarCensistaAleatorio() { //Devuelve la id de un censista existente
        let aleatorio = Math.floor(Math.random() * this.censistas.length)
        return this.censistas[aleatorio].id;
    }

    censistaActual(usuarioActual) {
        for (let iterador = 0; iterador < this.censistas.length; iterador++) {
            let usuario = this.censistas[iterador].usuario;
            if (usuarioActual === usuario) {
                return this.censistas[iterador].id;
            }
        }
    }

    registrarCensista(nombre, usuario, clave, id) {
        if (this.validarCampoVacio(nombre, clave, usuario) && this.validarUsuario(usuario) && this.validarClave(clave)) {
            const nuevoCensista = new Censista(nombre.toLowerCase(), usuario.toLowerCase(), clave, id);
            this.censistas.push(nuevoCensista);
            console.log(this.censistas);
            return true;
        }
        return false;
    }
    agregarCensado(nombre, apellido, edad, cedula, departamento, ocupacion, estado, censista) {
        if (estado === "censista") {
            estado = true;
        }
        if (this.validarCampoVacio(nombre, apellido, edad, cedula, departamento, ocupacion)) {
            console.log(nombre, apellido);
            const nuevaPersonaCensada = new Persona(nombre, apellido, edad, cedula, departamento, ocupacion, estado, censista);
            this.censados.push(nuevaPersonaCensada);
            console.log(this.censados);
            return true;
        }
        return false;
    }

    validarCampoVacio(uno, dos, tres, cuatro, cinco, seis) {
        let validar = false;
        if (uno != "" && dos != "" && tres != "" && cuatro != "" && cinco != "" && seis != "") {
            modificarContenidoParrafo("mensajeUsuario", ``);
            validar = true;
        } else {
            modificarContenidoParrafo("mensajeCenso", `<div class="alert alert-success" role="alert">
            *Debe completar todos los campos*
            </div>`);
            modificarContenidoParrafo("mensajeUsuario", `*Debe completar todos los campos*`);
        }
        return validar;
    }
    // Validaciones para registro de censista.
    validarUsuario(usuario) {
        let validar = false;
        if (this.censistas.length === 0) {
            validar = true;
        } else {
            for (let iterador = 0; iterador < this.censistas.length; iterador++) {
                console.log(this.censistas[iterador]);
                if (usuario.toLowerCase() != this.censistas[iterador].usuario) {
                    modificarContenidoParrafo("errorNombreUsuario", ``)
                    validar = true;
                } else {
                    modificarContenidoParrafo("errorNombreUsuario", `*Nombre de usuario en uso, intente con otro.*`)
                    validar = false;
                    break;
                }
            }
        }
        return validar;
    }
    validarClave(clave) {
        let validar = false;
        if (clave.length >= 5) {
            if ((clave.match(/[A-Z]/)) && (clave.match(/\d/)) && (clave.match(/[a-z]/))) {
                modificarContenidoParrafo("errorClave", "");
                validar = true;
            } else {
                modificarContenidoParrafo("errorClave", `*Su clave debe tener al menos una mayúscula, una minúscula y un número.*`);
            }
        } else {
            modificarContenidoParrafo("errorClave", `*Su clave debe tener un mínimo de 5 caracteres.*`);
        }
        return validar;
    }
    //Valida que el id generado no esté en uso por otro censista, y se lo incorpora a un censista nuevo.
    obtenerIdLibre() {
        let idLibre = Math.floor(Math.random() * 9999);
        let estaLibre = true;

        if (this.censistas.length == 0) {
            return idLibre;
        } else {
            for (let iterador = 0; iterador < this.censistas.length; iterador++) {
                if (idLibre == this.censistas[iterador].id) {
                    estaLibre = false;
                }
            }
        }
        if (estaLibre) {
            return idLibre;
        } else {
            this.obtenerIdLibre();
        }
    }
    //Valida el ingreso del censista.
    verificarLoginCensista(usuario, clave) {
        let validar = false;
        if (usuario != "" && clave != "") {
            for (let iterador = 0; iterador < this.censistas.length; iterador++) {
                const usuarioCensista = this.censistas[iterador].usuario;
                const claveCensista = this.censistas[iterador].clave;
                if (usuario.toLowerCase() === usuarioCensista && clave === claveCensista) {
                    validar = true;
                    console.log("Datos correctos");
                }
            }
            if (validar != true) {
                modificarContenidoParrafo("mensajeErrorLogin", `*Usuario y/o contraseña incorrectos. Por favor, verifique sus datos y vuelva a intentar*`);
                console.log("Datos Incorrectos");
            }
            return validar;
        } else {
            modificarContenidoParrafo("mensajeErrorLogin", `*Debe completar todos los campos*`);
        }
    }

    //Validar edad de persona censada
    validarEdadPersona(edad) {
        let validar = false;
        if (edad >= 0 && edad <= 130) {
            validar = true;
        } else {
            modificarContenidoParrafo("mensajeErrorEdadIngresada", `<div class="alert alert-danger" role="alert">
            Edad incorrecta, no puede ser menor a 0 ni mayor a 130!
            </div>`)
        }
        return validar
    }



    buscarCedula(cedula) {
        let censoFinalizado = false;
        for (let iterador = 0; iterador < sistema.censados.length; iterador++) {
            const cedulaExistente = this.censados[iterador].cedula;
            const estado = this.censados[iterador].estado
            if (cedula === cedulaExistente) {
                if (estado === true) {
                    modificarContenidoParrafo("mostrarMensajeCedula", `<div class="alert alert-warning" role="alert">
                    Esta persona ya ha sido censada!
                    </div>`)
                    censoFinalizado = true;
                }
            }
        }
        return censoFinalizado;
    }


    obtenerPersonaPorCedula(cedula) {
        for (let iterador = 0; iterador < this.censados.length; iterador++) {
            const personaActual = this.censados[iterador]
            if (personaActual.cedula === cedula) {
                return personaActual;
            }
        }
    }


    completarFormulario(cedula) {
        let persona = this.obtenerPersonaPorCedula(cedula);
        if(this.personaCensada(cedula)){
            if (cedula === persona.cedula) {
                modificarValorInput("nombrePersona", persona.nombre);
                modificarValorInput("apellidoPersona", persona.apellido);
                modificarValorInput("edadPersona", persona.edad);
                document.querySelector('#departamentoPersona').value = persona.departamento;
                modificarValorInput("ocupacionPersona", persona.ocupacion);
                modificarValorInput("cedulaPersona", persona.cedula);
            }
        }
    }

    eliminarFormulario(cedula){
        let validar = false;
        if(this.personaCensada(cedula)){
            for (let iterador = 0; iterador < this.censados.length; iterador++) {
                const persona = this.censados[iterador];
                console.log(persona, cedula, persona.cedula, persona.estado)
                if(cedula===persona.cedula && !persona.estado){ 
                    persona.nombre = null;
                    persona.apellido = null;
                    persona.edad = null;
                    persona.cedula = null;
                    persona.departamento = null;
                    persona.ocupacion = null;
                    persona.estado = null;
                    persona.censista = null;
                    validar = true;
                }                   
            }    
        }
        if(!validar){
            return modificarContenidoParrafo("mensajeCenso", `<div class="alert alert-warning" role="alert">
            Este formulario no puede ser eliminado!
            </div>`)
        }
        console.log(this.censados);
    }


    // Modifica los datos de la persona censada.
    modificarCensado(cedulaCensado, nombre, apellido, edad, departamento, ocupacion) {
        let modificado = false;
        for (let iterador = 0; iterador < sistema.censados.length; iterador++) {
            let censadoActual = sistema.censados[iterador];
            let cedulaCensadoActual = censadoActual.cedula;
            if (cedulaCensado === cedulaCensadoActual) {
                censadoActual.nombre = nombre;
                censadoActual.apellido = apellido;
                censadoActual.edad = edad;
                censadoActual.departamento = departamento;
                censadoActual.ocupacion = ocupacion;
                modificado = true;
            }
        }
        return modificado;
    }

    personaCensada(cedula) {
        let personaCensada = false;
        for (let iterador = 0; iterador < this.censados.length; iterador++) {
            const cedulaExistente = this.censados[iterador].cedula;
            if (cedula === cedulaExistente) {
                personaCensada = true;
            }
        }
        return personaCensada;
    }

    // Las siguientes dos funciones se encargan de limpiar y validar la Cédula de identidad 
    limpiarCedula(cedula) {
        let resultadoCedula = "";
        for (let iterador = 0; iterador < cedula.length; iterador++) {
            const digito = cedula[iterador];
            if (!isNaN(digito)) {
                resultadoCedula = resultadoCedula + digito;
            }
        }
        console.log(resultadoCedula);
        return resultadoCedula;

    }
    validarCedula(cedula) {
        let validar = false;
        cedula = this.limpiarCedula(cedula);
        let arregloVerificador = "8123476";
        let verificadorSeisDigitos = "123476";
        let verificador = 0;
        if ((cedula.length < 7) || (cedula.length > 8)) {
            modificarContenidoParrafo("mostrarMensajeCedula", `<div class="alert alert-danger" role="alert">
                    La cédula ingresada es incorrecta, por favor verifique y vuelva a ingresar.
                    </div>`);
            return validar;
        }
        if (cedula.length === 7) {
            arregloVerificador = verificadorSeisDigitos;
        }

        for (let iterador = 0; iterador < arregloVerificador.length; iterador++) {
            const digito = cedula[iterador];
            const digitoMultiplicador = arregloVerificador[iterador];
            verificador = verificador + (digito * Number(digitoMultiplicador));
        }
        verificador = verificador % 10;
        if (verificador === Number(cedula[cedula.length - 1])) {
            validar = true;
        }
        return validar;
    }

    //Funciones de despliegues de selects.
    desplegarCensosPorValidar(usuarioID) {
        let lista = "";
        let formulario = document.getElementById('personaPorValidar');
        let contador = 0;

        for (let iterador = 0; iterador < this.censados.length; iterador++) {
            const persona = this.censados[iterador];
            if (persona.censista === usuarioID) {
                if (!persona.estado) {
                    lista += `<option value="${persona.cedula}">${persona.nombre + " " + persona.apellido}</option>`;
                    contador++;
                }
            }
        }
        if (contador >= 1) {
            formulario.innerHTML = lista;
        } else {
            formulario.innerHTML = `<option value="">No se encuentran censos por validar</option>`;
            document.getElementById('btnTransferirPersona').disabled = true;
        }
    }
    desplegarCensistas(usuarioActivo) {
        let lista = "";
        let formulario = document.getElementById('censistaParaTransferir');
        for (let iterador = 0; iterador < this.censistas.length; iterador++) {
            const censistaActual = this.censistas[iterador];
            const actualID = censistaActual.id;
            if (usuarioActivo != actualID) {
                lista += `<option value="${censistaActual.id}">${censistaActual.nombre}</option>`
            }

        }
        formulario.innerHTML = lista;
    }

    desplegarDepartamentos() {
        let lista = `<option value="">Seleccionar...</option>`;
        let formulario = document.getElementById('departamentoPersona');
        let formulario2 = document.getElementById('departamentoPorcentaje')
        for (let iterador = 0; iterador < this.departamentos.length; iterador++) {
            const departamentoActual = this.departamentos[iterador];
            lista += `<option value="${departamentoActual}">${departamentoActual}</option>`;
        }
        formulario.innerHTML = lista;
        formulario2.innerHTML = lista;
    }

    desplegarOcupaciones() {
        let lista = `<option value="">Seleccionar...</option>`;
        let formulario = document.getElementById('ocupacionPersona');
        for (let iterador = 0; iterador < this.ocupaciones.length; iterador++) {
            const ocupacionActual = this.ocupaciones[iterador];
            lista += `<option value="${ocupacionActual}">${ocupacionActual}</option>`
        }
        formulario.innerHTML = lista;
    }

    generarTablaInvitado(){
        let tabla = document.getElementById('tablaInformacionInvitado');
        let lista = `
        <tr>
            <th>Departamento</th>
            <th>Estudian</th>
            <th>No trabajan</th>
            <th>Dependientes o Independientes</th>
            <th>Porcentaje censados</th>
        </tr>
        `;

        for (let iterador = 0; iterador < this.departamentos.length; iterador++) {
            let cantidaEstudiantes = 0;
            let cantidaNoTrabajan = 0;
            let cantidadDepEIndep = 0;
            let cantidadPorDepartamento = 0;
            const departamentoActual = this.departamentos[iterador];
            lista +=`
            <tr>
                <td>${departamentoActual}</td> `
            for (let iterador = 0; iterador < this.censados.length; iterador++) {
                const persona = this.censados[iterador];
                
                if(persona.departamento === departamentoActual){
                    cantidadPorDepartamento++;
                        if(persona.ocupacion === "Estudiante"){
                            cantidaEstudiantes++;
                        }
                        if(persona.ocupacion === "No trabaja"){
                            cantidaNoTrabajan++;
                        }
                        if(persona.ocupacion === "Dependiente" || persona.ocupacion === "Independiente"){
                            cantidadDepEIndep++;
                        } 
                }
                

            }
            let total = this.censados.length;
            let censados = cantidadPorDepartamento;
            let censadosPorcentaje = Math.floor((censados*100)/total)

            lista += `
            
                <td>${cantidaEstudiantes}</td>
                <td>${cantidaNoTrabajan}</td>
                <td>${cantidadDepEIndep}</td>
                <td>${censadosPorcentaje}%</td>
            </tr>

            ` 
            
        }
        tabla.innerHTML = lista;

    }


    totalCensados() {
        let contador = 0;
        for (let iterador = 0; iterador < this.censados.length; iterador++) {
            const personaActual = this.censados[iterador];
            if (personaActual.estado === true) {
                contador++;
            }
        }
        return contador;
    }

    mostrarCensadosPorDepartamento() {
        let lista = `
        <tr>
            <th>Departamento</th>
            <th>Cantidad de personas censadas</th>
        </tr>`;
        for (let iterador = 0; iterador < this.departamentos.length; iterador++) {
            const departamentoActual = this.departamentos[iterador];
            let contadorPersonasPorDepartamento = 0;
            for (let iteradorInterno = 0; iteradorInterno < this.censados.length; iteradorInterno++) {
                const personaActual = this.censados[iteradorInterno];
                if (personaActual.estado && personaActual.departamento === departamentoActual) {
                    contadorPersonasPorDepartamento++;
                }
            }
            if (contadorPersonasPorDepartamento >= 1) {
                lista += `
        <tr>
        <td>${departamentoActual}</td>
        <td>${contadorPersonasPorDepartamento}</td>
        </tr>
        `;
            }
        }
        modificarContenidoParrafo('tablaPersonasCensadasPorDepartamento', lista);
    }

    porcentajeNoValidados() {
        let mostrar = document.getElementById('porcentajeGrafica')
        let mostrarInput = document.getElementById('porcentajePersonasNoValidadas');

        let total = this.censados.length;
        let validados = this.totalCensados();
        let porcentajeValidados = Math.floor((validados * 100) / total);
        let porcentajeNoValidados = 100 - porcentajeValidados;

        let input = `
        <input type="text" name="mostrarPorcentajeNoValidado" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="${"Porcentaje de personas no validadas: " + porcentajeNoValidados}%" disabled>`;
        let grafica = `
        <div class="progress-bar bg-info" role="progressbar" style="width: ${porcentajeValidados}%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Validados ${porcentajeValidados}%</div>
        <div class="progress-bar bg-secondary" role="progressbar" style="width: ${porcentajeNoValidados}%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">No validados ${porcentajeNoValidados}%</div>`

        mostrar.innerHTML = grafica;
        mostrarInput.innerHTML = input;
    }

    personaMenorDeEdad(edad) {
        let menor = false;
        if (edad >= 18) {
            menor = true;
        }
        return menor;
    }

    porcentajeMenoresDeEdad(departamento) {

        let mostrar = document.getElementById('porcentajeMenoresYMayores');
        let mostrarInput = document.getElementById('mostrarPorcentajePersonasMenoresYMayores');

        let contadorPersonasMenores = 0;
        let contadorTotalPorDepartamento = 0;
        for (let iterador = 0; iterador < this.departamentos.length; iterador++) {
            const departamentoActual = this.departamentos[iterador];

            if (departamento === departamentoActual) {
                for (let iteradorInterno = 0; iteradorInterno < this.censados.length; iteradorInterno++) {
                    const personaActual = this.censados[iteradorInterno];
                    if (personaActual.departamento === departamentoActual && personaActual.estado){
                        contadorTotalPorDepartamento++;
                        if(this.personaMenorDeEdad(personaActual.edad)){
                            contadorPersonasMenores++;
                        }   
                    } 
                }
            }
        }

        if(contadorTotalPorDepartamento < 1){
            return mostrarInput.innerHTML = `<input type="text" name="inputError" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="No se encuentran personas censadas en este departamento" disabled>`
        }

        let total = contadorTotalPorDepartamento;
        let personasMenores = contadorPersonasMenores;
        let porcentajeMenores = Math.floor((personasMenores * 100) / total);
        let porcentajeMayores = 100 - porcentajeMenores;
        console.log("total:"+ total, "personas menores:"+personasMenores);
        console.log(porcentajeMayores, porcentajeMenores);

        mostrarInput.innerHTML = `
            <input type="text" name="mostrarPorcentaje" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value="${"Porcentaje de personas menores: " + porcentajeMenores}%" disabled>
        `
        mostrar.innerHTML = ` 
        <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" style="width: ${porcentajeMayores}%"  aria-valuemin="0" aria-valuemax="100">Mayores ${porcentajeMayores}%</div>
            <div class="progress-bar bg-secondary" role="progressbar" style="width: ${porcentajeMenores}%" aria-valuemin="0" aria-valuemax="100">Menores ${porcentajeMenores}%</div>
            
        </div>
        `
    }

}


