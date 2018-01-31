const connectorsRoutes = require('./connectors_routes');
module.exports = function(app, db) {
  connectorsRoutes(app, db);
  // Other route groups could go here, in the future
};