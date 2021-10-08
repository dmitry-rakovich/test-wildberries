//get data from mockAPI
function returnHTML(){
  const cart = document.querySelector('img.cart')
  cart.addEventListener('click', (event) => {
    console.log(event.target.parentElement.parentElement.id);
    const div = event.target.parentElement.parentElement.children
    console.log(div[4].textContent);
    const headingBasket = document.querySelector('.text')
    headingBasket.innerText = 'Корзина'
    const basket = document.querySelector('.purchases')
    const product = document.createElement('p')
    product.classList.add('name')
    const price = document.createElement('p')
    price.classList.add('price')
    product.innerText = div[3].textContent
    price.innerText = div[4].textContent
    basket.append(product, price)
    })
}


export function getCards() {
  const cards = document.getElementById("cards");
  return new Promise(() => {
    fetch("https://615d370312571a00172074c8.mockapi.io/goods")
      .then((response) => response.json())
      .then((response) => {
        response.forEach((element) => {
          cards.insertAdjacentHTML("afterBegin", createHtml(element.productName, element.price, element.avatar, element.id));
        });
      })
      .then(() => returnHTML())
  }).then(() => resolve())
}

//create HTML
function createHtml(productName, price, avatar, id) {
  return `
    <div class="card" id="${id}">
        <img class="like" src="./img/cards/heart.svg" alt="like">
        <a href="#"><img class ="card__image" src="${avatar}" alt="goods"></a>
        <a href="#"><img class ="cart" src="./img/cards/cart.svg" alt="shopping cart"></a>
        <p class="card__text">${productName}</p>
        <p class="card__price">${price} руб</p>
    </div>
`;
}