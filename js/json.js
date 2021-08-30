const user = {
    id: 11,
    name: 'Kabir singh',
    job: 'vivo multinational company',
    positio: 'assembly enginner',
    porducts: ['mobile', 'laptop', 'desktop', 'balti'],
}
const stringified = JSON.stringify(user);
console.log(stringified)
const converted = JSON.parse(stringified)
console.log(converted.name)


function displayPosts(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `name:${user.name}
                        email:${user.email}
                           id:${user.id}
        `;
        ul.appendChild(li)
    }
}