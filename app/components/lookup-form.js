import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup1() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup2', params);
    }
  }
});
