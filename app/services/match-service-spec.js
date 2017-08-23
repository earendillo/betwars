'use strict';

describe('betwars.match', function() {
  beforeEach(module('betwars.match'));

  describe('#MatchService', function() {
    it('should return object containing match details', inject(function(MatchService) {
      expect(MatchService).to.be.an('object');
    }));

    describe('#MatchService.setPlayers()', function() {
      it('should set player1 and player2 names', inject(function(MatchService) {

        var match = MatchService.setPlayers('art', 'rodzyn');
        expect(match.player1).to.equal('art');
        expect(match.player2).to.equal('rodzyn');

        match = MatchService.setPlayers('elazer', 'nerchio');
        expect(match.player1).to.equal('elazer');
        expect(match.player2).to.equal('nerchio');

      }));
    });

    describe('#MatchService.setScore()', function() {
      it('should set score of the match', inject(function(MatchService) {
        var match = MatchService.setScore('3:1');
        expect(match.score).to.equal('3:1');

        match = MatchService.setScore('2:3');
        expect(match.score).to.equal('2:3');
      }));
    });

    describe('#MatchService.setWinner()', function() {
      it('should set winner of the match', inject(function(MatchService) {
        var match = MatchService.setWinner('art');
        expect(match.winner).to.equal('art');

        var match = MatchService.setWinner('nerchio');
        expect(match.winner).to.equal('nerchio');

      }));
    });
  });
});
