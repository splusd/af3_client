define('bead/pods/user/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        surname: DS['default'].attr('string'),
        forename: DS['default'].attr('string'),
        username: DS['default'].attr('string'),

        todos: DS['default'].hasMany('todo', { async: true })
    });

});