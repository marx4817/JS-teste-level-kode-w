function dekrip(a){
    let alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let mo ="";
    let dek = a.split(" ");
    for(s of dek){
        if(s[0]==">"){
            if(s.length ==4){
                let c = s.slice(1,3);
                c =parseInt(c);
                let b= alfabet.indexOf(s[3]);
                mo += alfabet[b+c];
            }else{
                let c = s.slice(1,2);
                c =parseInt(c);
                let b= alfabet.indexOf(s[2]);
                mo += alfabet[b+c];
            }
        }else if(s[0]=="<"){
            if(s.length ==4){
                let c = s.slice(1,3);
                c =parseInt(c);
                let b= alfabet.indexOf(s[3]);
                mo += alfabet[b-c];
            }else{
                let c = s.slice(1,2);
                c =parseInt(c);
                let b= alfabet.indexOf(s[2]);
                mo += alfabet[b-c];
            }
        }
    }
    return mo;
}

console.log(dekrip(">0D <9S >0A <2P >3D <8W"))
console.log(dekrip("<1T >7H >3C <5Y >13J <2C <5W >4A"))
console.log(dekrip(">3A >0A <1U <10K >1A <9J <0S <16U"))
console.log(dekrip(">5K <0Y <3W <3K <6U <3Q"))
console.log(dekrip("<14P <1V <1H >4O"))
