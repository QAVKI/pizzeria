const React = require('react');
const Layout = require('./Layout');

function Err404({ username }) {
  //JS Code
  return (
    <Layout username={username}>
      <div
        className='card card-body mt-4'
        style={{
          backgroundColor: 'rgba(255,255,255,0.7)',
          borderRadius: '20px',
        }}
      >
        <h1
          className='d-flex justify-content-center error404'
          style={{
            fontWeight: '700',
            color: 'black',
          }}
        >
          Страница не найдена
        </h1>
      </div>
    </Layout>
  );
}

module.exports = Err404;
