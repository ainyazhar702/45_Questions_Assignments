// Define the make_album function
function make_album(artist_name: string, album_titel: string, tracks?: number){
     let album: {artist: string, titel: string, tracks?: number} = {
        artist: artist_name,
        titel: album_titel,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;

}

// calling three function and creating 3 variables with different values

let album1 = make_album("Ainy", "Album titel 1");

let album2 = make_album("Ajwa", "Album titel 2");

// calling a make_album function with third para meter
let album3 = make_album("Eshal", "Album tietl 3", 10);


// printing the variable

console.log(album1);
console.log(album2);
console.log(album3);


