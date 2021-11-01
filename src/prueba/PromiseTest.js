

const PromiseTest = () =>{
    const productos = [
        { id: 1, descripcion: 'silla', foto: 'img1.jpg', price: 200 },
        { id: 2, descripcion: 'mesa', foto: 'img2.jpg', price: 300 },
        { id: 3, descripcion: 'puerta', foto: 'img3.jpg', price: 400 },
      ];
    const promise = new Promise((resolve, reject) => {
      //resolve(productos); esta linea seria en caso si no quisiera darle retardo
      setTimeout(()=> resolve(productos), 3000);
    });

    promise.then((res) => {
        for (let index = 0; index < res.length; index++) {
          const element = res[index];
          console.log(element);
        }
      });
            

    return(
        <>

        </>
    )
}
export default PromiseTest






