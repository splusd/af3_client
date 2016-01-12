define('bead/pods/components/edit-todo-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        todos: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    what: this.$('#what').val(),
                    where: this.$('#where').val()
                });
            }
        },

        validate: function validate() {
            var what = this.$('#what').val();
            var where = this.$('#where').val();

            this.set('todos.what', what === '' ? 'Mit? kötelező' : '');
            this.set('todos.where', where === '' ? 'Helszín kötelező' : '');

            return this.get('todos.what') === '' && this.get('todos.where') === '';
        }
    });

});