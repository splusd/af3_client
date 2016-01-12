import DS from 'ember-data';

var TodoModel = DS.Model.extend({
  what: DS.attr('string'),
  where: DS.attr('string'),

  user: DS.belongsTo('user', { async: true })
});

export default TodoModel;