import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  
  this.route('dogs', function() {
    this.route('list');
    this.route('new');
  });
  
  this.route('myevents', function() {
    this.route('list');
    this.route('new');
    this.route('edit', {path: '/edit/:myevent_id'});
  });

});

export default Router;
