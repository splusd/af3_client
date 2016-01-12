import Ember from 'ember';

export default Ember.Component.extend({
    dogs: Ember.Object.create(),

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