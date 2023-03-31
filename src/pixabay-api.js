export class PixabayApi {
  #BASE_URL = 'https://pixabay.com/api/';
  #API_KEY = '34916687-f70029b8c404a02004930ea3b';

  options = new URLSearchParams([
    ['orientation', 'horizontal'],
    ['safesearch', 'true'],
    ['per_page', 9],
    ['image_type', 'photo'],
  ]);
  page = 1;

  async fetch(query) {
    const response = await fetch(
      `${this.#BASE_URL}?key=${this.#API_KEY}&q=${query}&page=${this.page}&${
        this.options
      }`
    );
    return await response.json();
  }
}