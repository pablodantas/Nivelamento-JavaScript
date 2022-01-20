
const cep = '40313565';

async function getJsonResponse(url){
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
}

/*
getJsonResponse(`https://viacep.com.br/ws/${cep}/json/`)
    .then(result => {
        console.log(result);
    });
*/
async function showCepData(cep){
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const json =  await getJsonResponse(url);
    console.log(json);
}    

showCepData(cep);

console.log("A");
console.log("B");
