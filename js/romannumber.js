var app = angular.module("myApp", []);

/*
app.controller ("myCtrl", function ($scope){
});
*/

app.filter("roman", function(){
	return function (myNum) {
        var tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        var units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        var ans= "";
        
        var t = Math.floor(myNum/10);
        var u = myNum%10;
        if (myNum != null && myNum > 0 && myNum < 100) {
            ans = tens[t]+units[u];
        } else {
            ans = "This only supports integer between 1 to 99";
        }
        return ans;
    };
});