App.ExternalAuthenticator = Ember.SimpleAuth.Authenticators.Base.extend({
  restore: function(properties) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(properties.access_token)) {
        resolve(properties);
      } else {
        reject();
      }
    });
  },
  authenticate: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      App.ExternalConnector.one('externalAuthenticationSucceeded', function(properties) {
        Ember.run(function() { resolve(properties); });
      });
      App.ExternalConnector.one('externalAuthenticationFailed', function(error) {
        Ember.run(function() { reject(error); });
      });
      var authWindow = window.open(
        'http://localhost:3000/auth/github'
      );
    });
  }
});

App.ExternalConnector = Ember.Object.createWithMixins(Ember.Evented);
