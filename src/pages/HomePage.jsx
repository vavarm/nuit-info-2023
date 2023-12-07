import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/HomePage.css';

function HomePage() {
  return (
    <>
      <Header />
        <main>
            <img src='../public/trefle.png' alt="Trefle" />
        </main>
      <Footer />
      </>
  );
}

export default HomePage;
