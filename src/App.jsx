import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import AnimatedRoutes from './components/AnimatedRoutes';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
