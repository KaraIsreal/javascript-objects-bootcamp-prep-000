var playlist = { artist: 'song' };

function updatePlaylist(playlist, "artist: song") {
   return Object.assign ({'artist:song'}, playlist, ['artist: song']);
}
