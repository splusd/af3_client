import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newMyEvent(formData) {
            var thiss = this;
            var myevent = this.store.createRecord(
                'myevent', 
                {
                    desc : formData.desc,
                    happened : formData.happened,
                    supervisor : formData.supervisor
                }
            );

            this.store.queryRecord('dog', {filter: {nickname: formData.dog}}).then(function(found){
                myevent.set('dog', found[0]);
                myevent.save();
                thiss.transitionToRoute('myevents.list');
            });
        }
    }
});
