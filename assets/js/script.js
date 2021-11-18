var cardSection = document.querySelector('ul');

fetchData()

function fetchData() {
    for(var i=0; i<=150; i++) {
        fetchEachData(i)
    }
}

async function fetchEachData(i) {
    var fetchLink = `https://pokeapi.co/api/v2/pokemon/${i}`;
    var data = await fetch(fetchLink).then(res => res.json());
    displayCard(data)
}

function displayCard(data) {
    let html = `
        <li class="${data.types[0].type.name}">
            <span>#${generateId(data.id)}</span>
            <h2>${firstLetter(data)}</h2>
            <small>Type: ${data.types[0].type.name}</small>
        </li>
    `;

    cardSection.insertAdjacentHTML('beforeend', html)
}

function firstLetter(data) {
    return data.name.slice(0,1).toUpperCase() + data.name.slice(1)
}

function generateId(id) {
    if (id > 99) return id
    if(id > 9) return `0${id}`
    if(id < 10) return `00${id}`
}