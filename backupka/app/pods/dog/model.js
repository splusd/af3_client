import DS from 'ember-data';

export default DS.Model.extend({
    nickname: DS.attr('string'),
    breed: DS.attr('string'),
    gender: DS.attr('string'),
    age: DS.attr('string'),
    broughtin: DS.attr('string'),
    broughtby: DS.attr('string'),
    
    myevents: DS.hasMany('myevent', { async: true })
});
