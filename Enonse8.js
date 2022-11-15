let chenn = "Kode map kode Jscript";

for(let i=0; i<chenn.length -1; i++){
    if(chenn[i]==' '){
        chenn =chenn.replace(chenn[i], "")
    }
}
console.log(chenn)