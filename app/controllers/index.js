import Ember from 'ember';

export default Ember.Controller.extend({
  sponsors: Ember.inject.service('sponsors')
});
