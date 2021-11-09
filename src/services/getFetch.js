

const animales = [
    { id: 1, categoria: "perro", raza: "Ovejero Aleman", price: 370 , description: "Perros muy cariñosos que saben defender el hogar."},
    { id: 2, categoria: "perro", raza: "Caniche", price: 370 , description: "Perros muy pequeños, de departamento."},
    { id: 3, categoria: "perro", raza: "Cocker", price: 270 ,description: "Perros con mucho pelo. Son mansos."},
    { id: 4, categoria: "perro", raza: "Pitbull", price: 400 ,description: "Buenos perros guardianes aunque pueden ser peligrosos para los dueños."},
    { id: 5, categoria: "perro", raza: "Doberman", price: 550 ,description: "Perros rápidos."},
    { id: 6, categoria: "ave", raza: "Pollitos", price: 110 ,description: "Adorables pollitos"},
    { id: 7, categoria: "caballo", raza: "Caballo", price: 190 ,description: "Buenos caballos, no usar para arrastras carretas."},
    { id: 8, categoria: "gato", raza: "Gato Siames", price: 120 ,description: "Gatos de buen pelaje."},
    { id: 9, categoria: "gato", raza: "Gato Persa", price: 125 ,description: "Gatos de pelaje blanco."},
  ];

  //Promise((res, rej)=>{})
//resuelto funcion cunado esta todo bien
//rechazado funcion cunado esta todo mal

 export const getFetch = new Promise((resolve, reject)=>{
    // tareas asincronicas acciones
    //console.log('antes');
    setTimeout(()=>{
      //console.log('superdsp');
        resolve(animales)
    }, 300)
    //console.log('dsp');
    //reject('400 not found')
})

export const getItem = (clave) =>{
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          //console.log("clave"+clave)
          //console.log("dentro de claves, animales"+JSON.stringify(animales))
          resolve(animales.find(animales => animales.id === parseInt(clave) ));
      }, 200)});
}
//se multiplicaron x0.1 los retardos, para q testear mas rapido

/*
export const getItem = (id) =>{
  return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          resolve(animales[id]);
      }, 2000)});
}*/

