/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');
require('dotenv').config();

// eslint-disable-next-line no-unused-vars
function Worker({
  children, user, worker, first, userInfo,
}) {
  return (
    <Layout user={user} userInfo={userInfo}>
      <script defer src={`https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${process.env.MAP_SECRET}`} />
      <script defer src="/js/maper.js" />
      <div data-use={children[0].adress} id="map-test" className="map maper" />
      {worker && children[0]['Product.title'] !== '' ? (
        <>
          <div id="shop-container" className="container row row-cols-1 row-cols-md-2 g-4">
            <div className="card">
              {children.map((el) => (
                <h5 key={Math.random() * 999999}>
                  {el['Product.title']}
                  {' '}
                  x
                  {' '}
                  {el.count}
                </h5>
              ))}
              <br />
              <h5>
                Адрес:
                {' '}
                {children[0].adress}
                {' '}
                {children[0].comment}
              </h5>
              <button data-use={first} type="button" className="btn-light" id={user}>Доставлено</button>
            </div>
          </div>
          <div />
        </>
      ) : (
        <>
          <div />
          <div className='card'> Ожидание заказа...</div>
        </>
      )}
    </Layout>
  );
}

module.exports = Worker;
