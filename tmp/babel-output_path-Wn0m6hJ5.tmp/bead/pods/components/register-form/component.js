import Ember from 'ember';

export default Ember.Component.extend({
    users: Ember.Object.create(),

    actions: {
        submit: function submit() {
            if (!this.validate()) {
                return;
            }

            this.get('onSave')({
                surname: this.$('#surname').val(),
                forename: this.$('#forename').val(),
                username: this.$('#username').val()
            });
        }
    },

    validate: function validate() {
        var surname = this.$('#surname').val();
        var forename = this.$('#forename').val();
        var username = this.$('#username').val();

        this.set('users.surname', surname === '' ? 'Név kötelező' : '');
        this.set('users.forename', forename === '' ? 'Név kötelező' : '');
        this.set('users.username', username === '' ? 'Felhasználó név kötelező' : '');

        return this.get('users.surname') === '' && this.get('users.forename') === '' && this.get('users.username') === '';
    }
});