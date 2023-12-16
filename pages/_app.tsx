/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AuthProvider } from '../context/auth';
import { SidebarProvider } from '../context/sidebar';
import Navbar from '../components/navbar/navbar';

declare const gapi: any;
declare global {
  interface Window {
    onLoadCallback: () => void;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    window.onLoadCallback = () => {
      gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: 'AIzaSyBsLHhKI8t1pNuZZX4CSv5OMViFaJqrAtU',
          clientId:
            '473772422344-ef5e87udgtft9jqm72m87bhclio6nvg1.apps.googleusercontent.com',
          discoveryDocs: [
            'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
          ],
          scope: 'https://www.googleapis.com/auth/calendar',
        });
        gapi.client.load('calendar', 'v3', () => {});
      });
    };
  }, []);

  return (
    <>
      <Head>
        <script
          src="https://apis.google.com/js/platform.js?onload=onLoadCallback"
          async
          defer
        />
      </Head>
      <AuthProvider>
        <SidebarProvider>
          <Navbar />
          <Component {...pageProps} />
        </SidebarProvider>
      </AuthProvider>
    </>
  );
}
export default MyApp;
