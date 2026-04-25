const gallery = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

const renderItems = data => {
  const markup = data.hits
    .map(
      item => `<li class="gallery-list-item">
      <a href="${item.largeImageURL}"><img src="${item.webformatURL}" alt="${item.tags}" /></a>
    <table>
      <tr>
        <th>Likes</th>
        <th>Views</th>
        <th>Comments</th>
        <th>Downloads</th>
      </tr>
      <tr>
        <td>${item.likes}</td>
        <td>${item.views}</td>
        <td>${item.comments}</td>
        <td>${item.downloads}</td>
      </tr>
    </table>
  </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
};

export default renderItems;
