QUnit.module('JSHint - pods/dog');
QUnit.test('pods/dog/model.js should pass jshint', function(assert) { 
  assert.ok(false, 'pods/dog/model.js should pass jshint.\npods/dog/model.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/dog/model.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
