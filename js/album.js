function loadAlbum() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayAlbums(data))
}
loadAlbum();
function displayAlbums(albums) {
    const albumContainer = document.getElementById('albums')
    console.log(albums)
    for (const album of albums) {
        const p = document.createElement('p')
        p.style.textAlign = 'center';
        p.innerText = album.title;
        albumContainer.appendChild(p);
    }
    console.log(album)
}