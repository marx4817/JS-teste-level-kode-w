let non = prompt("Antre non w:")
//let non = "Ayiti se yon BEL PEYI";
let nouvoNon =""
for(let i of non.split(" ")){
    i = i[0].toUpperCase() + i.slice(1).toLowerCase()
    nouvoNon += `${i} `
    
}
console.log(nouvoNon)
