define('bead/pods/dogs/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newDog: function newDog(formData) {
                var dog = this.store.createRecord('dog', Object.assign(formData));
                dog.save();
                this.transitionToRoute('myevents.list');
            }
        }
    });

});