import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import api from './js/pixabay-api';
import renderItems from './js/render-functions';
import { totalPages } from './js/pixabay-api';
import { showLoader, hideLoader } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('#loadMore');

let photos = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const messageStyles = {
  backgroundColor: '#ef4040',
  maxWidth: '432px',
  position: 'topRight',
  icon: 'fa-regular fa-times-circle',
  iconColor: '#fafafb',
  messageColor: '#fafafb',
  close: false,
  closeOnClick: true,
};

let inputValue;
let currentPage = 1;

form.addEventListener('submit', async e => {
  e.preventDefault();
  gallery.innerHTML = '';
  inputValue = e.target.elements.search.value.trim().split(' ').join('+');
  currentPage = 1;

  showLoader();

  try {
    const data = await api(inputValue, currentPage);
    hideLoader();

    renderItems(data);
    photos.refresh();

    if (data.total != 0) {
      loadBtn.classList.remove('visually-hidden');
    } else {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        ...messageStyles,
      });
    }

    if (currentPage === totalPages(data)) {
      loadBtn.classList.add('visually-hidden');

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        ...messageStyles,
        backgroundColor: 'blue',
      });
    }
  } catch (error) {
    hideLoader();
    // console.log(error);
    iziToast.error({
      message: 'Something went wrong. Please try again!',
      ...messageStyles,
    });
  }
});

loadBtn.addEventListener('click', async e => {
  e.preventDefault();
  currentPage++;

  showLoader();

  try {
    const data = await api(inputValue, currentPage);
    hideLoader();

    renderItems(data);
    photos.refresh();

    if (currentPage === totalPages(data)) {
      loadBtn.classList.add('visually-hidden');

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        ...messageStyles,
        backgroundColor: 'blue',
      });
    }

    const lastCard = gallery.lastElementChild;
    if (lastCard) {
      const cardSize = lastCard.getBoundingClientRect();
      window.scrollBy({
        top: cardSize.height * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    hideLoader();
    // console.log(error);
    iziToast.error({
      message: 'Something went wrong. Please try again!',
      ...messageStyles,
    });
  }
});

photos.on('show.simplelightbox', () => {
  console.log('SimpleLightbox opened');
});

export { currentPage };
