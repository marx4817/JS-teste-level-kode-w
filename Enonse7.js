let chenn = "Kode map kode Jscript";
let vwaye="aeiouy";

for(let i=0; i<chenn.length -1; i++){
    if(vwaye.includes(chenn[i+1])){
        chenn =chenn.replace(chenn[i], "*")
    }
}
console.log(chenn)
