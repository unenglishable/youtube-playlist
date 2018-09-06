PLAYLIST_JSON="$(youtube-dl -j --flat-playlist $1)"
node index.js "$PLAYLIST_JSON"
