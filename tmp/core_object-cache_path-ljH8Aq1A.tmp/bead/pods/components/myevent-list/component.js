define('bead/pods/components/myevent-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteMyEvent: function deleteMyEvent(myevent) {
                myevent.deleteRecord();
                myevent.save();
            }
        }
    });

});