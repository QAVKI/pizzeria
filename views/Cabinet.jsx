const React = require('react');
const Layout = require('./Layout');

function renderCabinet({ users, workers, user }) {
  if (users !== '' && workers !== '') {
    return (
      <Layout user={user}>
        <div className="container mt-5">
          <h2 style={{ color: 'white' }}>Личный кабинет</h2>
          <form id="signinForm" method="POST" action="/user">
            <div className="form-group">
              <label style={{ color: 'white' }} htmlFor="login">Изменить логин:</label>
              <input
                id="login"
                className="form-control"
                name="login"
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label style={{ color: 'white' }} htmlFor="password">Изменить пароль:</label>
              <input
                id="password"
                className="form-control"
                name="password"
                type="password"
                required
              />
            </div>
            <button type="submit" className="btn-light">
              Изменить
            </button>
          </form>
          <div style={{ color: 'white' }}>Клиенты:</div>
          {users.map((el) => (
            <div style={{ color: 'white' }}>{el.login} </div>
          ))}
          <div style={{ color: 'white' }}>Работники:</div>
          {workers.map((el) => (
            <div style={{ color: 'white' }}>{el.login} </div>
          ))}
        </div>
      </Layout>
    );
  } else {
    return (
      <Layout user={user}>
        <div className="container mt-5">
          <h2 style={{ color: 'white' }}>Личный кабинет</h2>
          <form id="signinForm" method="POST" action="/user">
            <div className="form-group">
              <label style={{ color: 'white' }} htmlFor="login">Изменить логин:</label>
              <input
                id="login"
                className="form-control"
                name="login"
                type="text"
                required
              />
            </div>
            <div className="form-group">
              <label style={{ color: 'white' }} htmlFor="password">Изменить пароль:</label>
              <input
                id="password"
                className="form-control"
                name="password"
                type="password"
                required
              />
            </div>
            <button type="submit" className="btn-light">
              Изменить
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}

module.exports = renderCabinet;
