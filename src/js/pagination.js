// https://jsonplaceholder.typicode.com/
import createPostsCard from '../templates/posts.hbs';
import { JsonPlaceholderApi } from './jsonplaceholder-api';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderApi = new JsonPlaceholderApi();

addPosts = () => {
  jsonPlaceholderApi
    .fetchPosts()
    .then(data => {
      postsListEl.innerHTML = createPostsCard(data);
    })
    .catch(err => {
      console.log(err);
    });
};

addPosts();

const onLoadMoreBtnClick = () => {
  jsonPlaceholderApi.page += 1;
  jsonPlaceholderApi
    .fetchPosts()
    .then(data => {
      postsListEl.insertAdjacentHTML('beforeend', createPostsCard(data));
    })
    .catch(err => {
      console.log(err);
    });

  if (jsonPlaceholderApi.page === 9) {
    loadMoreBtnEl.classList.add('is-hidden');
    loadMoreBtnEl.removeEventListener('click', onLoadMoreBtnClick);
  }
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnClick);
