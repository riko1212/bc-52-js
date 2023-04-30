'use strict';
export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com/search/photos';
  #API_KEY = 'Xn_eH2Gi-hkj7ulpwwCcpyWldnnOhEEXSryD5-QYcnQ';
  constructor() {
    this.page = null;
    this.searchQuery = '';
    this.perPage = 10;
  }

  fetchPhotosByQuery() {
    const searchParams = new URLSearchParams({
      query: this.searchQuery,
      page: this.page,
      per_page: this.perPage,
      // orientation: 'vertical',
      client_id: this.#API_KEY,
    });
    return fetch(`${this.#BASE_URL}?${searchParams}`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }
}
