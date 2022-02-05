class Persona{
  
    static contadorClientes = 0;
    static contadorEmpleados = 0;
 
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
       
     }
    
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
 
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
 
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
 
    nombreCompleto(){
        return this.idPersona + ", " + this._nombre + ", " + this._apellido + ", " + this._edad;
    }
    toString(){
        return this.nombreCompleto();
    }
 
 
}
 
class Empleado extends Persona{
    constructor (nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this.idPersona = ++Empleado.contadorEmpleados;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }
 
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this._sueldo;
    }
    
}
 
class Cliente extends Persona{
    constructor (nombre, apellido, edad, date){
    super(nombre, apellido, edad);
    this._date = date;
    this.idPersona = ++Cliente.contadorClientes;
   }
   get date(){
       return this._date;
   }
   set date(date){
       return this._date = date;
   }
 
   nombreCompleto(){
       return super.nombreCompleto() + ", " + this._date;
   }
  
}
 
 
let empleado1 = new Empleado("Rene", "Favaloro", "77 años", "usd 100.000");
console.log(empleado1.toString());
 
let empleado2 = new Empleado("Luis", "Borges", "86 años", "usd 250.000");
console.log(empleado2.toString());
 
let cliente1 = new Cliente("Hernan", "Lala", "34 años", new Date() );
console.log(cliente1.toString());
