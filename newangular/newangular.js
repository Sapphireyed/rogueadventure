function toggleMenu() {
  var menu = document.getElementById("header")
  if (menu.style.height !== "120px") {
   menu.style.height = "120px"
} else {
  menu.style.height = "45px"
}
}

function comment() {
  document.getElementById('commentHere').value= "";
}
    var app = angular.module('DemoApp',[]);

    app.controller('DemoController',function($scope){
        $scope.IsVisible = false;

        $scope.toggle = function(){
          if ($scope.IsVisible == false) {
            $scope.IsVisible = true;
          } else {
            $scope.IsVisible = false;
          }
        }
        $scope.classes =[
          {
            name: "Warrior",
            ability:"Every time you play a combat card gain 1 Shield.",
            upgrade: "blah",
            icon: "https://rogueadventu.re/wp-content/uploads/2020/03/choose_warrior.png",
            likes: 0,
            comments: {
              content: '"uno commento"'
            }
          },
          {
            name: "Assassin",
            ability:"Every time you play a combat card gain 1 Shield.",
            upgrade: "blah",
            icon: "https://rogueadventu.re/wp-content/uploads/2020/03/choose_assassin.png",
            likes: 0,
            comments: {
              content: '"1st comment"'
            }
          },
          {
            name: "Paladin",
            ability:"Every time you play a combat card gain 1 Shield.",
            upgrade: "blah",
            icon: "https://rogueadventu.re/wp-content/uploads/2020/03/choose_paladin.png",
            likes: 0,
            comments: {
            content: '"first comment"'
            }
          },
        ]
        $scope.addLike = function() {
          this.class.likes += 1;
        }
        $scope.addComment = function(){
          this.class.comments.content = '"' + this.newComment + '"'  + '\n\n' + this.class.comments.content
        }
        });
