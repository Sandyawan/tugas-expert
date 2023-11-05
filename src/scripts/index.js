import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
// import data from '../public/data/DATA.json';

const menu = document.getElementById('menu');
const drawer = document.getElementById('drawer');
const main = document.querySelector('main');
// const menulist = document.getElementById('menu-list');

menu.addEventListener('click', () => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});


// eslint-disable-next-line max-len
// menulist.insertAdjacentHTML('afterbegin', data.restaurants.map((item, index) =>
//         `
//         <div tabindex=0 class="menu-card">
// eslint-disable-next-line max-len
//             <img class="card-media" src="${item.pictureId}" alt="gambar ilustrasi ${item.name}" />
//             <p class="card-city-label">${item.city}</p>
//             <div class="card-body">
//             <p class="rating">Rating: ${item.rating}</p>
//             <h2 class="title">${item.name}</h2>
//             <p class="description">${item.description}</p>
//         </div>
//         `
// ).join(''))
