define('bead/pods/dog/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        nickname: DS['default'].attr('string'),
        breed: DS['default'].attr('string'),
        gender: DS['default'].attr('string'),
        age: DS['default'].attr('string'),
        broughtin: DS['default'].attr('string'),
        broughtby: DS['default'].attr('string'),

        myevents: DS['default'].hasMany('myevent', { async: true })
    });

});