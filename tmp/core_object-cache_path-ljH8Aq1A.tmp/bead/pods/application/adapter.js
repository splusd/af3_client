define('bead/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'https://alkfejlrest-splusd.c9users.io',
        namespace: ''
    });

});