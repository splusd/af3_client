define('bead/pods/signup/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newUser: function newUser(formData) {
                var user = this.store.createRecord('user', Object.assign(formData));
                user.save();
                this.transitionToRoute('todos.list');
            }
        }
    });

});