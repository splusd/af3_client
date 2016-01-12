QUnit.module('JSHint - pods/myevent');
QUnit.test('pods/myevent/model.js should pass jshint', function(assert) { 
  assert.ok(false, 'pods/myevent/model.js should pass jshint.\npods/myevent/model.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/myevent/model.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/myevent/model.js: line 11, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
});
