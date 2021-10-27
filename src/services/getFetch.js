

const animales = [
    { id: 1, raza: "Ovejero Aleman", price: 370 , description: "Perros muy cariñosos que saben defender el hogar."},
    { id: 2, raza: "Caniche", price: 370 , description: "Perros muy pequeños, de departamento."},
    { id: 3, raza: "Cocker", price: 270 ,description: "Perros con mucho pelo. Son mansos."},
    { id: 4, raza: "Pitbull", price: 400 ,description: "Buenos perros guardianes aunque pueden ser peligrosos para los dueños."},
    { id: 5, raza: "Doberman", price: 550 ,description: "Perros rápidos."},
    { id: 6, raza: "Pollitos", price: 110 ,description: "Adorables pollitos"},
    { id: 7, raza: "Caballo", price: 190 ,description: "Buenos caballos, no usar para arrastras carretas."},
  ];

  //Promise((res, rej)=>{})
//resuelto funcion cunado esta todo bien
//rechazado funcion cunado esta todo mal

 export const getFetch = new Promise((resolve, reject)=>{
    // tareas asincronicas acciones
    console.log('antes');
    setTimeout(()=>{
      console.log('superdsp');
        resolve(animales)
    }, 2000)
    console.log('dsp');
    //reject('400 not found')
})


/*a = getFetch()
console.log(a)*/