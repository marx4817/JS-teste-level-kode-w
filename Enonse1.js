let adreIP = prompt("antre adres ip a: ");
//let adreIP = "127.0.0.1"
let rezilta = 0, rezilta_Final = 0;
for( i of adreIP){
    if (i == ".")
        continue
    rezilta += parseInt(i)
}
rezilta_Final = rezilta * parseInt(adreIP[0])
console.log(`pot ki ouve a se pot ${rezilta_Final} lan`)