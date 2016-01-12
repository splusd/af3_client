define('bead/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'https://bead2-rest-leviouss.c9users.io',
        namespace: ''
    });

});