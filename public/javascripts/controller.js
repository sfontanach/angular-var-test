/* controller */

function UserCtrl($scope) {
    $scope.users = users;
}


function User2Ctrl($scope, $http) {
    $http.get('/solution-two/data').success(function(data) {
        $scope.users = data;
    })
}

function User3Ctrl($scope) {
    ;
}