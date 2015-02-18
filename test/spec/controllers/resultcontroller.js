'use strict';

describe('Controller: ResultcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('itechApp'));

  var ResultcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultcontrollerCtrl = $controller('ResultcontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
