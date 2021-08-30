function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => console.log(data))
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (user of data) {
        const li = document.createElement('li')
        li.innerText = `name: ${user.name}
                        email:${user.email}
                        id:${user.id}
        `;
        ul.appendChild(li)
    }
}