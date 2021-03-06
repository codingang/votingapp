'use strict';

describe('Directive: myPolls', function () {

  // load the directive's module and view
  beforeEach(module('workspaceApp'));
  beforeEach(module('app/main/myPolls/myPolls.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-polls></my-polls>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the myPolls directive');
  }));
});