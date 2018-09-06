var y = require('youtube-dl');

var utils = module.exports = {};

// Input:  playlist URL
// Output: callback(error, playlistJSONs)
utils.playlistInfo = function(playlistURL, callback) {
  var options = [ '-j', '--flat-playlist' ];
  var args = {};
  return y.exec(playlistURL, options, args, callback);
};
