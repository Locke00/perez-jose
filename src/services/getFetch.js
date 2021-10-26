

const animales = [
    { id: 1, raza: "Ovejero Aleman", price: 37 },
    { id: 2, raza: "Caniche", price: 37 },
    { id: 3, raza: "Cocker", price: 27 },
    { id: 4, raza: "Pitbull", price: 40 },
    { id: 5, raza: "Doberman", price: 55 },
    { id: 6, raza: "Pollitos", price: 11 },
    { id: 7, raza: "Caballo", price: 19 },
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