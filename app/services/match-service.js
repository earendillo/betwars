angular.module('betwars.match', [])

  .factory('MatchService', function(){

   const details = {};

   const setPlayers = function(player1, player2) {
     details.player1 = player1;
     details.player2 = player2;
     return details
   }

   const setScore = function(score) {
     details.score = score;
     return details;
   }

   const setWinner = function(winner) {
     details.winner = winner;
     return details
   }

   const getDetails = function() {
     return details;
   }

   return {
     setPlayers: setPlayers,
     setScore: setScore,
     setWinner: setWinner,
     getDetails: getDetails
   }
  });
