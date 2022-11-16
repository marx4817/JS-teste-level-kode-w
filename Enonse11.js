let tab = [-1,2,3,4,5,0,9, 100]

let max= tab[0]
let min =tab [0]

for(i of tab){
    if(i>max){
        max =i
    }else if(i<min){
        min =i
    }
}

console.log(`Pi piti vale a se:${min} e pi gran an se:${max}`)