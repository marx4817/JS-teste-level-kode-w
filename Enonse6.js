let chenn = "Ayibobo Ayiti";
let nouvoChenn ="";
for(let i=1; i<=chenn.length; i++){
    nouvoChenn += chenn[chenn.length-i]
}
nouvoChenn = nouvoChenn.replaceAll(" ", "")
console.log(nouvoChenn)