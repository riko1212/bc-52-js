'use strict';
export class PixabayApi {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '34152906-82ee5ecd7f8cc2c72302ae1f5';
  constructor() {
    this.page = null;
    this.searchQuery = '';
    this.perPage = 10;
  }

  fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      q: this.searchQuery,
      page: this.page,
      per_page: this.perPage,
      orientation: 'vertical',
      key: this.#API_KEY,
    });
    return fetch(`${this.#BASE_URL}/?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
