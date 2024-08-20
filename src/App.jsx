import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import ErrorBoundary from './utils/ErrorBoundary';
import FallBackui from './components/loader/FallBackui';

// Lazy load the pages
const HomePage = lazy(() => import('./pages/HomePage'));
const FeaturePage = lazy(() => import('./pages/FeaturePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Header />

      <ErrorBoundary>
        <Suspense fallback={<FallBackui/>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/feature" element={<FeaturePage />} />
            <Route path="/price" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/resource" element={<ResourcesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>

      <Footer />
    </BrowserRouter>
  );
}

export default App;