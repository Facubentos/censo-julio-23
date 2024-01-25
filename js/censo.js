class Persona {
    constructor(nombre, apellido, edad, cedula, departamento, ocupacion, estado, censista) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cedula = cedula;
        this.departamento = departamento;
        this.ocupacion = ocupacion;
        this.estado = estado;
        this.censista = censista;

    }


    

    retornarPropiedad(propiedad) {
        switch (propiedad) {
            case 'nombre':
                return this.nombre;
                break;
            case 'apellido':
                return this.apellido;
                break;
            case 'edad':
                return this.edad;
                break;
            case 'cedula':
                return this.cedula;
                break;
            case 'departamento':
                return this.departamento;
                break;
            case 'ocupacion':
                return this.ocupacion;
                break;
        }
    }


}



