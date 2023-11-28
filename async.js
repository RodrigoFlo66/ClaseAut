// Sincrono
// console.log('------------- SINCRONO -------------');
// console.log('Inicio');
// console.log('Uno');
// console.log('Dos');
// console.log('Fin');

// Asincrono
// console.log('------------- ASINCRONO -------------');
// console.log('Inicio');
//  setTimeout( function() {
//     console.log('Uno');
//  }, 2000);
//  setTimeout( function() {
//     console.log('Dos');
//  }, 1000);
// console.log('Fin');

function timeout(fn, ms) {
    return new Promise(function(resolve) {
        fn();
        return setTimeout(resolve(), ms);
    })
}

function test() {
    console.log('Inicio');
    timeout(function(){
      console.log('Uno');  
    }, 2000);
    timeout(function(){
        console.log('Dos');  
      }, 1000);
    console.log('Fin');
}
test();

// Promesas
// Estados: Pendiente | Resuelto | Error
// const promesa = new Promise(function(resolve, reject) {
//     const seCumplio = true;
//     if(seCumplio) {
//         resolve('Salio todo correcto');
//     } 
//     reject('Salio mal');
// });

// promesa.then(function(value) {
//     console.log(value);
// }).catch(function(resaon) {
//     console.log(resaon);
// });


// function manejadorRespuesta(response) {
//     console.log(response);
// }

// promesa.then(manejadorRespuesta);

// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(function(response) {
//     response.json().then(function(data) {
//         console.log(data);
//     });
// }).catch(function(error) {
//     console.log(error);
// });

// Async/Await
// async function getDitto() {
//    try {
//        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//        const data = await response.json();
//        console.log(data);
//    }  catch(error) {
//         console.log(error);
//    }
// }

// getDitto();