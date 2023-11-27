// 3 formas de ejecutar codigo asincrono
//call backs
//promesas
//asyw - await
/*
const conexionBD = (datosConexion) => {
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            datosConexion ? resolve("Conexion OK"): reject("Conexion Error")
        })
     })
     }
     conexionBDD(false)
     .then((r=>console.log(r)))
     .catch((r=>console.log(e)))
*/
const obtenerDatos = fetch("https://jsonplaceholder.typicode.com/users") 
obtenerDatos()
.then(peticion=>peticion.json())
.then(respuesta=>console.log(respuesta))
.catch(error => console.log(error))

const conexionBDDD = async()=>{
    try{
        const r = await conexionBDDD(true)
        console.log()
    }
}