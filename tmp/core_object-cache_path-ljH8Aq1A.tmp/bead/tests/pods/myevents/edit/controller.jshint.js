define('bead/tests/pods/myevents/edit/controller.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/myevents/edit');
  QUnit.test('pods/myevents/edit/controller.js should pass jshint', function(assert) { 
    assert.ok(false, 'pods/myevents/edit/controller.js should pass jshint.\npods/myevents/edit/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/myevents/edit/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/myevents/edit/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/myevents/edit/controller.js: line 6, col 13, \'let\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/myevents/edit/controller.js: line 8, col 41, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n5 errors'); 
  });

});