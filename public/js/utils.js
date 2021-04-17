//Load Products from Api
export const loadProducts = async (page) => {
  const response = await fetch(
    `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`,
  );
  const productsJson = await response.json();

  return productsJson;
};

//create de product card
export const generateCard = (products) => {
  const price = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  const product = `
                <div class="card">              
                  <div class="card-img"><img src="${
                    products.image
                  }" alt="" /></div>
                  <div class="product-info">
                    <h4 class="product-name">${products.name}</h4>
                    <p class="product-description">${products.description}</p>
                    <div class="product-original-price">De: ${price.format(
                      products.oldPrice,
                    )}</div>
                    <div class="product-discount-price">Por: ${price.format(
                      products.price,
                    )}</div>
                    <div class="product-parcel-price">ou 2x de ${price.format(
                      products.price / 2,
                    )}</div>
                    <input
                      class="btn card-btn btn-text"
                      type="submit"
                      value="Comprar"
                    />
                  </div>
                </div>`;

  return product;
};

//Generate product cards
export const generateCards = (products) => {
  const cardGrid = document.querySelector('.card-grid');
  products.forEach((item) => {
    const product = generateCard(item);
    cardGrid.innerHTML += product;
  });
};

//validade name from ivinte-form
export const validateName = () => {
  const invalidName = document.querySelector('.invalid-name');
  const friendName = document.querySelector('.invite-name').value;
  const valid = /^[A-Za-z]+([\ A-Za-z]+)*/;

  console.log(valid.test(friendName));
  if (valid.test(friendName)) {
    console.log('valid');
    invalidName.classList.add('hidden');
  } else {
    console.log('invalid');
    invalidName.classList.remove('hidden');
  }
};
