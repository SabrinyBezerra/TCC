app.factory("systemService", function($http){
    
    var _getUf = function() {
          return $http.get('http://127.0.0.1:5000/api/UF');
};
     
    return {
        getUf: _getUf
    };
    
    var _getBR = function() {
        return $http.get('http://127.0.0.1:5000/api/BR');
};
   
  return {
      getUf: _getBR
  };
  
});
