app.controller('systemCtrl', function($scope, systemService){
    
    $scope.title = "DEU CERTO OUUUUUUUUUUUU";
    var acidente;

    $scope.verifica = function(){
    
        systemService.getUf().
        then(function successCalback(response){
            acidente = response.data;
            criarGrafico()
            console.log('OK',acidente)
        },
        function errorCallback(response){
            console.error('Erro ' + response);
        });
    }
    
    /*
    criarGrafico = function(){
        $scope.labels = [
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
        ];
        $scope.data = [
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
        ];
    }
    */
   criarGrafico = function(){
    
   }

});