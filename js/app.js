var app = angular.module("myApp", []);

app.controller("myCtrl", ['$scope', function ($scope) {
	/* Initialise properties */
	$scope.displayAnswer = 'hola!';
    $scope.spice = 'very';
   //scope.answer = 2;
   $scope.guessNumber = 0;
    $scope.answer = Math.floor(Math.random() * 100) + 1;
   $scope.messages = ['Start Guessing'];       // 'Guess Higher',
        //'Guess Lower',
        //'You got it',
        //'show number ufnction'
//    ];
    
    
    scope.randomNum = function() {
        $scope.guessNumber = Math.floor(Math.random() * 100) + 1;
         $scope.answer = $scope.guessNumber; 
    }
    
    scope.checkGuess = function() {
       if ($scope.guessNumber > $scope.gNum) 
    }
    
    scope.showGuess = function() {
        $scope.answer = $scope.guessNumber; 
    }
    
}]);
    
    
    /*
    $scope.messages = [
        {msg: 'Start Guessing'},
        {msg: 'Guess Higher'},
        {msg: 'Guess Lower'},
        {msg: 'You got it'},
        {msg: 'show number ufnction'}
    ];
    */
    
    //emptyField: function() {
      //  if ($scope.$guessNumber == "") {
        //    $scope.$text = $scope.messages[2];
        //}
    //}
    /*
    if ($parent.guessNumber == "")
        {
            $text = $scope.messages.msg[0]
        }
    */
    
    
    
    
    
    
    
    
    
    
    
    /*
    $scope.dispOption = 0;
	$scope.appts = [{dte: '23 March', what2do: 'Lecture'},
									{dte: '24 March', what2do: 'lab tasks'}];

	// Define methods 
	$scope.toggleOption = function () {
		if ($scope.dispOption == 0)	
			$scope.dispOption = 1;
		else
			$scope.dispOption = 0;
	};
	
	// child models are accessible under $scope 
	$scope.add = function () {
		$scope.appts.push({dte: $scope.dateInput, what2do: $scope.todoInput});
	};
	
	$scope.del = function () {
		if ($scope.rec2del >= 0) {
			$scope.appts.splice($scope.rec2del, 1);
		}
	};
    */