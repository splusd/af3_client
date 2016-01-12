import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newDog(formData) {
            var dog = this.store.createRecord(
                'dog', 
                Object.assign(
                    formData
                )
            );
            dog.save();
            this.transitionToRoute('myevents.list');
        }
    }
});
