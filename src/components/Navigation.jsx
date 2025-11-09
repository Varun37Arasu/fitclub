import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoData, navLinks, serviceLinks, ctaButton } from '../data/navigation';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoPrefix = logoData.text.replace(logoData.highlight, '');

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-xl border-b-2 border-gray-700 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tight hover:text-[#ff4500] transition-colors">
              {logoPrefix}<span className="text-[#ff4500]">{logoData.highlight}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${
                  location.pathname === link.path
                    ? 'text-[#ff4500]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-[#ff4500]"></div>
                )}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`relative px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 ${
                  location.pathname.startsWith('/services')
                    ? 'text-[#ff4500]'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                SERVICES
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {location.pathname.startsWith('/services') && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-[#ff4500]"></div>
                )}
              </Link>
              
              {/* Dropdown Menu - Stays open when hovering */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-[#1a1a1a] border-2 border-gray-700 shadow-xl z-50 transition-all duration-200 ${
                  servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-6 py-4 text-sm font-bold text-gray-300 hover:text-white hover:bg-[#242424] border-b border-gray-800 last:border-b-0 transition-all"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="block px-6 py-4 text-sm font-bold text-[#ff4500] hover:bg-[#242424] transition-all"
                  onClick={() => setServicesOpen(false)}
                >
                  View All Programs →
                </Link>
              </div>
            </div>
            
            <Link to={ctaButton.path} className="ml-4 btn-primary text-sm px-8 py-3">
              {ctaButton.text}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center text-white hover:text-[#ff4500] transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1a1a1a] border-t border-gray-700">
            <div className="py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-4 text-sm font-bold uppercase tracking-wider ${
                    location.pathname === link.path
                      ? 'text-[#ff4500] bg-[#242424]'
                      : 'text-gray-300 hover:text-white hover:bg-[#242424]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Services Section */}
              <div className="border-t border-gray-700 mt-2 pt-2">
                <div className="px-6 py-3 text-xs text-gray-500 font-bold uppercase">Services</div>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-6 py-3 text-sm font-bold text-gray-300 hover:text-white hover:bg-[#242424]"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 text-sm font-bold text-[#ff4500] hover:bg-[#242424]"
                >
                  View All Programs →
                </Link>
              </div>
              
              <div className="px-6 pt-4">
                <Link
                  to={ctaButton.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full text-center block text-sm"
                >
                  {ctaButton.text}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
