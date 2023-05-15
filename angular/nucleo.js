angular.module('MainApp',[]);

function controladorPrincipal($scope,$http){
    $scope.docentes = {};
    $scope.newDocente = {};
    $http.get('/api/docentes').success(function(data){
        $scope.docentes = data;
        console.log(data);
    }).error(function(data){
        console.log('Error: '+data);
    });
//Agregar una nuevo docente
$scope.registrarDocente = function(){
    $http.post('/api/docente', $scope.newDocente)
        .success(function(data){
            $scope.newDocente = {}; //borra los datos del formulario
            $scope.docentes = data;
        })
        .error(function(data){
            console.log('Error: '+ data);
        });
};

//Tomar el objeto seleccionado de la tabla
$scope.selectDocente = function(docente){
    $scope.newDocente = docente;
    $scope.selected = true;
    console.log($scope.newDocente, $scope.selected);
    };

//editar un docente
$scope.modificarDocente = function(newDocente){
    $http.put('/api/docente/' + $scope.newDocente._id, $scope.newDocente)
        .success(function(data){
            $scope.newDocente = {};
            $scope.docentes = data;
            $scope.selected = false;
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
    };

//elimina un docente
    $scope.borrarDocente = function(newDocente){
        $http.delete('/api/docente/' + $scope.newDocente._id)
            .success(function(data){
                $scope.newDocente  = {};
                $scope.docentes    = data;
                $scope.selected = false;
            })
            .error(function(data){
                console.log('Error: '+data);
            });
    };
}