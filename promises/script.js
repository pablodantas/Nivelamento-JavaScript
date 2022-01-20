function f(g ,h){

    setTimeout(() => {

        if (10 > 0){
            g("P");
        }else{
            h("Q")
        }
        
    }, 3000);
    

}

const minhaPromise = new Promise(f);

minhaPromise
.then(valor => {
    console.log(`Resolveu com o ${valor}`);
})
.catch(valor =>{
    console.log(`Rejeitada com o ${valor}`);
});  

console.log(minhaPromise);