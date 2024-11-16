const gallery = document.querySelector('.gallery');
import { currentPage } from '../main';

export function showLoader() {
  const loaderHTML = `<li class="loadText loader-item"><span class="loader"></span></li>`;
  gallery.insertAdjacentHTML('beforeend', loaderHTML);
}

export function hideLoader() {
  const loaderItem = document.querySelector('.loader-item');
  if (loaderItem) {
    loaderItem.remove();
  }
}

const renderItems = data => {
  console.log(data);

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

  if (currentPage === 1) {
    gallery.innerHTML = markup;
  } else {
    gallery.insertAdjacentHTML('beforeend', markup);
  }
};

export default renderItems;
