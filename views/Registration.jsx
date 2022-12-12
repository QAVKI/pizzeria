const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <div className="container mt-5">
        <h2 style={{ color: 'white' }}>Регистрация</h2>
        <form id="signupForm" method="POST" action="/auth/registration">
          <div className="form-group">
            <label style={{ color: 'white' }} htmlFor="login">Логин:</label>
            <input
              id="login"
              className="form-control"
              name="login"
              type="text"
              required
              pattern="[A-Za-z]\w+"
              minLength={4}
              title="Латинские буквы, цифры. Имя должно начинаться с буквы"
            />
          </div>
          <div className="form-group">
            <label style={{ color: 'white' }} htmlFor="email">Email:</label>
            <input
              id="email"
              className="form-control"
              name="email"
              type="text"
              pattern="^[A-Z0-9a-z._%+-]+@[A-Z0-9a-z._%+-]+\.[A-Za-z]{2,}$"
              required
            />
          </div>
          <div className="form-group">
            <label style={{ color: 'white' }} htmlFor="password">Пароль:</label>
            <input
              id="password"
              className="form-control"
              name="password"
              type="password"
              required
              minLength={3}
            />
          </div>
          <button style={{ color: 'white' }} type="submit" className="btn-light">
            За пиццей
          </button>
        </form>
        {/* <script src='/js/signup.js'/> */}
      </div>
    </Layout>
  );
}

module.exports = Registration;
