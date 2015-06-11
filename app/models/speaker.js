import Ember from 'ember';
import DS from 'ember-data';

const SafeString = Ember.Handlebars.SafeString;

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
    return new SafeString('https://s3.amazonaws.com/burlingtonrubyconference/2015/speakers/'+this.get('imagePath'));
  }.property('imagePath'),

  twitterUrl: function() {
    return new SafeString('https://twitter.com/'+this.get('twitterHandle'));
  }.property('twitterHandle')
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
      website: 'http://zzak.io'
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
      website: 'http://www.gameswithcode.com'
    },
    {
      id: 3,
      bio: "Sam Phippen is a swashbuckling hacker from London, UK. He fixes every size of data problem at Fun and Plausible Solutions. He helps fight for the forces of justice as a member of the RSpec core team. He's sad that he can't hug every cat.",
      company: 'Fun and Plausible Solutions',
      imagePath: 'sam-phippen.jpg',
      name: 'Sam Phippen',
      talkDescription: "Defensive programming is one of those abstract ideas that seems great. We all want to use these ideas to ensure the long-term maintainability of our codebases. It is, however, often unclear what we should be defending against and what form those defenses should take. We can find places where defensive patterns could be added by looking at the edge cases that occur in our system. Where it seems appropriate, we can then apply ideas and patterns from defensive programming.",
      talkTitle: 'Extremely Defensive Coding',
      twitterHandle: 'samphippen',
      website: 'http://samphippen.com'

    },
    {
      id: 4,
      bio: "Hi, I am Sara. I'm an art school grad and English major turned software developer. By no means a far leap in my book. I code the news at Vermont Public Radio, and I like to think about how to build software that will do creative things.",
      company: 'Vermont Public Radio',
      imagePath: 'sara-simon.jpg',
      name: 'Sara Simon',
      talkDescription: "As Ruby devs, we tend to be strict in our devotion to the “just get your hands dirty and play around with the code” learning style. It’s what I like to think of as natural context learning. It’s being thrown in the deep end and forced to swim to shore. It’s hands-on. It’s incredibly valuable. It works, but it works faster and better if it’s not a stand-alone method. This is a talk about the other methods. It's a talk about the tricks I used to become nearly fluent in Mandarin Chinese, and about how I applied those same tricks to learning Ruby. In a nutshell, it's about the foreignness of programming languages and about the ways we can program our brains to learn a foreign one. I’ve found intrinsic similarities between foreign and programming languages, and with each, I’ve found a simple and straightforward path to fluency.",
      talkTitle: 'Learning Fluency',
      twitterHandle: 'sarambsimon',
      website: 'http://www.sarambsimon.com'
    },
    {
      id: 5,
      bio: "Aaron Kalin is a System Administrator for DNSimple hailing from Chicago and has been programming for over 15 years. At night you'll find him hacking on game servers or experimenting with other programming languages. He's passionate about solving problems and enjoys giving back as much as possible.",
      company: 'DNSimple',
      imagePath: 'aaron-kalin.jpg',
      name: 'Aaron Kalin',
      talkDescription: "Ever been to a website or tried to use an internet service that was suddenly not working? It may have been the victim of a Distributed Denial of Service attack or DDoS as they are called. They happen almost daily in varying shapes and sizes, but you don’t always get the details of how and why. You’ll hear the story of such an attack from someone who was a victim along with detail of how it happened, why it happened, and what they are doing to protect themselves the next time it happens so you can too.",
      talkTitle: 'Anatomy of a Distributed Denial of Service Attack',
      twitterHandle: 'martinisoft',
      website: 'http://maritnisoftware.com'
    },
    {
      id: 6,
      bio: "Sharon is the director of business development and marketing for speech IRL, a speech therapy practice delivering communication therapy and training.  She is a life-long stutterer that speaks about fear and vulnerability at the intersection of marketing, communication, business and tech. She has spoken to universities about stuttering, at Ignite Chicago about patience, Madison+ Ruby about branding and to a host of other audiences.",
      company: 'Speech IRL',
      imagePath: 'sharon-steed.jpg',
      name: 'Sharon Steed',
      talkDescription: "Developers are trained to communicate to things with a goal in mind. When you're talking to something like, say a computer, you type in your code and it responds by giving you back what you want. Nine times out of ten, it works perfectly. Why, then, is it so difficult to do this same thing when talking to a client about a project, updating a superior on your progress, or pitching an investor your million-dollar idea? Because talking to people requires a special set of skills - namely, empathy and a little bit of storytelling. In an industry filled with brilliant minds, great ideas and mass disruption, so few of the best and brightest know how to tell their compelling story. The takeaways from this talk will be learning how to value the listener, improved social connection and becoming a master at building a relationship quickly and effectively.",
      talkTitle: 'How to Talk to Humans: A Different Approach to Soft Skills',
      twitterHandle: 'sharonsteed',
      website: 'http://sharonsteed.co'
    },
    {
      id: 7,
      bio: "Tim Krajcar is an Engineering Manager at New Relic, managing the Ruby agent team. He’s built software, web, and infrastructure solutions for companies including Nike, Intel, Standard Insurance, Hitachi, Sutter Home, and McAfee. He lives in Portland, Oregon with his wife and recently co-founded two early-stage daughters.",
      company: 'New Relic',
      imagePath: 'tim-krajcar.jpg',
      name: 'Tim Krajcar',
      talkDescription: "For too long, computers have been shut out of the red-hot music-to-listen-to-while-relaxing-in-the-bathtub genre. Today, that all changes. Our smooth-jazz-as-a-service startup is primed to disrupt this stale industry. In this talk we'll introduce the basic protocols of digital music and take a whirlwind tour of musical harmonic theory. We'll survey some Ruby tools that make noise and we'll dig deep into using Ruby to generate beautiful piano music with audience-selected chords. It will all culminate in a showdown between man and machine to decide the fate of the musical universe as our program battles a real live musician.",
      talkTitle: 'kenny_g.rb: Making Ruby Write Smooth Jazz',
      twitterHandle: 'TimKrajcar',
      website: 'http://www.timbabwe.com'
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
      bio: "Aaron Quint was born and raised in Brooklyn, NY. Despite spending some time in the Bay Area, he realized he couldn't live without good bagels, so he moved back home and now lives in the Hudson Valley. He spends his time doing consulting and training, and contributing to Open Source Ruby, JavaScript and Go projects.",
      company: null,
      imagePath: 'aaron-quint.jpg',
      name: 'Aaron Quint',
      talkDescription: "Regardless of where you stand on the debate between monoliths and microservices, the fact is that its never really one or the other. As your applications grow they often need to start communicating with other applications and services. Because we're often building for the web, we usually think of web protocols first (HTTP/JSON) when designing communication, but this might not be the best option for high throughput, high availability services.",
      talkTitle: 'Beyond JSON: Improving Inter-app Communication',
      twitterHandle: 'aq',
      website: 'http://www.quirkey.com'
    },
    {
      id: 11,
      bio: "Over my career I have worked in a variety of roles: developer,  manager, agile coach, director, and then full circle back to developer.  \n\nMany years ago, I was turned by the ways of agile and extreme programming. That started a journey of constantly trying to understand better ways to develop software.  In addition to learning about technical topics, I am very interested in the \"softer\" topics that help us work effectively as teams.",
      company: 'Autodesk',
      imagePath: 'michael-denomy.jpg',
      name: 'Michael Denomy',
      talkDescription: "Companies make significant efforts and investments to keep employees happy: free lunches, financial incentives, company outings, and training budgets just to name a few. That's all well and good, but what can we do to take ownership of our own happiness?  In this talk, we will discuss how mindfulness and meditation techniques can be used to take ownership in our own happiness and well-being. We will discuss resources and tips to get started with a practice, as well as stumbling blocks you may encounter along the way.",
      talkTitle: 'Breathe In and Out With Me - Owning Your Happiness',
      twitterHandle: 'mdenomy',
      website: 'https://mdenomy.wordpress.com/'
    },
    {
      id: 12,
      bio: 'Eileen M. Uchitelle spends her days working on performance and security at Basecamp; or as you probably know it better, the place Ruby on Rails was born. She accidentally started contributing to open source after giving a talk on some problems with Active Record. Aaron Patterson was there and told her “fix it yourself” (not really). When she’s not making Rails better by improving Active Record and speeding up integration tests, Eileen enjoys craft beer and hiking in the Hudson Valley with her husband and their dog.',
      company: 'Basecamp',
      imagePath: 'eileen-m-uchitelle.jpg',
      name: 'Eileen M. Uchitelle',
      talkDescription: "Understanding performance output can feel like reading tea leaves. It makes sense to a few people, but many of us are left in the dark; overwhelmed and frustrated by the data. On top of that there are a ton of performance tools to choose from; StackProf, RubyProf, AllocationTracer. Where do you even start?\nWhile working on speeding up integration tests in Rails source, I learned that the key to improving performance of Ruby code is having a baseline, not relying on one profiler and understanding the advantages and limitations of your tools. By utilizing these methods integration test are now 3 times faster than they were in Rails 4.2.0, with more improvements being made every day.\nIn this talk we will not only look at how to read performance output, but when and how to use the right profilers for the job. We'll discuss a variety of methods and techniques for benchmarking and profiling so you can get the most out of each performance tool.",
      talkTitle: 'How to Performance',
      twitterHandle: 'eileencodes',
      website: 'http://eileencodes.com'
    },
    {
      id: 13,
      bio: 'I hack on Travis CI and JRuby. My favorite elements are Beryllium and Erbium.',
      company: 'Travis CI',
      imagePath: 'hiro-asari.jpg',
      name: 'Hiro Asari',
      talkDescription: 'nil',
      talkTitle: 'Why am I Waiting for a Long Time for the Build to Start?, Or, the First Lessons in Control Theory.',
      twitterHandle: 'hiro_asari',
      website: ''
    }
  ]
});

export default Speaker;
