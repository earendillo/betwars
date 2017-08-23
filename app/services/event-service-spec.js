'use strict';

describe('betwars.event', function() {
  beforeEach(module('betwars.event'));
  beforeEach(inject(function($injector) {
    service = $injector.get('EventService');
  }));

  describe('#EventService', function() {
    it('should exist', inject(function(service) {

      expect(service).not.to.be.undefined;
    }));
  });

  describe('#EventService.getEvents()', function() {
    it('should return an object containing events', inject(function(EventService) {
      expect(EventService.getEvents()).to.be.an('object');
    }));
  });

  describe('Event object', function() {
    it('should contain player1, player2, score and winner properties', inject(function(EventService) {
      var events = EventService.getEvents();
      expect(events['someId']).to.have.property('player1');
      expect(events['someId']).to.have.property('player2');
      expect(events['someId']).to.have.property('score');
      expect(events['someId']).to.have.property('winner');
    }));

  });
});
