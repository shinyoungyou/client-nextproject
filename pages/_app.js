import Head from "next/head";
import PropTypes from "prop-types";

const App = ({ Componets }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Componets />
    </>
  );
};

App.propTypes = {
  Components: PropTypes.elementType.isRequired,
};

export default App;
