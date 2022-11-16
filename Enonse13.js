let b =5, n =3, tab =[];
let newTab =[];
let newTab1 =[];

for(let i=0; i<b; i++){
    tab.push(i)
}
console.log(tab)
for(let i=0; i<b; i++){
    if(i==0){
        for(let a=1; a<=b; a++){
            newTab.push(tab[tab.length-a])
        }
    }else{
        tab.length=4
        for(let a=i+1; a<=b; a++){
            newTab[i]=tab[tab.length-a]
        }
    }
    console.log(newTab)
}


