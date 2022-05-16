/*vamos a declarar una funcion para guardar nuestros favoritos de localStorage.*/
const getFavorites = () => {
    const myFavorites = JSON.parse(localStorage.getItem('myFavs'))
    //ahora realizamos una funcion para guardar en las tarjetas mis favortitos.//
    const containerCardsFavorites = document.getElementById('container-cards-favorites')
    /*ahora copiamos el codigo 'funcion' para crear la carta donde sera
    llevada la informacion.*/
    const cards = myFavorites.map(info => `
<div class="card w-25 m-2"> 
<div class="card-body">
  <h5 class="card-title">${info.title}</h5>
  <p class="card-text">${info.author}</p>
  <a href="#" class="btn btn-primary" onclick="deleteFav(${info.objectID})">💕</a>
</div>
</div>`)

containerCardsFavorites.innerHTML = cards
}
getFavorites()

const deleteFav = (infoID) => {
    let existingFavs = JSON.parse(localStorage.getItem('myFavs')) || []
    const itemToDelete = existingFavs.some(({ objectID }) => objectID == infoID)
    if (itemToDelete) {
        const arrayWithoutItemDelete = existingFavs.filter(({ objectID }) => objectID != infoID)

        localStorage.setItem('myFavs', JSON.stringify(arrayWithoutItemDelete))
        window.location.href = '/favorite.html'
    }
}