var keystone = require('keystone');
keystone.init({

  'name': 'My first project with use keystone (Raymond)',
  'cookie secret': '(your secret here)'

});


keystone.set('routes', require('./routes'));

keystone.start();
