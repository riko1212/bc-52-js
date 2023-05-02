// https://unsplash.com/
import createGalleryCard from '../templates/gallery-card.hbs';
import { UnsplashApi } from './unsplash-api';

const unsplashApi = new UnsplashApi();

const showRandomPhotos = () => {
  unsplashApi
    .getRandomPhotos()
    .then(response => {
      const { data } = response;
      console.log(data);
      galleryListEl.innerHTML = createGalleryCard(data);
    })
    .catch(err => {
      console.log(err);
    });
};

showRandomPhotos();

const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-load-more');
const galleryListEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = e => {
  e.preventDefault();
  unsplashApi.page = 1;
  unsplashApi.searchQuery = e.currentTarget.user_search_query.value;
  unsplashApi
    .fetchPhotosByQuery()
    .then(response => {
      const { data } = response;
      console.log(data);
      if (data.total_pages === 0) {
        galleryListEl.innerHTML = '';
        loadMoreBtnEl.classList.add('is-hidden');
        loadMoreBtnEl.removeEventListener('click', onMoreBtnClick);
        console.log('За вашим запитом нічого не знайдено');
        return;
      }

      if (data.total_pages === 1) {
        loadMoreBtnEl.classList.add('is-hidden');
        loadMoreBtnEl.removeEventListener('click', onMoreBtnClick);
        galleryListEl.innerHTML = createGalleryCard(data.results);
        return;
      }
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
    .then(response => {
      const { data } = response;
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
