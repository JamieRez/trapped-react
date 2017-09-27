
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var getTrap = function(spotify, cb){

    spotify.search({ type: 'playlist', query: 'Trap', limit: '50' }, function(err, data) {
        if (err) throw err;
        var randTrackPlaylistURI = data.playlists.items[getRandomInt(0, data.playlists.items.length)].tracks.href;
        spotify.request(randTrackPlaylistURI)
            .then(function(tracksObj){
                var trackURI = tracksObj.items[getRandomInt(0, tracksObj.items.length)].track.uri;
                cb(trackURI);
            });
    });
    // spotify
    //   .request("https://api.spotify.com/v1/users/12124137613/playlists/3K7n9gtxiEM0clxyDrMj51/tracks")
    //   .then(function(data) {
    //     res.send(data);
    //   })
    //   .catch(function(err) {
    //     res.send('Error occurred: ' + err);
    //   });
}

module.exports = {
    getTrap : getTrap
};
