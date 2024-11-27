import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HotelDetails from './pages/HotelDetail';

import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Login from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/"  Component={Home} />
          <Route path="/search" Component={SearchResults} />
          <Route path="/hotel/:id" Component={HotelDetails} />
          <Route path="/login" Component={Login} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
