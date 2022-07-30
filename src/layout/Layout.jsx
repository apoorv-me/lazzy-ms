import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Helmet } from 'react-helmet';

export default function Layout(props) {
  return (
    <>
      <div id='wrapper'>
        <Helmet>
          <body className='dark-scheme de-clivus' />
          <title>{props.title}</title>
        </Helmet>
        <Header isBg={props.isBg} />
        <main className='container-fluid'>
          {props.heading && (
            <div className='p-20 border-b border-gray-600 bg-white/[0.01]'>
              <h1 className='text-5xl font-bold text-center text-white'>
                {props.heading}
              </h1>
            </div>
          )}
          {props.isBg ? (
            <div className='w-full h-full'>{props.view}</div>
          ) : (
            <div className='mx-auto max-w-7xl px-4 sm:mt-4'>{props.view}</div>
          )}
        </main>
        {!props.isBg && <Footer />}
      </div>
    </>
  );
}
