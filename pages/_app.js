import Head from "next/head";
import PropTypes from "prop-types";

import wrapper from '../store/configureStore';

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
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App); // (configureStore가 들어있는)HOC로 감싸주기. 
// 고차 컴포넌트는 컴포넌트를 새로운 컴포넌트로 변환합니다.
// 그냥 컴포넌트는 props를 UI로 변환합니다.(이해 못함. 근데 상관없음)
