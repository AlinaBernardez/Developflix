import peliculas from './peliculas.js'

console.log(peliculas);

const IMG_URL = 'https://image.tmdb.org/t/p/w500'

const contenedorAccion = document.getElementById('genero-28');
const contenedorThriller = document.getElementById('genero-53');
const contenedorAventura = document.getElementById('genero-12');

let listaAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(28));
let listaThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
let listaAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));

renderMovies(listaAccion, contenedorAccion);
renderMovies(listaThriller, contenedorThriller);
renderMovies(listaAventura, contenedorAventura);

function renderMovies(lista, contenedor) {
    return lista.forEach(item => {
        const img = document.createElement('img');
        img.className = 'poster'
        const title = document.createElement('p');
        title.className = 'titulo'
        const div = document.createElement('div');
        div.className = 'contenedor-peli'

        const imgUrl = item.poster_path;
        img.src = `${IMG_URL}${imgUrl}`;
        title.textContent = item.title;
        div.append(img, title);
        contenedor.appendChild(div)
    })
}

