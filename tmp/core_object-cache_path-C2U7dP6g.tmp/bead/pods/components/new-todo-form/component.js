define('bead/pods/components/new-todo-form/component', ['exports', 'ember'], function (exports, Ember) {

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
                    where: this.$('#where').val(),
                    user: this.$('#user').val()
                });
            }
        },

        validate: function validate() {
            var what = this.$('#what').val();
            var where = this.$('#where').val();
            var user = this.$('#user').val();

            this.set('todos.what', what === '' ? 'Mit? kötelező' : '');
            this.set('todos.where', where === '' ? 'Helszín kötelező' : '');
            this.set('todos.user', where === '' ? 'Felhasználó kötelező' : '');

            return this.get('todos.what') === '' && this.get('todos.where') === '' && this.get('todos.user') === '';
        }
    });

});