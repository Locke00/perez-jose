import { useState, useEffect } from "react";


 
export const ControlledInput = () => {
    const [input, setInput] = useState("estado inicial");

    useEffect(() => {
      console.log('subscripcion');

      return () => {
        console.log('dessubscripcion')  // poner este console.log tb me sirve para saber cuando se esta desmontando un componente
      }
    }, [input])
    console.log('input');
    console.log(input);
    return (
      <input
        type="text"
        value={input}
        onInput={(evet) => setInput(evet.target.value)}
      />
    );
  };
/*
1ra ejecucion:
  input,   estado inicial,    subcripcion
una vez q se modifique algo en el campo del input, se cambiara el estado, xlo q desmontarael elemento y dps se resubscribira
  input,   estado inicialz,  dessubscripcion,  subcripcion

O sea, cuando se renderiza 1ro el elemento se ejecuta lo q esta:
  1. antes de return del componente, salteando el contenido del useEffect
  2. se renderiza lo q indica lo q tenga el return del componente
  3. el useEffect sin ejecutar lo q tenga su propio return, ya q este return se ejecuta cuando se desmonta el componente
Luego, cuando el usuario escribe un input, se setInput cambia el estado del componente, disparando su re-renderizado:
  1. se ejecuta lo q está antes del return del componente, salteando el useEffect
  2. se renderiza lo q indica lo q tenga el return del componente
  3. se ejecuta el contenido del return del useEffect, ya q se procede al desmontado del mismo
  4. al volverse a montar el useEffect, se vuelve a ejecutar su contenido si ejecutar su propio return(el cual sera ejecutado cuando se desmonte)

las subscripciones a eventos se realizan en el cuerpo del useEffect() (como los addListener), mientras q las desubscripciones se realizan
en su return, para q no se acumulen cuando se tenga q hacer el re-renderizado

*/


//rendering condicional:  
export  function LoadingComponent() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {

      setTimeout(() => {
        setLoading(false);
      }, 1000);

      return ()=>{
          console.log('Limpiando componente');
      }
    }, []);
    console.log('aaa');
    return <>
        {loading ? <h2>Loading... </h2> : <h3>Productos cargardos!</h3>}
    </>;
  }
//sirve para hacer un rendering de un nodo del arbol, o de otro
//si esto hace q se desmonte un componente complejo, q tiene hijos y estados, los mismos se van a perder
//  tener cuidado de eso si se esta compartiendo estado x contexto, xq me puede dar problemas en q ya no tenga esos estados









//Rendering Condicional nro 1 - IF c/ return temprano
export  function TextComponent({ condition = true }) {

    //este if es equivalente a: if(condition === false)
    if (!condition) {     //antes de cargar cualquier cosa, si se detecta q el usu no esta logueado le muestra un cartel y lo saca 
      return <h2>Uds no esta logeado</h2>;   //y no se renderiza todo el resto
    }

    return <h2>Ud esta logueado puede ver la pág.</h2>;
  }







//operadores ternarios:
// condicion ? :  condicion && , condicion || 
// condicion ? <lo_q_se_ejecuta_si_es_verdadero> : <lo_q_se_ejecuta_si_es_falso> 
// condicion && <lo_q_se_ejecuta_si_es_verdadero>
// condicion ||                  este se ejecuta si O (no se q significa)

//Rendering Condicional nro 2 - Inline con fragment
export  function TextComponent2({ condition = false }) {
    
    return (
      <>
        {condition && <h2>Ud esta logueado puede ver la pág.</h2>}

        {!condition && <h2>Ud no esta logueado, NO puede ver la pág.</h2>}

      </>
    );
  }

//de un fragment base (<>.. </>) elegimos q queremos q se muestre y q no
//se usa cuando hay jerarquia de administracion, cuando un usuario puede ver ciertos botones, y otro usuario puede ver otros botones o mas






//Rendering Condicional nro 3 - Inline con fragment
export  function TextComponent3({ condition = false }) {
    return (
      <>
        <h2> {condition ? 'Ud esta logueado puede ver la pág.' : 'Ud esta logueado no puede ver la pág.'} </h2>            
        
      </>
    )
  }
/* Mantenemos el mismo nodo padre, pero modificamos sus hijos
crea un solo elemento en react(React.createElement), x lo q se optmiza el uso, en contraposicion a los anteriores 2, q hacian 2 createElement)
*/


//Conditional Props: Styling: el conditional rendering no solo se aplica para nodos, sino q tb se puede aplicar para sus propiedades
 export function TextComponent4({ condition = false }) {

    return (
      <>
        <h2 style={ { color: condition ? "green" : "red" } }>
          Ud esta logueado puede ver la pág.
        </h2>
      </>
    );
  }




//tb se puede aplicar a estilos de clases, (classNames)  
export  function TextComponent5({ condition = false }) {
    return (
      <>
        <h2 className={ (condition === true) ? "btn btn-success" : "btn btn-danger" }>
         stock
        </h2>
      </>
    );
  }









//las clases se pueden concatenar
//en este caso las props q recibo, si vienen como undefined, les asigna esos valores x defecto
export  function TextComponent6( { condition = true, otro = "mt-5" }  ) {
    return (
      <>
        <h2
          className={ `${condition === true ? "btn btn-success" : "btn btn-danger"} ${otro || ""} `}
        >
          Ud esta logueado puede ver la pág.
        </h2>
      </>
    );
  }
//la clase q se reciba como prop en otro tb se va a asignar al element
// ${otro || ""}      : esto hace q si en la prop otro no viene nada, y to tengo en la parte de arriba del componente:
//  export  function TextComponent6( { condition = true, otro  }  ) { 
//hará q otro tenga el valor de: ""  
//usar el ||, no el &&, xq eso puede q me de problemas

//mt-5: margin top = 5

//si lo llamo al componente como <TextComponent6 otro='mt-1' />, lo sobreescribe al valor x defecto






//Conditional Props / Props dinámicas

//en este caso alternativamente, podria enviar la config como prop
export function TextComponent7({ condition = true , otro = "mt-5" }) {
    
    const config = condition

      ?
            {
                className: `btn btn-success ${otro || ""}`,
                style: {color: 'red'},
                title: "Este es el titulo si la condicion es verdadera",
                nombre: 'Fede'
            }
      : 
            {
                className: `btn btn-warning ${otro || ""}`,
                style: {color: 'green'},
            }

            
    
      return (
      <>
        <h2 {...config} >Ud esta logueado puede ver la pág.</h2>
      </>
    )
  }

//{...config}: hace un spread operator de los elementos q recibe, expande todos los campos valor dentro de mi componente
//de esta forma puedo enviar las props q yo quiera a un elemento q vaya a crear, con valores q dependen de las condiciones


  