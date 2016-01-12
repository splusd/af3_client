import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        deleteTodo: function deleteTodo(todo) {
            todo.deleteRecord();
            todo.save();
        }
    }
});