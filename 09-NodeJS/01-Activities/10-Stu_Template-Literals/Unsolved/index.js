// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "I Want You",
  artist: "Savage Garden",
  album: "Savage Garden"
};

// Write code between the <div> tags to output the data from the music object above.
// Use an h2 element for the title and a p element for artist and title
const songSnippet = `
  <div class="song">
<p>My favorite song is ${music.title}.</p> 
<p>It's from the band ${music.artist}.</p>
<p>Not so coincidentally, the album that the song came from is also called ${music.album}.</p>
  </div>
`;

const element = document.getElementById("music");
element.innerHTML = songSnippet;

