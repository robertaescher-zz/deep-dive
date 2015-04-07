/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');

var Question = require('../api/question/question.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Question.find({}).remove(function() {
  Question.create({
    statement : 'What is the main impact of these challenges for yourself?',
    choices : [{
                    _id: '',
                    text: 'Falta de organização/atribuição de tarefas',
                    isUserAnswer: false
                  },{
                    _id: '',
                    text: 'Falta de organização/atribuição de tarefas',
                    isUserAnswer: false
                  },{
                    _id: '',
                    text: 'Sobrecarga de trabalho',
                    isUserAnswer: false
                  },{
                    _id: '',
                    text: 'Dificulta o meu trabalho',
                    isUserAnswer: false
                  },{
                    _id: '',
                    text: 'Falta de planejamento/metas claras',
                    isUserAnswer: false
                  }]
            
  }, {statement : 'HOW is the main impact of these challenges for yourself?',
    choices : [{
                    _id: '',
                    text: 'Falta de organização/atribuição de tarefas',
                    isUserAnswer: false
                  },{
                    _id: '',
                    text: 'Falta de organização/atribuição de tarefas',
                    isUserAnswer: false
                  },{
                    _id: '',
                    text: 'Sobrecarga de trabalho',
                    isUserAnswer: false
                  },{
                    _id: '',
                    text: 'Dificulta o meu trabalho',
                    isUserAnswer: false
                  },{
                    _id: '',
                    text: 'Falta de planejamento/metas claras',
                    isUserAnswer: false
                  }]
            
  }
  );
});