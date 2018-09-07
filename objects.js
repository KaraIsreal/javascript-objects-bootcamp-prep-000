var playlist = { artist: "song" };

function updatePlaylist(playlist, 'artist: song') {
  playlist.artist = ["song", "song2"];
   return Object.assign ({}, playlist, {artist: ['song', 'song2']});
}
