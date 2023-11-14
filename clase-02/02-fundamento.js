/*const user ={
    name:"kira",
    ciudad:"quito",
    activo: true,
    addres:{
        calle: "calle abc",
        secundaria: "calles 123"
    }, 
    edad: 32,
    friends: ["Jose", "albert", "juanita"],
    sendMail(){
        return `Send mail ${this.friends[0]}`
        
    },
    
    sendNotification:function(){
        return `Send mail ${this.friends[2]}`
    }
}



console.log(user.ciudad)
console.log(user.edad)
console.log(user.activo)
console.log(user.sendMail())
console.log(user.addres.calle)
console.log(user.sendNotification())

//agrgar un conjunto de par de clave a un objeto previo
user.image="http:/image/profile"

//eliminar la clave y valor
delete user.friends

//desestructuracion de objetos
const{claves}=objeto
const{name, edad, friends, activo }=user

*/
const user ={
    name:"kira",
    ciudad:"quito",
    activo: true,
}

const addres={
    calle: "calle abc",
    secundaria: "calles 123"
}

const{
    name, ciudad, activo}=user

//unir dos objetos con spread operator  (...) los parematros rest son exclusivos para funciones (...args)
    const allInformation={...user,...addres}

    const allInformation1={...addres,...user}

    console.log(allInformation)
    console.log(allInformation1)

    console.log(name,ciudad,activo)//ya no es necesario indicar el objeto con la desestructuración

    const nombre="laptop"
    const precio=2000

    const newProduct={
        nombre: nombre, 
        price: precio
    }

     console.log(newProduct)

     //nombres abreviados de propiedades
     const newProduct1={
        nombre,
        precio
     }

     console.log(newProduct1)

const profileUser=["Byron","loarte", "34","❤️"]
 
const skills=["front","back"]
//insertar un elemento al arreglo a
profileUser.push(skills)

//profileUser.unshift(skills) agregar un elemento al inicio

console.log(profileUser)

profileUser.pop() //para eliminar el elemento al final
//profileUser.shift() //para eliminar un elemento al inicio

console.log(profileUser)

const findOne=profileUser.find((e)=>e ==="Juan")
const findTwo=profileUser.find((e)=>e ==="Byron")

console.log(findOne)
console.log(findTwo)



//const newData=profileUser.filter(e=>e!="loarte")
//console.log(newData)

const newData=profileUser.map((i,t)=>
{
    return `${t}`
})
console.log(newData)


//desestructuración 
const dataNewUser= ["Byron","Loarte",34,true,{ciudad:"quito"},["frontend","backend"]]

console.log(dataNewUser[0])
console.log(dataNewUser[1])
console.log(dataNewUser[2])
console.log(dataNewUser[3])
console.log(dataNewUser[4])



const [names, lastname, age, active, addresss, skill]=dataNewUser

console.log(names, lastname, age, active, addresss, skill)