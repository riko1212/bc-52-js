'use strict';

import axios from 'axios';
export class UnsplashApi {
  #BASE_URL = 'https://api.unsplash.com';
  #API_KEY = 'Xn_eH2Gi-hkj7ulpwwCcpyWldnnOhEEXSryD5-QYcnQ';
  constructor() {
    this.page = null;
    this.searchQuery = '';
    this.perPage = 12;
  }

  fetchPhotosByQuery() {
    const searchParams = {
      query: this.searchQuery,
      page: this.page,
      per_page: this.perPage,
      orientation: 'portrait',
      client_id: this.#API_KEY,
    };

    return axios.get(`${this.#BASE_URL}/search/photos`, { params: searchParams });
  }

  getRandomPhotos() {
    const searchParams = {
      page: this.page,
      orientation: 'portrait',
      client_id: this.#API_KEY,
      count: 12,
    };
    return axios.get(`${this.#BASE_URL}/photos/random`, { params: searchParams });
  }
}
