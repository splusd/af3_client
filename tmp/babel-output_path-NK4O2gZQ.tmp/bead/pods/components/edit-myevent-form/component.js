import Ember from 'ember';

export default Ember.Component.extend({
    myevents: Ember.Object.create(),

    actions: {
        submit: function submit() {
            if (!this.validate()) {
                return;
            }

            this.get('onSave')({
                desc: this.$('#desc').val(),
                happened: this.$('#happened').val(),
                supervisor: this.$('#supervisor').val()
            });
        }
    },

    validate: function validate() {
        var desc = this.$('#desc').val();
        var happened = this.$('#happened').val();
        var supervisor = this.$('#supervisor').val();

        this.set('myevents.desc', desc === '' ? 'Kötelező egy rövid leírás!' : '');
        this.set('myevents.happened', happened === '' ? 'Dátum kötelező!' : '');
        this.set('myevents.supervisor', supervisor === '' ? 'Felügyelő megadása kötelező!' : '');

        return this.get('myevents.desc') === '' && this.get('myevents.happened') === '' && this.get('myevents.supervisor') === '';
    }
});