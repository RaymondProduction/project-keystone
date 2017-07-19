var
  keystone = require('keystone'),
  importRoutes = keystone.importer(__dirname);

// Import Route Controllers
var routes = {
  api: importRoutes('./api'),
};
exports = module.exports = function(app) {
  app.get('/api/hello', routes.api.controllers.get);
}
