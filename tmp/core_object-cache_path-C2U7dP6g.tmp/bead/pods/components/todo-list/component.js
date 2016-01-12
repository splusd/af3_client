define('bead/pods/components/todo-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteTodo: function deleteTodo(todo) {
                todo.deleteRecord();
                todo.save();
            }
        }
    });

});