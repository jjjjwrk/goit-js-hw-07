import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1) make markup
const container = document.querySelector('.gallery');
const markup = createMarkup(galleryItems);
container.insertAdjacentHTML('beforeend', markup);

function createMarkup (array) {
    return array.map(({ preview, original }) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="Image description"
          />
        </a>
      </li>`
    }).join('');
};


// 2) Делегування подій та модаллка
container.addEventListener('click', onItemClick);
function onItemClick (event) {
    event.preventDefault();
    if(event.target === event.currentTarget){
        return;
    }
    const targetEl = event.target.closest('.gallery__image');
    const dataSource = targetEl.dataset.source;
    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${dataSource}"/ alt="Image original">
    </div>
    `)
    instance.show();
};

