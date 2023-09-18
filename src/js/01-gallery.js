// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map((item) =>
        `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
        src="${item.preview}" 
        alt="${item.description}" 
        data-source="${item.original}">
    </a>
    </li>`
    ).join('');

galleryContainer.innerHTML = galleryMarkup;


galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.tagName === 'IMG') {
        const sourceUrl = event.target.dataset.source;

        const lightbox = new SimpleLightbox('.gallery a', {});

        lightbox.open({ startAt: galleryItems.findIndex((item) => item.original === sourceUrl) });
    }
});

console.log(galleryItems);