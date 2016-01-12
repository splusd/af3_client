define('bead/pods/todo/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var TodoModel = DS['default'].Model.extend({
    what: DS['default'].attr('string'),
    where: DS['default'].attr('string'),

    user: DS['default'].belongsTo('user', { async: true })
  });

  exports['default'] = TodoModel;

});