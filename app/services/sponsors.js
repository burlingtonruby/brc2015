import Ember from 'ember';

const SafeString = Ember.Handlebars.SafeString;

const SPONSORS = [
  {
    level: 'large',
    logoPath: new SafeString('/images/sponsors/stitch-fix.jpg'),
    name: 'Stitch Fix',
    website: 'http://technology.stitchfix.com/'
  },
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
  },
  {
    level: 'small',
    logoPath: new SafeString('/images/sponsors/parent-co.png'),
    name: 'Parent Co',
    website: 'http://parent.co'
  }
];

export default Ember.ArrayProxy.extend({
  content: SPONSORS
});
