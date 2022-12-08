/* eslint-disable react/prop-types */
const React = require('react');
const Layout = require('./Layout');

// eslint-disable-next-line no-unused-vars
function Home({
  children, user,
}) {
  return (
    <Layout user={user}>
      <div key={Math.random() * 999999} id="shop-container" className="container row row-cols-1 row-cols-md-2 g-4">
        {children.map((el) => (
          <div data-id={el.id} data-count={el.count} className="card ">
            <img src={`${el.logo}`} className="card-img-top" alt="" />
            <p className="card-body">
              <h5>{el.title}</h5>
              <p>
                Цена:
                {' '}
                {el.price}
                {' '}
                рублей
              </p>
              <button type="button" className="btn-light" id={user}>Купить</button>
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = Home;
