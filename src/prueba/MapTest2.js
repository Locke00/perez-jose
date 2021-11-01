

const productos = [
    {id: 1, descripcion:'silla',  foto:'img1.jpg', price: 200},
    {id: 2, descripcion:'mesa',  foto:'img2.jpg', price: 300},
    {id: 3, descripcion:'puerta',  foto:'img3.jpg', price: 400}

];


const promise = new Promise((resolve,reject)=>{
    resolve('ok 200')
    //reject('error 400')
})

const MapTest2 = () => {
    
    //console.log(getFetch)  
    /*task.then(result => {
        console.log(result)
        console.log('hecho')
    })*/
/*    getFetch.then(res => {
        console.log(res)
    })
*/

    console.log(productos);
    console.log(promise)

    promise.then((res)=> { 
                    //throw new Error("Error forzado")
                    console.log(res) 
                    return res
                })
    .catch( (err) => {console.log(err+" pero capturado")
                    return err
                    })
    .then( (resp) => console.log("Respuesta del 2do then: "+resp) )
    .finally(()=> console.log('Esto se ejecuta si o si'))

    //console.error('un error a ocurrido')
   


    /*promise.then(result => {
        console.log(result)
    }).catch(result=>{
        console.log(result)
    })*/


    const users = [
        { nombre: 'coder'},
        { nombre: 'house'}
    ]
    console.log(users.map((user)=> user.nombre ))   //devuelve el arreglo  con los elementos ["coder","house"]

    
    return (    
        <> 
                <h1> test--</h1>
                { [1,2,3,4]}
                <br/>
                { [1,2,3,4].map((num)=> <span key={num}>{num*2}</span>)   }

                <div>{productos[0].descripcion}</div>
                {productos.map((prod)=> <h2 key={prod.id}>{prod.descripcion}</h2>)}
                <br/>
                {productos.map((producto)=>
                    <h2 key={producto.id}>
                        {productos.descripcion}
                        <div><span>id: </span>{producto.id} </div>
                        <div><span>descripcion: </span>{producto.descripcion} </div>
                        <div><span>price: </span>{producto.price} </div>
                     
                    </h2>
                 )}
                
        </>
    )
}

//{ [1,2,3,4].map((num)=  )}

/*


const ComponentePromesas = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch
        .then( res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setProduct(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
       
       
    },[])   
  
 
    console.log(product)
    return (
        <>
           <h2>Soy componentePromesas</h2>          
            
            { loading ? <h1>Cargando...</h1> :         
                    product.map(prod=> <div key={prod.id} className="card w-50 mt-5" >
                                                <div className="card-header">
                                                    {prod.name}
                                                </div>
                                                <div className="card-body">
                                                    <img src={prod.foto} alt='' />
                                                    {prod.price}
                                                </div>
                                                <div className="card-footer">
                                                    <button className="btn btn-outline-primary btn-block">
                                                        detalle del producto
                                                    </button>
                                                </div>
                    
                                          </div>
            )
            }
        </>
    )
}
*/
export default MapTest2



//   function getPersonas(id) {
//     if (id===undefined) {
//         return personas
//     }else{
//         return personas.find( persona=> persona.id === id)
//     }
// }

// .then( (respuesta) => {
        //     // throw new Error("Error")
        //     console.log("respuesta: ", respuesta)
        //     // return 1
        // })
        // .catch((err) => {
            //     console.log("ourrio un error", err);
            //     return "todo ok";
            // })
    // .then((valor) => {
        // console.log("valor", valor);
        // });