
let acidente = undefined;

// Exemplo de requisição GET
let ajax = new XMLHttpRequest();

// Seta tipo de requisição e URL com os parâmetros
ajax.open("GET", " http://127.0.0.1:5000/api/acidente", true);

// Envia a requisição
ajax.send();

// Cria um evento para receber o retorno.
ajax.onreadystatechange = function() {
// Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
    if (ajax.readyState == 4 && ajax.status == 200) {
        //console.log(ajax.responseText)
        acidente = ajax.responseText;
    }
}

//mostra os dados consultados na tela 
function monstrarAcidente(){
    //window.open("pg2.html");
    //console.log(acidente);
    document.getElementById('textAcidente').innerHTML = acidente;
}

