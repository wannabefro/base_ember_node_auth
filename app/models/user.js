App.User = DS.Model.extend({
  githubToken: DS.attr(),
  username: DS.attr(),
  repos :DS.hasMany('repo')
});
