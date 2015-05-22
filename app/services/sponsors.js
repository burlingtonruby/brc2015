import Ember from 'ember';

const SafeString = Ember.Handlebars.SafeString;

const SPONSORS = [
  {
    level: 'small',
    logoPath: new SafeString('/images/sponsors/travis-ci.png'),
    name: 'Travis CI',
    website: 'https://travis-ci.com'
  },
  {
    level: 'small',
    logoPath: new SafeString('/images/sponsors/weblinc.png'),
    name: 'WebLinc',
    website: 'http://www.weblinc.com'
  }
];

export default Ember.ArrayProxy.extend({
  content: SPONSORS
});
