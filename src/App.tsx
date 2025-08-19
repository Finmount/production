import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TeamSection from './components/TeamSection';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import YearEndAccountsPage from './pages/services/YearEndAccountsPage';
import OnlineBookkeepingPage from './pages/services/OnlineBookkeepingPage';
import VATReturnsPage from './pages/services/VATReturnsPage';
import PayrollHRPage from './pages/services/PayrollHRPage';
import BusinessAdvisoryPage from './pages/services/BusinessAdvisoryPage';
import CompanySecretarialPage from './pages/services/CompanySecretarialPage';
import EIISAdvisoryPage from './pages/services/EIISAdvisoryPage';
import UmbrellaCompanyPage from './pages/services/UmbrellaCompanyPage';
import IndustriesPage from './pages/IndustriesPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/policies/PrivacyPolicyPage';
import TermsOfServicePage from './pages/policies/TermsOfServicePage';
import ComplaintsPage from './pages/policies/ComplaintsPage';
import CookiePolicyPage from './pages/policies/CookiePolicyPage';
import QuoteModal from './components/QuoteModal.tmp';
import WhatsAppBubble from './components/WhatsAppBubble';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header onQuoteClick={() => setIsQuoteModalOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage onQuoteClick={() => setIsQuoteModalOpen(true)} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/year-end-accounts" element={<YearEndAccountsPage />} />
            <Route path="/services/online-bookkeeping" element={<OnlineBookkeepingPage />} />
            <Route path="/services/vat-returns" element={<VATReturnsPage />} />
            <Route path="/services/payroll-hr" element={<PayrollHRPage />} />
            <Route path="/services/business-advisory" element={<BusinessAdvisoryPage />} />
            <Route path="/services/company-secretarial" element={<CompanySecretarialPage />} />
            <Route path="/services/eiis-advisory" element={<EIISAdvisoryPage />} />
            <Route path="/services/umbrella-company" element={<UmbrellaCompanyPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          </Routes>
        </main>
        <Footer />
        <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
        <WhatsAppBubble />
      </div>
    </Router>
  );
}

export default App;