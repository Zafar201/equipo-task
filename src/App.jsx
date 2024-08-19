import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import HomePage from './pages/HomePage'
import FeaturePage from './pages/FeaturePage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import ResourcesPage from './pages/ResourcesPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />  
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/price" element={<PricingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/resource" element={<ResourcesPage />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
