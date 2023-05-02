// https://unsplash.com/
import createGalleryCard from '../templates/gallery-card.hbs';
import { UnsplashApi } from './unsplash-api';

const unsplashApi = new UnsplashApi();

const showRandomPhotos = async () => {
  // Варіант через then()/catch()
  // unsplashApi
  //   .getRandomPhotos()
  //   .then(response => {
  //     const { data } = response;
  //     galleryListEl.innerHTML = createGalleryCard(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  //? Варіант через async/await
  try {
    const { data } = await unsplashApi.getRandomPhotos();
    galleryListEl.innerHTML = createGalleryCard(data);
  } catch (err) {
    console.log(err);
  }
};

// showRandomPhotos();

const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-load-more');
const galleryListEl = document.querySelector('.js-gallery');

const onSearchFormSubmit = async e => {
  e.preventDefault();
  loadMoreBtnEl.classList.add('is-hidden');
  loadMoreBtnEl.removeEventListener('click', onMoreBtnClick);
  unsplashApi.page = 1;
  unsplashApi.searchQuery = e.currentTarget.user_search_query.value;
  if (unsplashApi.searchQuery === '') {
    showRandomPhotos();
  }

  // Варіант через then()/catch()
  // unsplashApi
  //   .fetchPhotosByQuery()
  //   .then(response => {
  //     const { data } = response;
  //     if (data.total_pages === 0) {
  //       galleryListEl.innerHTML = '';
  //
  //       console.log('За вашим запитом нічого не знайдено');
  //       return;
  //     }

  //     if (data.total_pages === 1) {
  //       galleryListEl.innerHTML = createGalleryCard(data.results);
  //       return;
  //     }
  //     galleryListEl.innerHTML = createGalleryCard(data.results);
  //     loadMoreBtnEl.classList.remove('is-hidden');
  //     loadMoreBtnEl.addEventListener('click', onMoreBtnClick);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });

  //? Варіант через async/await
  try {
    const { data } = await unsplashApi.fetchPhotosByQuery();
    if (data.total_pages === 0) {
      galleryListEl.innerHTML = '';
      console.log('За вашим запитом нічого не знайдено');
      return;
    }
    if (data.total_pages === 1) {
      galleryListEl.innerHTML = createGalleryCard(data.results);
      return;
    }
    galleryListEl.innerHTML = createGalleryCard(data.results);
    loadMoreBtnEl.classList.remove('is-hidden');
    loadMoreBtnEl.addEventListener('click', onMoreBtnClick);
  } catch (err) {
    console.log(err);
  }
};

const onMoreBtnClick = async () => {
  unsplashApi.page += 1;
  // Варіант через then()/catch()
  // unsplashApi
  //   .fetchPhotosByQuery()
  //   .then(response => {
  //     const { data } = response;
  //     console.log(data.results);
  //     galleryListEl.insertAdjacentHTML('beforeend', createGalleryCard(data.results));
  //     if (unsplashApi.page === data.total_pages) {
  //       loadMoreBtnEl.classList.add('is-hidden');
  //       loadMoreBtnEl.removeEventListener('click', onMoreBtnClick);
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  //? Варіант через async/await
  try {
    const { data } = await unsplashApi.fetchPhotosByQuery();

    galleryListEl.insertAdjacentHTML('beforeend', createGalleryCard(data.results));
    if (unsplashApi.page === data.total_pages) {
      loadMoreBtnEl.classList.add('is-hidden');
      loadMoreBtnEl.removeEventListener('click', onMoreBtnClick);
    }
  } catch (err) {
    console.log(err);
  }
};

searchFormEl.addEventListener('submit', onSearchFormSubmit);
