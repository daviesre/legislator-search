import Ember from 'ember';

export default Ember.Component.extend({
  twitterLink: Ember.computed('legislator.twitter_id', function() {
    return 'http://www.twitter.com/' + this.get('legislator.twitter_id');
  }),

  emailLink: Ember.computed('legislator.oc_email', function() {
    return 'mailto:' + this.get('legislator.oc_email');
  }),
});
