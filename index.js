var path = require('path');
var utils = require(path.join(__dirname, 'utils'));

var playlist = process.argv[2];

utils.playlistInfo(playlist, function(error, playlistJSONs) {
  if (error) { console.error(error); }
  else {
    var playlistInfo = playlistJSONs.map(JSON.parse);
    playlistInfo.forEach(function(video) {
      console.log(video.title);
    });
  }
});
