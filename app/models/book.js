import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr();
  year: DS.attr();
  title: DS.attr();
});
