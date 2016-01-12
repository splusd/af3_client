import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newTodo: function newTodo(formData) {
            var thiss = this;
            var todo = this.store.createRecord('todo', {
                what: formData.what,
                where: formData.where
            });

            this.store.queryRecord('user', { filter: { username: formData.user } }).then(function (found) {
                todo.set('user', found[0]);
                todo.save();
                thiss.transitionToRoute('todos.list');
            });
        }
    }
});