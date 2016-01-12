import DS from 'ember-data';

var MyEventModel = DS.Model.extend({
  desc: DS.attr('string'),
  happened: DS.attr('string'),
  supervisor: DS.attr('string'),

  dog: DS.belongsTo('dog', { async: true })
});

export default MyEventModel;