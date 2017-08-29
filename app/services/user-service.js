angular.module('betwars.users', [

])

  .factory('UserService', function() {

    const usersBets = [
      {
        name: 'user1',
        events: [{
              _id: '1bocncu27',
              name: 'stk#1',
              matches: [
                {_id: '10', winner: 'art', score: '3:0'},
                {_id: '11', winner: 'elazer', score: '3:2'}
              ]
            },
            {
              _id: '1bocnciti',
              name: 'stk#2',
              matches: [
                {_id: '12', winner: 'rodzyn', score: '3:1'},
                {_id: '13', winner: 'elazer', score: '3:1'}
              ]
            }]
      },

      {
        name: 'user2',
        events: [{
              _id: '1bocncu27',
              name: 'stk#1',
              matches: [
                {_id: '10', winner: 'rodzyn', score: '2:3'},
                {_id: '11', winner: 'elazer', score: '3:0'}
              ]
            },
            {
              _id: '1bocnciti',
              name: 'stk#2',
              matches: [
                {_id: '12', winner: 'nerchio', score: '1:3'},
                {_id: '13', winner: 'elazer', score: '3:0'}
              ]
            }]
      },

      {
        name: 'user3',
        events: [{
              _id: '1bocncu27',
              name: 'stk#1',
              matches: [
                {_id: '10', winner: 'art', score: '3:2'},
                {_id: '11', winner: 'nerchio', score: '1:3'}
              ]
            },
            {
              _id: '1bocnciti',
              name: 'stk#2',
              matches: [
                {_id: '12', winner: 'rodzyn', score: '3:1'},
                {_id: '13', winner: 'elazer', score: '3:0'}
              ]
            }]
      },
    ];

    const addUserBets = function(userBets) {
      usersBets.push(userBets)
    };

    const getUsersBets = function() {
      return usersBets;
    }

    let myVar = 0;

    const watcher = function() {
      let time = 0;
      const watchIt = function() {
        time++
        myVar = time;
        setTimeout(watchIt, 2500)
      }
      watchIt();
    };

    return {
      addUserBets: addUserBets,
      getUsersBets: getUsersBets,
      myVar: myVar,
      watcher: watcher
    }
  });
