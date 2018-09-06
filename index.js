var youtubeDlList= process.argv[2];

// parse output of youtube-dl
var playlist = JSON.parse("[\n" + youtubeDlList.split("\n").join(",") + "\n]");

// list names
playlist.forEach(function(video) {
  console.log(video.title);
});
