/*
<li class="gallery-item">
  <a href="#">
    <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
  </a>
</li>
*/

const galleryEl = document.querySelector('.js-gallery');

// Створення li
const galleryItemEl = document.createElement('li');
galleryItemEl.classList.add('gallery-item');

// Створення a
const galleryLinkEl = document.createElement('a');
galleryLinkEl.href = '#';
galleryItemEl.append(galleryLinkEl);

// Створення img

const galleryImgEl = document.createElement('img');
galleryImgEl.src = 'https://picsum.photos/id/237/200/300';
galleryImgEl.alt = 'Labrador';
galleryLinkEl.append(galleryImgEl);

// Вставка елементів

galleryEl.append(galleryItemEl);
