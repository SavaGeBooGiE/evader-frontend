import React from 'react';
import loadable from '@loadable/component';
import Head from 'next/head';

import { useAuth } from '../context/auth';
import { useSidebar } from '../context/sidebar';
import fetchProfileData from '../services/fetch-profile-data-service';

import Wrapper from '../utils/sidebar-content-wrapper';
import Sidebar from '../components/sidebar/sidebar';
import Spinner from '../components/spinner/spinner';
import MainContentWrapper from '../utils/main-content-wrapper';

const IsNotAuth = loadable(
  () => import('../components/home/not-authenticated')
);
const IsAuth = loadable(() => import('../components/home/authenticated'));

const Home = () => {
  const { loading, token, setBackendUser } = useAuth();
  const { setActive } = useSidebar();

  React.useEffect(() => {
    if (token) {
      fetchProfileData(token!)
        .then((response) => {
          setBackendUser(response.data.user);
        })
        .catch(() => {});
    }
  }, [token]);

  React.useEffect(() => {
    setActive('home');
  }, []);

  let content = loading ? (
    <Spinner text="Trying to log you in..." />
  ) : (
    <>
      <Head>
        <title>Evader</title>
      </Head>
      <IsNotAuth />
    </>
  );
  if (token) {
    content = (
      <>
        <Head>
          <title>Home | Evader</title>
        </Head>
        <Wrapper>
          <Sidebar />
          <MainContentWrapper>
            <IsAuth />
          </MainContentWrapper>
        </Wrapper>
      </>
    );
  }
  return content;
};

export default Home;
