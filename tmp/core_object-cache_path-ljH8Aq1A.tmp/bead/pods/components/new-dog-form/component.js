define('bead/pods/components/new-dog-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        dogs: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    nickname: this.$('#nickname').val(),
                    breed: this.$('#breed').val(),
                    gender: this.$('#gender').val(),
                    age: this.$('#age').val(),
                    broughtin: this.$('#broughtin').val(),
                    broughtby: this.$('#broughtby').val()
                });
            }
        },

        validate: function validate() {
            var nickname = this.$('#nickname').val();

            this.set('dogs.nickname', nickname === '' ? 'Nicknév megadása kötelező' : '');

            return this.get('dogs.nickname') === '';
        }
    });

});