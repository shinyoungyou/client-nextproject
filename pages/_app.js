import Head from "next/head";
import PropTypes from "prop-types";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component />
    </>
  );
};

App.propTypes = {
  Components: PropTypes.elementType.isRequired,
};

export default App;
