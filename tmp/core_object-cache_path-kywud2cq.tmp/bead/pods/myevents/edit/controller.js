define('bead/pods/myevents/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            modifyMyEvent: function modifyMyEvent(formData) {
                var _this = this;

                var myevent = this.get('model');
                myevent.setProperties(formData);
                return myevent.save().then(function () {
                    _this.transitionToRoute('myevents.list');
                });
            }
        }
    });

});