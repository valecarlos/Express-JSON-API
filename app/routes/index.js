const noteRoutes = require('./connectors_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future
};