let chennNonb ="5 45 123 12";
let prod =1;

for(nonb of chennNonb.split(" ")){
    let som =0;
    for(i of nonb){
        som += parseInt(i);
    }
    prod *= som;
}
console.log(prod);