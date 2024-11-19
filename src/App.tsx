import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Courses from './components/Courses';
import Benefits from './components/Benefits';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import AbacusPage from './pages/AbacusPage';
import VedicMathsPage from './pages/VedicMathsPage';
import OlympiadPage from './pages/OlympiadPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import MSOfficePage from './pages/MSOfficePage';
import DataSciencePage from './pages/DataSciencePage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('/');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const path = window.location.pathname;
    setCurrentPage(path);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case '/courses/abacus':
        return <AbacusPage />;
      case '/courses/vedic-maths':
        return <VedicMathsPage />;
      case '/courses/olympiad':
        return <OlympiadPage />;
      case '/courses/digital-marketing':
        return <DigitalMarketingPage />;
      case '/courses/ms-office':
        return <MSOfficePage />;
      case '/courses/data-science':
        return <DataSciencePage />;
      default:
        return (
          <>
            <Hero />
            <Courses />
            <Benefits />
            <ContactForm />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a061f]">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <main>
            {renderPage()}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}