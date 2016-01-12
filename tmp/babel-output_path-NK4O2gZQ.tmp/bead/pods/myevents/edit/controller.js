import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        modifyMyEvent: function modifyMyEvent(formData) {
            var _this = this;

            var myevent = this.get('model');
            myevent.setProperties(formData);
            return myevent.save().then(function () {
                _this.transitionToRoute('myevents.list');
            });
        }
    }
});