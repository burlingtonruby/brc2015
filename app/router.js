import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: ''});
  this.route('conduct', {path: 'conduct'});
  this.route('speakers', {path: 'speakers'}, function() {
    this.route('speaker', {path: ':speaker_id'});
  });
});

export default Router;
