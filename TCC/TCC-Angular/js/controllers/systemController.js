app.controller('systemCtrl', function($scope, systemService){
    
    let acidente;
    let ctx = document.getElementById("myChart").getContext('2d');
    $scope.requisicao = false;
   
    $scope.verifica = function(){ 
        console.log('OKK');
        $scope.requisicao = true;
        systemService.getUf().
        then(function successCalback(response){
            acidente = response.data;
            $scope.requisicao = false;
            $scope.criaGrafico()
        },
        function errorCallback(response){
            console.error('Erro ' + response);
        });
    } 
   
   $scope.criaGrafico = function(){ 
    
    console.log('OK')
    let labels = [
        acidente[0][0],  
			acidente[1][0], 
			acidente[2][0], 
		    acidente[3][0],  
            acidente[4][0],  
            acidente[5][0],  
            acidente[6][0],  
            acidente[7][0],  
            acidente[8][0],  
            acidente[9][0], 
            acidente[10][0],  
            acidente[11][0], 
            acidente[12][0], 
            acidente[13][0],  
            acidente[14][0],  
            acidente[15][0],  
            acidente[16][0],  
            acidente[17][0],  
            acidente[18][0],  
            acidente[19][0],  
            acidente[20][0],  
            acidente[21][0],  
            acidente[22][0],  
            acidente[23][0],  
            acidente[24][0],  
            acidente[25][0],  
            acidente[26][0] 
    ]

    let data = [
        acidente[0][1],  
			acidente[1][1], 
			acidente[2][1], 
		    acidente[3][1],  
            acidente[4][1],  
            acidente[5][1],  
            acidente[6][1],  
            acidente[7][1],  
            acidente[8][1],  
            acidente[9][1], 
            acidente[10][1],  
            acidente[11][1], 
            acidente[12][1], 
            acidente[13][1],  
            acidente[14][1],  
            acidente[15][1],  
            acidente[16][1],  
            acidente[17][1],  
            acidente[18][1],  
            acidente[19][1],  
            acidente[20][1],  
            acidente[21][1],  
            acidente[22][1],  
            acidente[23][1],  
            acidente[24][1],  
            acidente[25][1],  
            acidente[26][1]
        
    ]
        let myChart = new Chart(ctx, {
            type: 'pie',
            data: {
              labels: labels,
              datasets: [{
                backgroundColor: [
                  "#2ecc71",
                  "#3498db",
                  "#95a5a6",
                  "#9b59b6",
                  "#f1c40f",
                  "#CD853F",
                  "#34495e",
                  "#FF1493",
                  "#FF0000",
                  "#7CFC00",
                  "#00FFFF",
                  "#8A2BE2",
                  "#FFFF00",
                  "#63B8FF",
                  "#CD3333",
                  "#EE7600",
                  "#8B2252",
                  "#76EE00",
                  "#CD5555",
                  "#8B0000",
                  "#008B8B",
                  "#8B008B",
                  "#CD2626",
                  "#8B4726",
                  "#90EE90",
                  "#FF4500",
                  "#A020F0"
                ],
                data: data
              }]
            },
            options: {
                title: {
                   display: true,
                   fontsize: 14,
                   text: 'Número de acidentes por UF'
               },
               legend: {
                   display: true,
                   position: 'bottom',
       
               },
               responsive: true
           }
          });
   }

});
