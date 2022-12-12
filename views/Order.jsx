/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
const React = require('react');
const Layout = require('./Layout');
require('dotenv').config();

function Order({ user }) {
  return (
    <Layout user={user[0]}>
      <script defer src={`https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${process.env.MAP_SECRET}`} />
      <script defer src="/js/map.js" />
      <div style={{ marginBottom: '200px' }} className="container mt-5">
        <h2 style={{ color: 'white' }}>Оформление заказа</h2>
        <h4 style={{ color: 'white' }}>
          Имя:
          {' '}
          {user[0]}
        </h4>
        <h4 style={{ color: 'white' }}>
          Контакты:
          {' '}
          {user[1]}
        </h4>
        <h4 style={{ color: 'white' }} className="time">Укажите точку</h4>
        <div id="map-test" className="map" />
        <form id="signupForm" method="POST" action="/basket">
          <div className="form-group">
            <label style={{ color: 'white', fontSize: '60px' }} htmlFor="adress">Адрес:</label>
            <input
              readOnly
              id="adress"
              className="form-control"
              name="adress"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label style={{ color: 'white', fontSize: '60px' }} htmlFor="comment">Укажите квартиру и подъезд:</label>
            <input
              id="comment"
              className="form-control"
              name="comment"
              type="text"
              required
            />
          </div>
          <button style={{ color: 'white' }} type="submit" className="btn-light">
            Заказать
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = Order;
