import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
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

export default Router;