define('bead/pods/todos/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
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

});