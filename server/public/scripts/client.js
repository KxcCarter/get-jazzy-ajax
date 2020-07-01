$(document).ready(onReady);

function onReady() {
    $.ajax({
        type: 'GET',
        url: '/artist',
        // sends a request for the /artist route and awaits a response from the server.
    }).then((response) => {
        // When the response is recieved, the code below is what is executed.
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });

    // TODO Add ajax request for /songs and display on DOM

    $.ajax({
        type: 'GET',
        url: '/songs',
    }).then((response) => {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
            let song = response[i];
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `);
        }

    })
}