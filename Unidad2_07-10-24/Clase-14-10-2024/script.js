//FUNCIONES 

/*01-----------

function hello() {
     
    console.log('Hola JS');
    console.log('Hola HTML');
    console.log('Hola CSS');

}
hello();*/

//Retorno de una funcion

/*02------------

function hello(){
    
    return "hola JS";

}

const result = hello();
console.log(result);*/
//hello();

//retorna objeto vacío

/*03-----------

function hello(){
    return {};
}

console.log(hello());
*/

//retorna valor del objeto

/*04------------

function hello(){
    return {
        nombre:'Alejandro'
    }
}

console.log(hello());
*/

//funcion que retorna a otra funcion

/*05----------

function hello(){
    return function (){

        return "Hola JS"

    }

}

console.log(hello()());
*/

//======= USO DE PARAMETROS EN FUNCIONES =======

/*06-----------

function hellpconJS(name){
    return 'Hola' + name
    
}

console.log(hellpconJS(' Alejandro'));
*/

//pasar mas de un parametro a la funcion

/*07-----------

function hellpconJS(x,y){
    return x / y;
}

console.log(hellpconJS(10,20));
console.log(hellpconJS(10,80));
*/
 //control de errores en parametros

/*08-----------

 function hellpconJS(x,y=0){
  
    return x *y;
}

console.log(hellpconJS(10));
*/

//====== OBJETOS ======
const user = {
    nombre : 'Alejandro',
    apellidoP : 'Cayetano',
    apellidoM : 'Verduzco',
    edad:17,
    edoCivil: 'Soltero (por ahora)',
    domicilio : {
        ciudad : 'CDMX',
        calle : 'Agustin Melgar',
        numero : 123456

    },
    amigos: ['Karol', 'Emilio', 'Valeria', 'Memo'],
    activo:false,
    sendMensaje: function(){
        return 'enviando msj'
    }
}

//alert ciudad, calle, numero..
//consola, los amigos
//alert (activo o dado de bajo)
//consola, nombre, apellidos, edoCivil..!!
//alert (estado del mensaje)

alert (user.domicilio.ciudad + ' ' + user.domicilio.calle + ' ' + user.domicilio.numero);

//Amigos
console.log(user.amigos);

//Activo o dado de baja
alert(user.activo ? 'Activo' : 'Dado de baja');

//Nombre, apellidos, edo civil
console.log(user.nombre + ' ' + user.apellidoP + ' ' + user.apellidoM + ' esta ' + user.edoCivil);

//Estado del mensaje
alert (user.sendMensaje());

