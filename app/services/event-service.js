angular.module('betwars.event', [
  'betwars.match'
])

  .factory('EventService', [function() {
    const events =
      [{
        _id: '1bocncu27',
        name: 'stk#1',
        matches: [
          {_id: '10', player1: 'art', player2: 'rodzyn', winner: 'art', score: '3:0'},
          {_id: '11', player1: 'elazer', player2: 'nerchio'}
        ]
      },
      {
        _id: '1bocnciti',
        name: 'stk#2',
        matches: [
          {_id: '12', player1: 'rodzyn', player2: 'nerchio'},
          {_id: '13', player1: 'elazer', player2: 'art'}
        ]
      }];

    const addEvent = function(event) {
      events.push(event);
      console.log('event has been added')
    }

    const getEvents = function() {
      return events;
    }

    return {
      addEvent: addEvent,
      getEvents: getEvents,
    }
  }]);
