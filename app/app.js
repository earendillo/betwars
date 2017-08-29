angular.module('myApp', [
  'betwars.event',
  'betwars.users'
])

  .controller('betwarsCtrl', ['$scope', 'EventService', function($scope, EventService) {

    let events = EventService.getEvents();
    $scope.events = events;
    $scope.eventName = 'Event name';
    $scope.matches = [];


    $scope.addMatch = function() {
      $scope.matches.push({_id: Date.now().toString(32),player1: $scope.player1, player2: $scope.player2})
      $scope.player1 = '';
      $scope.player2 = '';
    }

    $scope.createEvent = function() {
      if ($scope.eventName != 'Event name') {

        let event = {
          name: $scope.eventName,
          _id: Date.now().toString(32),
          matches: $scope.matches
        }
        EventService.addEvent(event);
        $scope.matches = [];
        $scope.eventName = 'Event name';
      }
    }
  }])

  .controller('UserBetsCtrl', ['$scope', 'EventService', 'UserService', function($scope, EventService, UserService) {

    let events = EventService.getEvents();
    $scope.events = events;

    $scope.userBets = [];
    $scope.user = {};

    $scope.placeBet = function() {

      let bet = {
        _id: this.match._id,
        winner: $scope.user.bet.winner,
        score: $scope.user.bet.score
      };
      console.log(events[0]._id);
      $scope.userBets.push(bet);

      $scope.user.bet.winner='';
      $scope.user.bet.score='';
      console.log($scope.userBets);
    };

    $scope.sendUserBets = function(){
      let user = {
        name: $scope.userName,
        bets: $scope.userBets
      }
      if ($scope.userBets.length>0) {
        UserService.addUserBets(user);
        $scope.userBets = [];
        $scope.userName = '';
      }
    }
  }])

  .controller('ResultsCtrl', ['$scope', 'EventService', 'UserService', function($scope, EventService, UserService) {

    let events = EventService.getEvents();
    $scope.events = events;

    let usersBets = UserService.getUsersBets();
    $scope.usersBets = usersBets;


     usersBets.forEach(function(user){
         console.log('user', user);
         let userEvents = user.events;

         userEvents.forEach(function(bet) {

           let userBets = bet.matches;
           let matchResults = checkId(bet._id, events).matches;

           userBets.forEach(function(result) {
             console.log(checkId(result._id, matchResults).winner === result.winner)
             if (checkId(result._id, matchResults).winner === result.winner) console.log(user.name, '+1');
             if (checkId(result._id, matchResults).score === result.score) console.log(user.name, '+2');
           });
         });
       });

    function checkId(id, ary) {
     return ary.find(function(element) {
       return element._id === id;
     });
    };
  }]);
