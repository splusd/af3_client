import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyMyEvent(formData) {
            let myevent = this.get('model');
            myevent.setProperties(formData);
            return myevent.save().then(() => {
                this.transitionToRoute('myevents.list');
            });
        }
    }
});
