import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';


interface HeaderProps {
  onQuoteClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onQuoteClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Year-End Accounts', path: '/services/year-end-accounts' },
    { name: 'Online Bookkeeping', path: '/services/online-bookkeeping' },
    { name: 'VAT Returns Filing', path: '/services/vat-returns' },
    { name: 'Payroll & HR Solutions', path: '/services/payroll-hr' },
    { name: 'Business Advisory', path: '/services/business-advisory' },
    { name: 'Company Secretarial', path: '/services/company-secretarial' },
    { name: 'EIIS Investment Advisory', path: '/services/eiis-advisory' },
    { name: 'Umbrella Company (PAYE)', path: '/services/umbrella-company' },
  
    { name: 'Business Registration Services', path: '/contact' },
    { name: 'Employment Permit Services', path: '/contact' },
    { name: 'Business Finance Support', path: '/contact' },
    { name: 'Accounts Receivable & Payable', path: '/contact' },
  ];

  const industries = [
    { id: 'smes', name: 'SMEs' },
    { id: 'healthcare', name: 'Healthcare Professionals & HSE Contractors' },
    { id: 'restaurants', name: 'Restaurants, Cafés & Catering Businesses' },
    { id: 'import-export', name: 'Import & Export Businesses' },
    { id: 'non-resident', name: 'Non-Resident Companies' },
    { id: 'startups', name: 'Startups & New Businesses' },
    { id: 'owner-managed', name: 'Owner-Managed Companies' },
    { id: 'property-owners', name: 'Property Owners & Landlords' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/Logo1.png"
              alt="Finmount Logo"
              className="h-16 w-auto object-contain"
            />
            <span className="text-xl font-bold text-gray-900"></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <span>Services</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {isServicesOpen && (
              <div
                className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50 max-h-96 overflow-y-auto"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors"
              onMouseEnter={() => setIsIndustriesOpen(true)}
              onMouseLeave={() => setIsIndustriesOpen(false)}
            >
              <span>Industries</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            {isIndustriesOpen && (
              <div
                className="absolute top-full left-0 w-72 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50"
                onMouseEnter={() => setIsIndustriesOpen(true)}
                onMouseLeave={() => setIsIndustriesOpen(false)}
              >
                {industries.map((industry) => (
                  <Link
                    key={industry.id}
                    to={`/industries#${industry.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                    onClick={() => setIsIndustriesOpen(false)}
                  >
                    {industry.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-800 transition-colors"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <span>Tools</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          
            {isToolsOpen && (
              <div
                className="absolute top-full left-0 w-64 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50"
                onMouseEnter={() => setIsToolsOpen(true)}
                onMouseLeave={() => setIsToolsOpen(false)}
              >
                <Link
                  to="/salary-calculator"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800"
                  onClick={() => setIsToolsOpen(false)}
                >
                  🇮🇪 Salary Calculator
                </Link>
              </div>
            )}
          </div>
            
            <Link 
              to="/pricing" 
              className={`text-gray-700 hover:text-blue-800 transition-colors ${
                location.pathname === '/pricing' ? 'text-blue-800 font-medium' : ''
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/resources" 
              className={`text-gray-700 hover:text-blue-800 transition-colors ${
                location.pathname === '/resources' ? 'text-blue-800 font-medium' : ''
              }`}
            >
              Resources
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-800 transition-colors ${
                location.pathname === '/about' ? 'text-blue-800 font-medium' : ''
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-blue-800 transition-colors ${
                location.pathname === '/contact' ? 'text-blue-800 font-medium' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <button
            onClick={onQuoteClick}
            className="hidden lg:inline-flex items-center px-4 py-2 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-all duration-200 transform hover:scale-105"
          >
            Get a tailored quote
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-800 transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/industries"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/resources"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Salary Calculator
            </Link>
            <Link
              to="/salary-calculator"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <button
              onClick={() => {
                onQuoteClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 px-4 py-2 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
            >
              Get a tailored quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
