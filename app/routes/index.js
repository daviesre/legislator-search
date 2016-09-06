import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup3(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
