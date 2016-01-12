define('bead/pods/components/new-myevent-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        myevents: Ember['default'].Object.create(),

        actions: {
            submit: function submit() {
                if (!this.validate()) {
                    return;
                }

                this.get('onSave')({
                    desc: this.$('#desc').val(),
                    happened: this.$('#happened').val(),
                    supervisor: this.$('#supervisor').val(),
                    dog: this.$('#dog').val()
                });
            }
        },

        validate: function validate() {
            var desc = this.$('#desc').val();
            var happened = this.$('#happened').val();
            var supervisor = this.$('#supervisor').val();
            var dog = this.$('#dog').val();

            this.set('myevents.desc', desc === '' ? 'Kötelező egy rövid leírás!' : '');
            this.set('myevents.happened', happened === '' ? 'Dátum kötelező!' : '');
            this.set('myevents.supervisor', supervisor === '' ? 'Felügyelő megadása kötelező!' : '');
            this.set('myevents.dog', dog === '' ? 'Kutya kiválasztása kötelező!' : '');

            return this.get('myevents.desc') === '' && this.get('myevents.happened') === '' && this.get('myevents.supervisor') === '';
        }
    });

});