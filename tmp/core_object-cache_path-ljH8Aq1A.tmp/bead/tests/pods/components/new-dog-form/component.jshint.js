define('bead/tests/pods/components/new-dog-form/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - pods/components/new-dog-form');
  QUnit.test('pods/components/new-dog-form/component.js should pass jshint', function(assert) { 
    assert.ok(false, 'pods/components/new-dog-form/component.js should pass jshint.\npods/components/new-dog-form/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/new-dog-form/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/components/new-dog-form/component.js: line 7, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/components/new-dog-form/component.js: line 23, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n4 errors'); 
  });

});