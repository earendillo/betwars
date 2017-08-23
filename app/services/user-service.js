angular.module('betwars.users', [])

  .service('UserService', function() {

    const users = ['user'];



    return {
      getUsers: function() {
        return users;
      }
    };
  });
