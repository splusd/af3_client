define('bead/router', ['exports', 'ember', 'bead/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {

    this.route('dogs', function () {
      this.route('list');
      this.route('new');
    });

    this.route('myevents', function () {
      this.route('list');
      this.route('new');
      this.route('edit', { path: '/edit/:myevent_id' });
    });
  });

  exports['default'] = Router;

});