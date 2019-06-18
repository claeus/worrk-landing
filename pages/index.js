import React from 'react';
import Head from 'next/head';

const Index = () => (
  <>
    <Head>
      <title>Worrk | Easiest way to track work.</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <header>
      <nav>
        <div id="logo">Worrk</div>
      </nav>
    </header>
    <main>
      <h1>Worrk is coming</h1>
    </main>
    <footer>
      <p>Building things</p>
    </footer>
    <style jsx global>
      {`
        body {
          color: #333;
          font-family: arial;
          max-width: 650px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        main {
          flex-grow: 1;
        }
        footer {
          color: #888;
          border-top: 1px solid #eee;
          margin-top: 16px;
          padding: 16px 0;
        }

        header {
          margin-top: 16px;
          margin-bottom: 30px;
        }

        header a {
          color: #888;
          margin-right: 16px;
          text-decoration: none;
        }

        h1 {
          font-size: 44px;
          margin-bottom: 16px;
        }
      `}
    </style>
  </>
);

export default Index;
