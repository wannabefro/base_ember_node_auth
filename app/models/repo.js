App.Repo = DS.Model.extend({
  name: DS.attr(),
  user: DS.belongsTo('user')
});
