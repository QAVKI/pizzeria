/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
const React = require('react');

function Layout({ title, children, user }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{title || 'Pizza'}</title>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/application.js" />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Переключатель навигации">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="logoblock nav-item">
                  <img className="logo" src="/images/logo.jpg" alt="" />
                </li>
                <li className="nav-item">
                  <span className="nav-link active">Luna Pizza</span>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">Главная</a>
                </li>
                {user ? (
                  <>
                    <li className="nav-item">
                      <a className="nav-link active" href="/user">
                        Привет
                        {' '}
                        {user}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/signout">Выйти</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/basket">Корзина</a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link active" href="/auth/registration">Регистрация</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/auth/signin">Авторизация</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="/basket">Корзина</a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;
