import React from "react";
import {Card, Container} from 'react-bootstrap';
import { Routes } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./screen/cart";
import Home from "./screen/Home";
import ProductScreen from "./screen/ProductScreen";

const App = () => {
  return (
      <Router>
        <Header />
          <main className="py-3">
          <Container >
            <Routes>
              <Route path="/" element={<Home />}  />
              <Route path="/Product/:id" element={<ProductScreen />} />
              <Route path="/cart/:id" element={<Cart />} />
            </Routes>
          </Container>
          </main>
        <Footer />
        </Router>

  );
}

export default App;
