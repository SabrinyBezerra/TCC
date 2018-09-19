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
    
    /* Acidentes Labels */
    let acidentesLabel = []
    for(ac in acidente){
        acidentesLabel.push(acidente[ac][0])
        console.log(acidentesLabel[ac]);
    }

    /*Acidentes data*/ 
    let acidentesData = []
    for(ac in acidente){
        acidentesData.push(acidente[ac][1])
    }

    console.log('OK')
    let labels = acidentesLabel
    let data = acidentesData
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
                   fontSize: 28,
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
