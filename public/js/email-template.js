import { loadProducts, generateCard } from './utils.js';

const cardGrid = document.querySelector('.card-grid');

window.addEventListener('load', async () => {
  const { products } = await loadProducts(1);
  let lastItem;

  //generate only 2 cards to email-template
  for (let i = 0; i < 2; i++) {
    let itemNumber = Math.round(Math.random() * 7);
    // avoids two identical products
    while (itemNumber === lastItem) {
      itemNumber = Math.round(Math.random() * 7);
    }
    const product = generateCard(products[itemNumber]);
    cardGrid.innerHTML += product;
    lastItem = itemNumber;
  }
});
