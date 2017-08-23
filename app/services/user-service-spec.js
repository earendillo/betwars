'use strict';

describe('betwars.users', function() {
  beforeEach(module('betwars.users'));

  describe('#UserService', function() {
    it('should return user list containing one user', inject(function(UserService) {
      expect(UserService.getUsers().length).to.equal(1);
    }));
  });
});
