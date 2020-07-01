const express = require('express');
const songList = require('./public/scripts/song');
const artistList = require('./public/scripts/artist');
const albumList = require('./public/scripts/album');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));
// the above code tells where requests for static files should look.

app.get('/artist', (req, res) => {
    res.send(artistList);
    // When /artist is requested, app.get sends artistListArray back as a response.
});

// TODO - Add GET for songs

app.get('/song', (req, res) => {
    res.send(songList);
});

app.get('/album', (req, res) => {
    res.send(albumList);
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});