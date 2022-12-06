const React = require('react');
const Layout = require('./Layout');

function Index({username}) {
  return (
    <Layout username={username}>
      <div>
        <img style={{ width:'400px', height:'400px' }} src='./images/pizza1.png' />
      </div>
    </Layout>
  );
}

module.exports = Index;
