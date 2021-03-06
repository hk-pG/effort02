import data from 'components/data';
import Header from 'components/Header';
import MainTabs from 'components/MainTabs';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>努力の跡2022</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title="努力の跡2022" />
      <MainTabs>
        {data.map((elem) => {
          return {
            title: elem.name,
            content: elem.content,
          };
        })}
      </MainTabs>
    </div>
  );
};

export default Home;
