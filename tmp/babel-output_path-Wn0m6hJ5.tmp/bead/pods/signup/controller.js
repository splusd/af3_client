import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newUser: function newUser(formData) {
            var user = this.store.createRecord('user', Object.assign(formData));
            user.save();
            this.transitionToRoute('todos.list');
        }
    }
});