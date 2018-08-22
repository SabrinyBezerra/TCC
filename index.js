
let acidente = [];



/*
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
        acidente = ajax.response
        console.log(acidente)
        console.log('OK')
    }
}

*/

//mostra os dados consultados na tela 
function monstrarAcidente(){
    //window.open("pg2.html");
    //console.log(acidente);
    console.log('OK')
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:5000/api/acidente",
        success: function(data) {
          acidente = data;
          console.log('SUCESSO')
          criarGrafico()
        },
      });
    //document.getElementById('textAcidente').innerHTML = acidente;
}


 function criarGrafico () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Número de acidentes por UF"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: acidente[0][0],  y: acidente[0][1]  },
				{ label: acidente[1][0], y: acidente[1][1]  },
				{ label: acidente[2][0], y: acidente[2][1]  },
				{ label: acidente[3][0],  y: acidente[3][1]  },
				{ label: acidente[4][0],  y: acidente[4][1]  }
			]
		}
		]
	});
	chart.render();
}

