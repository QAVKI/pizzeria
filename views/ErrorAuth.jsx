const React = require("react");
const Layout = require("./Layout");

function ErrorAuth({ username }) {
  //JS Code
  return (
    <Layout username={username}>
      <div className="container">
        <div
          className="card card-body"
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            borderRadius: "20px",
          }}
        >
          <div
            className="d-block errMainAuth"
            style={{
              fontWeight: "700",
              color: "black",
            }}
          >
            <span className="d-flex justify-content-center">
              Доступ запрещён.
            </span>
            <hr />
            <h1
              className="d-flex justify-content-center errMessageAuth"
              style={{
                fontWeight: "700",
                color: "black",
              }}
            >
              Для перехода в личный кабинет необходимо зайти на сайт или
              зарегистрироваться
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = ErrorAuth;
