const React = require('react');

function Layout({title, children, username = ""}) {
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
        <title>{title ? title : 'created by T.M.'}</title>
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
        <div id="particles-js"></div>
        <div class="wrapper">
        <div class="top">
       <nav
              class="navbar navbar-expand-lg"
              style={{
                padding: " 2% ",
                backgroundColor: "rgba(255,255,255,0.7)",
              }}
            >
              <div class="container-fluid d-flex align-content-center">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                   <a
                          class="nav-link active"
                          aria-current="page"
                          href='\'
                          style={{ cursor: "pointer" }}
                        >
                          <b>ГЛАВНАЯ</b>
                        </a>
                    {username ? (
                      <>
                        <a
                          class="nav-link active"
                          aria-current="page"
                          href="#"
                          style={{ cursor: "default" }}
                        >
                          Привет, <b>{username}!</b>
                        </a>
                        <a
                          class="nav-link active"
                          aria-current="page"
                          href="/private/admin"
                        >
                          Личный кабинет
                        </a>
                        <a class="nav-link text-danger" href="/auth/signout">
                          <b>Выход</b>
                        </a>
                      </>
                    ) : (
                      <>
                        <a
                          class="nav-link active"
                          aria-current="page"
                          href="/auth/signin"
                        >
                          Вход
                        </a>
                        <a class="nav-link" href="/auth/signup">
                          Регистрация
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </nav>


        <div className='container'>{children}</div>
      </div>
      <footer
            class="text-center text-white"
            style={{
              backgroundColor: "rgba(255,255,255,0.7)",
            }}
          >
            <div class="container">
              <section>
                <a
                  class="btn btn-link btn-floating btn-lg text-dark"
                  href="#"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>

                <a
                  class="btn btn-link btn-floating btn-lg text-dark"
                  href="#"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-twitter"></i>
                </a>

                <a
                  class="btn btn-link btn-floating btn-lg text-dark"
                  href="#"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-google"></i>
                </a>

                <a
                  class="btn btn-link btn-floating btn-lg text-dark"
                  href="#"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-instagram"></i>
                </a>

                <a
                  class="btn btn-link btn-floating btn-lg text-dark"
                  href="#"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-linkedin"></i>
                </a>

                <a
                  class="btn btn-link btn-floating btn-lg text-dark"
                  href="#"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i class="fab fa-github"></i>
                </a>
              </section>
            </div>

            <div
              class="text-center text-dark p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <b> © 2022 created by BEARS</b>
              <a
                class="text-dark"
                href="https://elbrusboot.camp/"
                style={{ textDecoration: "none" }}
              >
                {" "}
                Elbrus Bootcamp
              </a>
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