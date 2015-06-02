import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'brc2015/tests/helpers/start-app';

var application;

module('Acceptance - Speakers List', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /speakers', function(assert) {
  visit('/speakers');

  andThen(function() {
    assert.equal(currentURL(), '/speakers');
  });
});

test('it displays all the speakers', function(assert) {
  visit('/speakers');

  andThen(function() {
    assert.equal(find('.speaker').length, 13);
  });
});

test('clicking a speaker goes to the speaker', function(assert) {
  visit('/speakers');
  click('.speaker a');

  andThen(function() {
    assert.equal(currentRouteName(), 'speakers.speaker');
  });
});
