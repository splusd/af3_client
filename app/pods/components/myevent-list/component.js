import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteMyEvent(myevent) {
            myevent.deleteRecord();
            myevent.save();
        }
    }
});
