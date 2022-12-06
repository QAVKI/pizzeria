const React = require('react');

function Layout({ children, username = "" }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        ></link>
        <link rel="stylesheet" href="/css/style.css" />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://kit.fontawesome.com/4a2bd28544.js"
          crossorigin="anonymous"
        ></script>

        {/* <link rel="stylesheet" href="https://unpkg.com/purecss@2.1.0/build/pure-min.css" integrity="sha384-yHIFVG6ClnONEA5yB5DJXfW2/KC173DIQrYoZMEtBvGzmf0PKiGyNEqe9N6BNDBH" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="/css/style.css"/>
        <script defer src="/js/application.js"></script> */}

      </head>
      <body>
        {/* <div id="particles-js"></div> */}
        <div className="wrapper">
          <div className="top">
            <nav
              className="navbar navbar-expand-lg"
              style={{
                padding: " 2% ",
                backgroundColor: "rgba(0,0,0)",
              }}
            >
              <div className="container-fluid d-flex align-content-center">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href='#'
                    >
                      <img
                        src='/images/logo.jpg'
                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                      />
                    </a>
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href='\'
                      style={{ cursor: "pointer" }}
                    >
                      <b style={{ color: 'rgb(255, 255, 255)' }} >ГЛАВНАЯ</b>
                    </a>
                    {username ? (
                      <>
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="#"
                          style={{ cursor: "default", color: 'rgb(255, 255, 255)' }}
                        >
                          Привет, <b>{username}!</b>
                        </a>
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/private/admin"
                          style={{ color: 'rgb(255, 255, 255)' }}
                        >
                          Личный кабинет
                        </a>
                        <a className="nav-link text-danger" href="/auth/signout" style={{ color: 'rgb(255, 255, 255)' }}>
                          <b>Выход</b>
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="/auth/signin"
                          style={{ color: 'rgb(255, 255, 255)' }}
                        >
                          Вход
                        </a>
                        <a className="nav-link" href="/auth/signup" style={{ color: 'rgb(255, 255, 255)' }}>
                          Регистрация
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </nav>


            <div classNameName='container'>{children}</div>
          </div>
          <footer
            className="text-center text-white"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          >
            <div
              className="text-center text-dark p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <b> © 2022 created by QAVKI</b>
            </div>
          </footer>
        </div>
        <script src="https://code.jquery.com/jquery-3.6.1.min.js" defer></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.js"
          defer
        ></script>
        <script src="/js/client.js" defer></script>
      </body>
    </html>
  );
}

module.exports = Layout;
