var playlist = { artist: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle) {
 return Object.assign ({}, playlist, {artist: ['songTitle']});
}
