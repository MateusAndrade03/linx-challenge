import { loadProducts, generateCards, validateName } from './utils.js';

let page = 1;
const btnMoreProducts = document.querySelector('#btn-more-products');
const formInviteFriend = document.querySelector('.invite-form');

window.addEventListener('load', async () => {
  const { products } = await loadProducts(1);

  generateCards(products);
});

btnMoreProducts.addEventListener('click', async (e) => {
  e.preventDefault();
  page++;
  const { products } = await loadProducts(page);

  generateCards(products);
});

formInviteFriend.addEventListener('submit', (e) => {
  e.preventDefault();

  validateName();
});
