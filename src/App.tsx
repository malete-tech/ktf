import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Experience } from './pages/Experience';
import { Awards } from './pages/Awards';
import Merch from './pages/Merch';
import Partners from './pages/Partners';
import { History } from './pages/History';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageTitleManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'KWASU Tech Festival | KTF 2026',
      '/register': 'Registration Terminal | KTF 2026',
      '/experience': 'Deep-Dive Experience | KTF 2026',
      '/awards': 'Awards & Nominations | KTF 2026',
      '/merch': 'Official Merchandise | KTF 2026',
      '/partners': 'Partnership & Sponsorship | KTF 2026',
      '/history': 'Our Story | KTF 2026',
    };

    document.title = titles[pathname] || 'KWASU Tech Festival | KTF 2026';
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary overflow-x-hidden max-w-full">
      <ScrollToTop />
      <PageTitleManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
