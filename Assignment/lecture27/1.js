// 1. create an array named songs which have common object keys: 'song_name', 'singer', 'language':
// (a) add 5 different songs using the push method.
// (b) print all song names with their singers and language.
// (c) print song name at location 3 of the array.

let songs = []

// (a) add 5 different songs using the push method.
songs.push({song_name:"Sifar Safar", singer:"Karan Aujla", language:"Punjabi"});
songs.push({song_name:"Buckle Up", singer:"Shubh", language:"Punjabi"});
songs.push({song_name:"Lock", singer:"Sidhu Moose Wala", language:"Punjabi"});
songs.push({song_name:"Raanjhan", singer:"Sachet-Parampara", language:"Hindi"});
songs.push({song_name:"Perfect", singer:"Ed Sheeran", language:"English"});

// (b) print all song names with their singers and language.
for(let x in songs){
    console.log(songs[x].song_name);
    console.log(songs[x].singer);
    console.log(songs[x].language);
    console.log("");
}

// (c) print song name at location 3 of the array.
console.log(songs[3].song_name)