// https://unsplash.com/
import createGalleryCard from '../templates/gallery-card.hbs';
import { PixabayApi } from './pixaby-api';

const pixabayApi = new PixabayApi();

const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-load-more');
const galleryListEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = e => {
  e.preventDefault();
  pixabayApi.page = 1;
  pixabayApi.searchQuery = e.currentTarget.user_search_query.value;
  pixabayApi
    .fetchPhotosByQuery()
    .then(data => {
      console.log(data.hits);
      galleryListEl.innerHTML = createGalleryCard(data.hits);
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onMoreBtnClick);
    })
    .catch(err => {
      console.log(err);
    });
};

const onMoreBtnClick = () => {
  pixabayApi.page += 1;

  // pixabayApi.searchQuery = e.currentTarget.user_search_query.value;
  pixabayApi
    .fetchPhotosByQuery()
    .then(data => {
      console.log(data.hits);
      galleryListEl.insertAdjacentHTML('beforeend', createGalleryCard(data.hits));
      if (pixabayApi.page === Math.ceil(data.total / pixabayApi.perPage)) {
        loadMoreBtnEl.classList.add('is-hidden');
        loadMoreBtnEl.removeEventListener('click', onMoreBtnClick);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
