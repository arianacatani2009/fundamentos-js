login =(user,pass)=>{
    if(!user && pass) return console.log("No autorizado")
    console.log(`welcome ${user}`)
}


module.exports = login

