import type { NextPage } from 'next';
import { ElementType } from 'react';
import Head from "next/head";
import wrapper from '../store';

interface AppProps {
  Component: ElementType
}
const App: NextPage<AppProps> = ({ Component }) => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Public+Sans&display=swap"
        />
        <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component />
    </>
  );
};

export default wrapper.withRedux(App); // (configureStore가 들어있는)HOC로 감싸주기. 
// 고차 컴포넌트는 컴포넌트를 새로운 컴포넌트로 변환합니다.
// 그냥 컴포넌트는 props를 UI로 변환합니다.(이해 못함. 근데 상관없음)
