import { loadProducts, generateCards, validateName } from './utils.js';

let page = 1;
const btnMoreProducts = document.querySelector('#btn-more-products');
const formInviteFriend = document.querySelector('.invite-form');

//load products on screen
window.addEventListener('load', async () => {
  const { products } = await loadProducts(1);

  generateCards(products);
});

//show more products - button click
btnMoreProducts.addEventListener('click', async (e) => {
  e.preventDefault();
  page++;
  const { products } = await loadProducts(page);

  generateCards(products);
});

//validade name - submit command - invite-form
formInviteFriend.addEventListener('submit', (e) => {
  e.preventDefault();

  validateName();
});
