import DS from 'ember-data';

var Speaker = DS.Model.extend({
  bio: DS.attr('string'),
  company: DS.attr('string'),
  imagePath: DS.attr('string'),
  name: DS.attr('string'),
  talkDescription: DS.attr('string'),
  talkTitle: DS.attr('string'),
  twitterHandle: DS.attr('string'),
  website: DS.attr('string'),

  imageUrl: function() {
    return 'images/'+this.get('imagePath');
  }.property('imagePath')
});

Speaker.reopenClass({
  FIXTURES: [
    {
      id: 1,
      bio: '',
      company: 'Shutterfly',
      imagePath: 'zachary-scott.png',
      name: 'Zachary Scott',
      talkDescription: 'nil',
      talkTitle: 'TBA',
      twitterHandle: '_zzak',
      website: 'zzak.io'
    },
    {
      id: 2,
      bio: "Mark Sobkowicz has been teaching physics and computer programming at Lincoln Sudbury Regional High School since 1995.  He's been programming since the 1980s in Basic, C, C++, Java and more, but Ruby is the language he goes to when working with students.  Mark lives in Maynard, Massachusetts, and loves hiking in the White Mountains of New Hampshire.",
      company: 'Lincoln Sudbury Regional High School',
      imagePath: 'mark-sobkowicz.jpg',
      name: 'Mark Sobkowicz',
      talkDescription: 'As developers we are often called upon to teach elements of our craft to others. While we know our subject and our work, we might not know the best ways to share that knowledge with students. In this talk, I’ll discuss how to apply well known themes of software development to the process of education. Reframing our students as customers brings their needs into focus, and defines our mission. Defining desired outcomes explicitly and clearly help us choose appropriate activities. Drawing from a career teaching students to code, I’ll share some successes and failures and leave you with techniques to help you be a more effective and inspiring teacher.',
      talkTitle: 'Agile Teaching',
      twitterHandle: 'marksobkowicz',
      website: 'www.gameswithcode.com'
    },
    {
      id: 3,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 4,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 5,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 6,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 7,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 8,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 8,
      bio: 'Mark Bates is the founder and chief architect of the Boston, MA based consulting company, Meta42 Labs. Mark spends his days focusing on new application development and consulting for his clients. At night he writes books, raises kids, and occasionally he forms a band and "tries to make it". Mark is the author of three books, "Distributed Programming with Ruby" (2009), "Programming in CoffeeScript" (2012), and "Conquering the Command Line" (2014).',
      company: 'Meta42 Labs',
      imagePath: 'mark-bates.jpg',
      name: 'Mark Bates',
      talkDescription: 'Distraction Driven Development is a fun approach to problem solving that might just change your life, or at the very least provide some good arguments as to why you should spend all day playing Clash of Clans.',
      talkTitle: 'Distraction Driven Development',
      twitterHandle: 'markbates',
      website: 'http://www.markbates.com'
    },
    {
      id: 9,
      bio: 'Stephanie Morillo is a Dominican-American musician, writer, and technologist hailing from the Bronx, New York City. She frequently writes about class, race, her experiences learning to code, and working in tech. She enjoys helping others learn to program, singing melancholic songs, and dreaming about well-written documentation because the world needs it.',
      company: '',
      imagePath: 'stephanie-morillo.jpg',
      name: 'Stephanie Morillo',
      talkDescription: 'In this talk, I will share the experiences and challenges I faced as a woman of color learning, and then teaching others, how to code. I will also discuss ways the industry can be more welcoming to marginalized people, offer examples of ways that people can support diversity while making an impact, and explore how we can offer bridges into technical careers for people with varied skill sets and levels of coding aptitude.',
      talkTitle: 'The Importance Of Being Earnest...About Breaking Into Tech',
      twitterHandle: 'radiomorillo',
      website: 'http://rubymorillo.github.io'
    },
    {
      id: 10,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 11,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 12,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    },
    {
      id: 13,
      bio: '',
      company: '',
      imagePath: '.jpg',
      name: '',
      talkDescription: '',
      talkTitle: '',
      twitterHandle: '',
      website: ''
    }
  ]
});

export default Speaker;
