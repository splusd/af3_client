import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteMyEvent: function deleteMyEvent(myevent) {
            myevent.deleteRecord();
            myevent.save();
        }
    }
});