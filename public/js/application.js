const productsContainer = document.querySelector('#shop-container');
const order = document.querySelector('.btn-success');

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
    }
  }
});

productsContainer?.addEventListener('click', async (event) => { // Принять доставку !!!
  if (event.target.innerText === 'Доставлено') {
    // console.log(event.target);
    event.preventDefault();
    const userCheck = event.target.id;
    const user = event.target.dataset.use;
    // console.log(user)
    if (userCheck !== '') {
      const littleDiv = event.target.closest('.card');
      littleDiv.remove();
      await fetch(`/basket/${user}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      });
    }
  }
});
