var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.spice = 'very';
    $scope.guessNumber = '';
    $scope.disOption = 0;
    $scope.randNum = Math.floor(Math.random() * 100) + 1;
    //$scope.guessNumber = Math.floor(Math.random() * 100) + 1;
    //$scope.displayAnswer = '';
    //$scope.displayAnswer = Math.floor(Math.random() * 100) + 1;
    
    
    $scope.chiliSpicy = function () {
        $scope.spice = 'chili';
    }
    
    $scope.jalapenoSpicy = function () {
        $scope.spice = 'jalapeno';
    }
    
    $scope.showGuess = function () {
        $scope.displayAnswer = $scope.randNum;
    }
    
    $scope.checkGuess = function () {
        if ($scope.guessNumber > $scope.randNum) {
            $scope.disOption = 1;
        }
        else if ($scope.guessNumber < $scope.randNum) {
            $scope.disOption = 2;
        }
        else if ($scope.guessNumber == $scope.randNum) {
            $scope.disOption = 3;
        } else {
            $scope.disOption = 0;
        }
    }
    
    $scope.startNewGame = function () {
        $scope.guessNumber = '';
        $scope.disOption = 0;
        $scope.randNum = Math.floor(Math.random() * 100) + 1;
        $scope.displayAnswer = '';
    }
});