/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

function BasketViews({ user, basket }) {
  return (
    <Layout user={user}>

      <div className="basket">
        <h1 style={{ color: 'white' }}>Корзина</h1>
        <div className="flex-row flex-wrap justify-content-center">
          <div key={Math.random() * 999999} id="shop-container" className="container row row-cols-1 row-cols-md-2 g-4">
            {!user ? (
              <>
                <div className="card">
                  <p className="card-body">
                    <h5 className="regtext" style={{ color: 'white' }}>Думаю для начала тебе стоит зарегистрироваться</h5>
                  </p>
                </div>
                <div />
              </>
            ) : (
              <>
                {basket.map((el) => (
                  <div key={Math.random() * 999999} data-id={el.id} data-count={el.count} className="card ">
                    <img src={`${el['Product.logo']}`} className="card-img-top" alt="" />
                    <p className="card-body">
                      <h5>{el['Product.title']}</h5>
                      <p>
                        Цена:
                        {' '}
                        {el['Product.price'] * el.count}
                        {' '}
                        рублей
                      </p>
                      <p className="nal">
                        Количество:
                        {' '}
                        {el.count}
                      </p>
                    </p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        {user && basket.length > 0 ? (
          <>
            <div className="flex-column flex-wrap align-item-center text-center">
              <p className="fs-5" style={{ color: 'white' }}>
                Итого:
                {' '}
                {basket.reduce((acc, curr) => acc + curr.count * curr['Product.price'], 0)}
              </p>
              <a type="button" href="/order" className="btn-success">Оформить заказ</a>
            </div>
            <div />
          </>
        ) : (
          <>
            <div>
              <div />
            </div>
            <div>
              <div />
            </div>
          </>
        )}

      </div>
    </Layout>
  );
}

module.exports = BasketViews;
