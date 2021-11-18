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