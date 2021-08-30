function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}
loadPosts()

function displayPosts(posts) {
    const section = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `<h3>${post.title}</h3>
                        <body>${post.body}<body>                
        `;
        section.appendChild(div);

    }
}