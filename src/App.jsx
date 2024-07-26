import React from 'react';
import Header from './components/Header';
import CategoryButtons from './components/CategoryButtons';
import PromoBanner from './components/PromoBanner';
import TrendingNow from './components/TrendingNow';
import PredictionCard from './components/PredictionCard';
import Footer from './components/Footer';
import Card from './components/Card'

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md h-full max-h-screen mx-auto bg-white flex flex-col">
        <Header />
        <main className="p-4 flex-grow overflow-y-auto scrollbar-hide">
          <CategoryButtons />
          <PromoBanner />
          <TrendingNow />
          <PredictionCard />
          <Card/>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;