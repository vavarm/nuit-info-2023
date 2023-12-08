import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../CSS/HomePage.css';

function HomePage() {
  return (
    <>
      <Header />
        <main>
            <img src='trefle.png' alt="Trefle" onClick={() => window.location.href = 'bug'}/>
        </main>
      <Footer />
      </>
  );
}

export default HomePage;
