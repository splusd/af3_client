import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyTodo: function modifyTodo(formData) {
            var _this = this;

            var todo = this.get('model');
            todo.setProperties(formData);
            return todo.save().then(function () {
                _this.transitionToRoute('todos.list');
            });
        }
    }
});