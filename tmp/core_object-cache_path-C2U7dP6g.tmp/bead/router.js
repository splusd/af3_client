define('bead/router', ['exports', 'ember', 'bead/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('about', { path: '/about' });

    this.route('todos', function () {
      this.route('list');
      this.route('new');
      this.route('edit', { path: '/edit/:todo_id' });
    });

    this.route('signup');
  });

  exports['default'] = Router;

});