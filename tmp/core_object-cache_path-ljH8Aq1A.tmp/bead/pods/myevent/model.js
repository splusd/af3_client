define('bead/pods/myevent/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var MyEventModel = DS['default'].Model.extend({
    desc: DS['default'].attr('string'),
    happened: DS['default'].attr('string'),
    supervisor: DS['default'].attr('string'),

    dog: DS['default'].belongsTo('dog', { async: true })
  });

  exports['default'] = MyEventModel;

});