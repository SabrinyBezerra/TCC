

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

function getUF(){
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:5000/api/UF",
        success: function(data) {
          console.log('SUCESSO UF')
          criarGrafico1(data)
          getBR()
        },
      });
}

function getBR(){
    console.log('OK')
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:5000/api/BR",
        success: function(data) {
            console.log(data)
            criarGrafico2(data)
            getDiaSemana()
        },
      });
}

function getDiaSemana(){
    console.log('OK')
    $.ajax({
        type:"GET",
        url:"http://127.0.0.1:5000/api/dia",
        success: function(data) {
            console.log(data)
            criarGrafico3(data)
        },
      });
}



//mostra os dados consultados na tela 
function monstrarAcidente(){
    //window.open("pg2.html");
    //console.log(acidente);

    getUF()
    
    //document.getElementById('textAcidente').innerHTML = acidente;
}


 function criarGrafico1 (acidente) {
    console.log('GRAFICO 1')
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
				{ label: acidente[1][0], y: acidente[1][1]   },
				{ label: acidente[2][0], y: acidente[2][1]   },
				{ label: acidente[3][0],  y: acidente[3][1]  },
                { label: acidente[4][0],  y: acidente[4][1]  },
                { label: acidente[5][0],  y: acidente[5][1]  },
                { label: acidente[6][0],  y: acidente[6][1]  },
                { label: acidente[7][0],  y: acidente[7][1]  },
                { label: acidente[8][0],  y: acidente[8][1]  },
                { label: acidente[9][0],  y: acidente[9][1]  },
                { label: acidente[10][0],  y: acidente[10][1]  },
                { label: acidente[11][0],  y: acidente[11][1]  },
                { label: acidente[12][0],  y: acidente[12][1]  },
                { label: acidente[13][0],  y: acidente[13][1]  },
                { label: acidente[14][0],  y: acidente[14][1]  },
                { label: acidente[15][0],  y: acidente[15][1]  },
                { label: acidente[16][0],  y: acidente[16][1]  },
                { label: acidente[17][0],  y: acidente[17][1]  },
                { label: acidente[18][0],  y: acidente[18][1]  },
                { label: acidente[19][0],  y: acidente[19][1]  },
                { label: acidente[20][0],  y: acidente[20][1]  },
                { label: acidente[21][0],  y: acidente[21][1]  },
                { label: acidente[22][0],  y: acidente[22][1]  },
                { label: acidente[23][0],  y: acidente[23][1]  },
                { label: acidente[24][0],  y: acidente[24][1]  },
                { label: acidente[25][0],  y: acidente[25][1]  },
                { label: acidente[26][0],  y: acidente[26][1]  }
			]
		}
		]
	});
    chart.render();
    
    chart = new CanvasJS.Chart("chartContainer2", {
		title:{
			text: "Número de acidentes por UF"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "pie",
			dataPoints: [
				{ label: acidente[0][0],  y: acidente[0][1]  },
				{ label: acidente[1][0], y: acidente[1][1]   },
				{ label: acidente[2][0], y: acidente[2][1]   },
				{ label: acidente[3][0],  y: acidente[3][1]  },
                { label: acidente[4][0],  y: acidente[4][1]  },
                { label: acidente[5][0],  y: acidente[5][1]  },
                { label: acidente[6][0],  y: acidente[6][1]  },
                { label: acidente[7][0],  y: acidente[7][1]  },
                { label: acidente[8][0],  y: acidente[8][1]  },
                { label: acidente[9][0],  y: acidente[9][1]  },
                { label: acidente[10][0],  y: acidente[10][1]  },
                { label: acidente[11][0],  y: acidente[11][1]  },
                { label: acidente[12][0],  y: acidente[12][1]  },
                { label: acidente[13][0],  y: acidente[13][1]  },
                { label: acidente[14][0],  y: acidente[14][1]  },
                { label: acidente[15][0],  y: acidente[15][1]  },
                { label: acidente[16][0],  y: acidente[16][1]  },
                { label: acidente[17][0],  y: acidente[17][1]  },
                { label: acidente[18][0],  y: acidente[18][1]  },
                { label: acidente[19][0],  y: acidente[19][1]  },
                { label: acidente[20][0],  y: acidente[20][1]  },
                { label: acidente[21][0],  y: acidente[21][1]  },
                { label: acidente[22][0],  y: acidente[22][1]  },
                { label: acidente[23][0],  y: acidente[23][1]  },
                { label: acidente[24][0],  y: acidente[24][1]  },
                { label: acidente[25][0],  y: acidente[25][1]  },
                { label: acidente[26][0],  y: acidente[26][1]  }
			]
		}
		]
	});
    
    chart.render();
}

function criarGrafico2 (acidente) {
   console.log('GRAFICO 2')
    let acidente2 = []

   for(ac in acidente){
       let aci = { label:acidente[ac][0] , y:acidente[ac][1] }
       acidente2.push(aci);
   }

	var chart = new CanvasJS.Chart("chartContainer3", {
		title:{
			text: "Número de acidentes por BR"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "line",
			dataPoints: acidente2
		}
		]
    });
    
    chart.render();

    chart = new CanvasJS.Chart("chartContainer4", {
		title:{
			text: "Número de acidentes por BR"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: acidente2
		}
		]
	});
    
    chart.render();
    
    chart = new CanvasJS.Chart("chartContainer5", {
		title:{
			text: "Número de acidentes por BR"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "pie",
			dataPoints: acidente2
		}
		]
	});
    
    chart.render();
}

function criarGrafico3 (acidente) {
    console.log('GRAFICO 3')
     let acidente2 = []
 
    for(ac in acidente){
        let aci = { label:acidente[ac][0] , y:acidente[ac][1] }
        acidente2.push(aci);
    }
     
     let chart = new CanvasJS.Chart("chartContainer6", {
         title:{
             text: "Número de acidentes por Dia"              
         },
         data: [              
         {
             // Change type to "doughnut", "line", "splineArea", etc.
             type: "column",
             dataPoints: acidente2,
             options: {
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                }}
         }
         ]
     });
     
     chart.render();
     
     chart = new CanvasJS.Chart("chartContainer7", {
         title:{
             text: "Número de acidentes por Dia"              
         },
         data: [              
         {
             // Change type to "doughnut", "line", "splineArea", etc.
             type: "pie",
             dataPoints: acidente2
         }
         ]
     });
     
     chart.render();
 }
