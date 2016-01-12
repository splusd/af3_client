QUnit.module('JSHint - pods/myevents/new');
QUnit.test('pods/myevents/new/controller.js should pass jshint', function(assert) { 
  assert.ok(false, 'pods/myevents/new/controller.js should pass jshint.\npods/myevents/new/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/myevents/new/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/myevents/new/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors'); 
});
