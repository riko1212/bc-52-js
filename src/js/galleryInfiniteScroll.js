// https://unsplash.com/
import createGalleryCard from '../templates/gallery-card.hbs';
import { UnsplashApi } from './unsplash-api';

const searchFormEl = document.querySelector('.js-search-form');
const targetEl = document.querySelector('.js-target-element');
const galleryListEl = document.querySelector('.js-gallery');

const onserverOptions = {
  root: null,
  rootMargin: '0px 0px 400px 0px',
  threshold: 1.0,
};

const unsplashApi = new UnsplashApi();

const showRandomPhotos = async () => {
  try {
    const { data } = await unsplashApi.getRandomPhotos();
    galleryListEl.innerHTML = createGalleryCard(data);
  } catch (err) {
    console.log(err);
  }
};

showRandomPhotos();

const observer = new IntersectionObserver(async (entries, observer) => {
  if (entries[0].isIntersecting) {
    console.log('Hello');
    unsplashApi.page += 1;
    try {
      const { data } = await unsplashApi.fetchPhotosByQuery();

      galleryListEl.insertAdjacentHTML('beforeend', createGalleryCard(data.results));
      if (unsplashApi.page === data.total_pages) {
        observer.unobserve(targetEl);
      }
    } catch (err) {
      console.log(err);
    }
  }
}, onserverOptions);

const onSearchFormSubmit = async e => {
  e.preventDefault();
  unsplashApi.page = 1;
  unsplashApi.searchQuery = e.currentTarget.user_search_query.value;
  if (unsplashApi.searchQuery === '') {
    showRandomPhotos();
  }
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
    observer.observe(targetEl);
  } catch (err) {
    console.log(err);
  }
};
searchFormEl.addEventListener('submit', onSearchFormSubmit);
