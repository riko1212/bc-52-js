// https://unsplash.com/
import createGalleryCard from '../templates/gallery-card.hbs';
import { UnsplashApi } from './unsplash-api';

const unsplashApi = new UnsplashApi();

const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-load-more');
const galleryListEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = e => {
  e.preventDefault();
  unsplashApi.page = 1;
  unsplashApi.searchQuery = e.currentTarget.user_search_query.value;
  unsplashApi
    .fetchPhotosByQuery()
    .then(data => {
      console.log(data.results);
      galleryListEl.innerHTML = createGalleryCard(data.results);
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onMoreBtnClick);
    })
    .catch(err => {
      console.log(err);
    });
};

const onMoreBtnClick = () => {
  unsplashApi.page += 1;

  unsplashApi
    .fetchPhotosByQuery()
    .then(data => {
      console.log(data.results);
      galleryListEl.insertAdjacentHTML('beforeend', createGalleryCard(data.results));
      if (unsplashApi.page === data.total_pages) {
        loadMoreBtnEl.classList.add('is-hidden');
        loadMoreBtnEl.removeEventListener('click', onMoreBtnClick);
      }
    })
    .catch(err => {
      console.log(err);
    });
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
