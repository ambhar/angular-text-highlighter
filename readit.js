var readit = angular.module('readit', []);
readit.controller('readCtrl', ['$scope',
    function($scope) {
        
        
        $scope.text= "Our QuickStart goal is to build and run a super simple Angular 2 application in TypeScript, and establish a development environment for the remaining documentation samples that also can be the foundation for real world applications.";
        $scope.keywords = [
        {name:"QuickStart",meaning:"jaldi start karna"},
        {name:"build",meaning:"kuch banana"},
        {name:"application",meaning:"suvidha"},
        {name:"remaining",meaning:"bacha hua"},
        ];
        $scope.indices=[];
        $scope.split = $scope.text.split(" ");
        angular.forEach($scope.keywords,function(value,index){
                if($scope.split.indexOf(value.name)>-1){
                    $scope.indices.push($scope.split.indexOf(value.name));
                }
            })

        $scope.setBGColor = function(index){

            if($scope.indices.indexOf(index)>-1){
                return { color: "red" }
            }
            else {
                return { color: "grey" }
            }
        }
        $scope.getMeaning = function(index){
             
            /*if($scope.indices.indexOf(index)>-1){
                //index of keyword in content so lets find value at that index
                var word=$filter('filter')(items, { id: id2Search  }, true)[0];

                angular.forEach($scope.keywords,function(value,ind){
                    if(word===value.name){
                        return value.meaning;
                    }
                }) 
            }
            else {
                return "asda";
            }*/
        }
        
        
            
}]);