let bonMin =1, bonMax =20;
let a=2, b=3;
let miltipA =[], miltipB =[], miltipAeB =[], paMiltipAeB=[];
for(let i=bonMin; i<=bonMax; i++){
    if(i%a==0 && i%b ==0){
        miltipAeB.push(i)
    }else if(i%a==0 && i%b !=0){
        miltipA.push(i)
    }else if(i%a !=0 && i%b ==0){
        miltipB.push(i)
    }else{
        paMiltipAeB.push(i)
    }
}
console.log(`miltip ${a}: ${miltipA.join()} -> total nonb ${miltipA.length}`)
console.log(`miltip ${b}: ${miltipB.join()} -> total nonb ${miltipB.length}`)
console.log(`miltip ${a} e ${b}: ${miltipAeB.join()} -> total nonb ${miltipAeB.length}`)
console.log(`pa miltip ${a} e ${b}: ${paMiltipAeB.join()} -> total nonb ${paMiltipAeB.length}`)
