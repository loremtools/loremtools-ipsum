
module.exports = function(config) {
  if (!config){
    throw new Error('No config specified');
  }
  
  var middleware = require('./middleware')(config);
  return middleware;
};
