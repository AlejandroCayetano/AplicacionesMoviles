//FUNCION FLECHA

// 1. ********************************** */

function mifuncion (a,b){
    return a+b;
}

// 2. ********************************** */

console.log (mifuncion (2,3));

//estructura de funcion flecha

let salu2 = () => {};

// 3. ********************************** */

let saludo = (nombre) =>{
    return 'Saludos ' + nombre;
}
console.log (saludo ('Juan'));

// 4. ********************************** */

let saludar = nombre => 'Saludos ' + nombre;
console.log (saludar ('Ramiro'));

// 5. *************** pasar multiples parametros ******************* */

let suma =(a,b) => a+b;
console.log (suma (5,8));

// 6. *************** crear objeto en funcion flecha ******************* */

let obj = () => ({nombre: 'Roberto', edad: 20});

//llamamos al objeto y accedemos a la propiedad

//let persona = obj().nombre;
console.log (obj().nombre);

// 7. *************** arreglos ******************* */

let arrFunc = () => [1,2,3,4,5];

//accediendo a todo el aray
console.log (arrFunc ());

//accediendo al arreglo
console.log (arrFunc ()[4]);

