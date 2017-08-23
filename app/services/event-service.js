angular.module('betwars.event', [
  'betwars.match'
])

  .factory('EventService', ['MatchService', function(MatchService) {
    const events =
      [{
        _id: '241341234',
        name: 'stk#1',
        matches: [
          {player1: 'art', player2: 'rodzyn'},
          {player1: 'elazer', player2: 'nerchio'}
        ]
      },
      {
        _id: '123321123',
        name: 'stk#2',
        matches: [
          {player1: 'rodzyn', player2: 'nerchio', score: '3:1', winner: 'rodzyn'},
          {player1: 'elazer', player2: 'art'}
        ]
      }];


    const addEvent = function(event) {
      events.push(event);
      console.log('event has been added')
    }
    // const addMatch = function(player1, player2) {
    //   events.matches
    //   .push(MatchService.setPlayers(player1, player2);
    // }

    const getEvents = function() {
      return events;
    }

    return {
      addEvent: addEvent,
      getEvents: getEvents,

    }
  }]);
