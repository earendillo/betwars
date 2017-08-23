angular.module('myApp', [
  'betwars.event'
])

  .controller('betwarsCtrl', ['$scope', 'EventService', function($scope, EventService) {
    let events = EventService.getEvents();

    $scope.events = events;
    $scope.eventName = 'Event name';
    $scope.matches = [];

    $scope.addMatch = function() {
      $scope.matches.push({'player1': $scope.player1, 'player2': $scope.player2})
      $scope.player1 = '';
      $scope.player2 = '';
    }

    $scope.createEvent = function() {
      if ($scope.eventName != 'Event name') {

        let event = {
          _id: Math.round(Date.now()/701).toString(),
          name: $scope.eventName,
          matches: $scope.matches
        }
        EventService.addEvent(event);
        $scope.matches = [];
        $scope.eventName = 'Event name';
      }
    }
  }])

  .controller('TestCtrl', ['$scope', 'EventService', function($scope, EventService) {
    console.log('test ctrl')
    let events = EventService.getEvents();
    $scope.events = events;
  }]);
