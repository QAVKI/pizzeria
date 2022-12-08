const priceButton = document.querySelector('.but');
const countButton = document.querySelector('.count');
const products = document.querySelectorAll('[data-id]');
const productsContainer = document.querySelector('#shop-container');
const order = document.querySelector('.btn-success');
let htmlArr;
let mark = false;
let markCount = false;

priceButton?.addEventListener('click', async (event) => { // Сортировка по цене !!!
  const container = document.querySelector('.row-cols-md-2');
  event.preventDefault();
  if (mark === false) {
    htmlArr = [...products];
    const newProducts = [];
    for (let i = 0; i < products.length; i += 1) {
      let price = +products[i].innerHTML.slice(products[i].innerHTML.slice(100, 200).indexOf('<strong>') + 108, products[i].innerHTML.slice(100, 200).indexOf('</strong>') + 100);
      if (price === 0) {
        const peace = products[i].innerHTML.indexOf('Цена: ') + 6;
        const peace2 = products[i].innerHTML.slice(peace);
        price = peace2.slice(0, peace2.indexOf(' руб'));
      }
      newProducts.push(price);
    }

    const productsReplic = [...newProducts];
    newProducts.sort((a, b) => a - b);
    const resultProducts = [];
    const resultId = [];

    for (let i = 0; i < newProducts.length; i += 1) {
      resultId.push(products[i].dataset.id);
      products[i].remove();
      resultProducts.push(productsReplic.indexOf(newProducts[i]));
    }

    let html = '';

    for (let i = 0; i < resultProducts.length; i += 1) {
      html += `<div data-id=${resultId[productsReplic.indexOf(newProducts[i])]} class="card ">` + htmlArr[productsReplic.indexOf(newProducts[i])].innerHTML + `</div>`;
    }

    container.innerHTML = html;
    mark = true;
  } else {
    const resultId = [];
    for (let i = 0; i < htmlArr.length; i += 1) {
      resultId.push(products[i].dataset.id);
      products[i].remove();
    }

    let html = '';
    for (let i = 0; i < htmlArr.length; i += 1) {
      html += `<div data-id=${resultId[i]} class="card ">` + htmlArr[i].innerHTML + `</div>`;
    }

    container.innerHTML = html;
    mark = false;
  }
});

countButton?.addEventListener('click', async (event) => { // Сортировка по наличию !!!
  const container = document.querySelector('.row-cols-md-2');
  event.preventDefault();

  if (markCount === false) {
    htmlArr = [...products];
    const newProducts = [];

    for (let i = 0; i < products.length; i += 1) {
      const peace = products[i].innerHTML.slice(products[i].innerHTML.indexOf('В наличии') + 11);
      const price = peace.slice(0, peace.indexOf('</p>'));
      newProducts.push(price.slice(0, price.indexOf('</')));
    }

    const productsReplic = [...newProducts];
    newProducts.sort((a, b) => b - a);
    const resultProducts = [];
    const resultId = [];
    for (let i = 0; i < newProducts.length; i += 1) {
      resultId.push(products[i].dataset.id);
      products[i].remove();
      resultProducts.push(productsReplic.indexOf(newProducts[i]));
    }
    let html = '';

    for (let i = 0; i < resultProducts.length; i += 1) {
      console.log(resultProducts);
      html += `<div data-id=${resultId[productsReplic.indexOf(newProducts[i])]} class="card">` + htmlArr[productsReplic.indexOf(newProducts[i])].innerHTML + `</div>`;
    }

    container.innerHTML = html;
    markCount = true;
  } else {
    const resultId = [];
    for (let i = 0; i < htmlArr.length; i += 1) {
      resultId.push(products[i].dataset.id);
      products[i].remove();
    }

    let html = '';

    for (let i = 0; i < htmlArr.length; i += 1) {
      html += `<div data-id=${resultId[i]} class="card">` + htmlArr[i].innerHTML + `</div>`;
    }

    container.innerHTML = html;
    markCount = false;
  }
});

productsContainer?.addEventListener('click', async (event) => { // Уменьшение количества товара !!!
  if (event.target.innerText === 'Купить') {
    event.preventDefault();
    const userCheck = event.target.id;
    if (userCheck !== '') {
      const littleDiv = event.target.closest('div');
      const coller = event.target;
      coller.style.background = '#7bd0c5';
      const href = littleDiv.dataset.id;
      await fetch(`/basket/${href}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
      });
      const parent = littleDiv.outerHTML;
      const nal = parent.slice(parent.indexOf('В наличии') + 11);
      const resultCount = 'В наличии: ' + (+nal.slice(0, +nal.indexOf('</')) - 1).toString();
      const newParent = parent.replace(/В наличии: \d{1,}/, resultCount);
      const sliceParent = newParent.slice(newParent.indexOf('class="card ">') + 14);
      const sliceagain = sliceParent.slice(0, sliceParent.length - 6);
      littleDiv.innerHTML = sliceagain;
    }
  }
});

order?.addEventListener('click', async (event) => { // Оформить заказ !!!
  const shopContainer = document.querySelector('#shop-container');
  const itog = document.querySelector('.fs-5');
  itog.innerHTML = '';
  shopContainer.innerHTML = '';
  event.preventDefault();
  await fetch('/basket', {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
  });
});
