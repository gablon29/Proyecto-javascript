
const getData = async() => {
    return (
    await fetch("https://hn.algolia.com/api/v1/search_by_date?query=javascript&page=0")
    .then(response => response.json())
    .then(json => json.hits)
    )
}
getData();

const createCards = async() => {
    const containerCards = document.getElementById("container-cards")
    const data = await getData()
    localStorage.setItem('dataAPI', JSON.stringify(data))

const cards = data.map(info => `<div class="card w-25 m-2">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${info.title}</h5>
  <p class="card-text">${info.author}</p>
  <a href="#" class="btn btn-primary" onclick="addfav()">Go somewhere</a>
</div>
</div>`)

containerCards.innerHTML = cards;
}
createCards();

const addfav = () => {
    const data = JSON.parse(localStorage.getItem('dataAPI'))
    let existingFavs = localStorage.getItem('myFavs') || []

    let fav = data.find(info => info.objectID == "31333029")
    console.log(fav)
    localStorage.setItem('myFavs', existingFavs)
}