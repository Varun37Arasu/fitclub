import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logoData, navLinks, serviceLinks, ctaButton } from '../data/navigation';
import ThemeToggle from './ThemeToggle';
import ThemePaletteSelector from './ThemePaletteSelector';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-bg-secondary/95 backdrop-blur-xl border-b-2 border-txt-muted/30 shadow-lg' : 'bg-transparent'
      }`}>
      <div className="container-custom px-4 md:px-6 md:max-w-full">
        <div className="flex items-center justify-between md:justify-evenly h-20 lg:h-24 md:gap-40">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center gap-2 md:gap-3 flex-shrink-0">
            {logoData.image && (<>
              <img
                src={logoData.image}
                alt="URS Kings Nutrition"
                className="h-12 md:h-16 lg:h-20 xl:h-24 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden sm:block text-lg md:text-2xl lg:text-3xl font-heading font-black text-txt-primary uppercase tracking-tight hover:text-primary transition-colors leading-tight">
                {logoPrefix}
                <br />
                <span className="text-primary">{logoData.highlight}</span>
              </span>
            </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 xl:px-5 py-3 text-xs xl:text-sm font-bold uppercase tracking-wider transition-all ${location.pathname === link.path
                    ? 'text-primary'
                    : 'text-txt-secondary hover:text-txt-primary'
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-primary"></div>
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
                className={`relative px-3 xl:px-5 py-3 text-xs xl:text-sm font-bold uppercase tracking-wider transition-all inline-flex items-center gap-1 xl:gap-2 ${location.pathname.startsWith('/services') || location.pathname.startsWith('/nutrition')
                    ? 'text-primary'
                    : 'text-txt-secondary hover:text-txt-primary'
                  }`}
              >
                SERVICES
                <svg className="w-3 xl:w-4 h-3 xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                {(location.pathname.startsWith('/services') || location.pathname.startsWith('/nutrition')) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-primary"></div>
                )}
              </Link>

              <div
                className={`absolute top-full left-0 mt-2 w-80 bg-bg-secondary border-2 border-txt-muted/30 shadow-xl z-50 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {/* Nutrition Plans Section */}
                <div className="px-4 py-2 bg-bg-accent border-b border-txt-muted/30">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Nutrition Plans</span>
                </div>
                {serviceLinks.filter(link => link.category === 'Nutrition').map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-6 py-3 text-sm font-bold text-txt-secondary hover:text-txt-primary hover:bg-bg-accent border-b border-txt-muted/20 transition-all"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Transformation Programs Section */}
                <div className="px-4 py-2 bg-bg-accent border-b border-txt-muted/30 mt-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Transformation Programs</span>
                </div>
                {serviceLinks.filter(link => link.category === 'Transformation').map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-6 py-3 text-sm font-bold text-txt-secondary hover:text-txt-primary hover:bg-bg-accent border-b border-txt-muted/20 transition-all"
                    onClick={() => setServicesOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                <Link
                  to="/services"
                  className="block px-6 py-4 text-sm font-bold text-primary hover:bg-bg-accent transition-all text-center"
                  onClick={() => setServicesOpen(false)}
                >
                  VIEW ALL PROGRAMS →
                </Link>
              </div>
            </div>

            <Link to={ctaButton.path} className="ml-2 xl:ml-4 btn-primary text-xs xl:text-sm px-4 xl:px-8 py-2 xl:py-3">
              {ctaButton.text}
            </Link>
            
            {/* Theme Controls */}
            <div className="flex items-center gap-2 ml-2 xl:ml-3">
              {/* <ThemePaletteSelector /> */}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* <ThemePaletteSelector /> */}
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center text-txt-primary hover:text-primary transition-colors flex-shrink-0 bg-bg-accent border border-txt-muted/30 rounded"
              aria-label="Toggle menu"
            >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-secondary border-t border-txt-muted/30 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all ${location.pathname === link.path
                      ? 'text-primary bg-bg-accent'
                      : 'text-txt-secondary hover:text-txt-primary hover:bg-bg-accent'
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Services Section */}
              <div className="border-t border-txt-muted/30 mt-2 pt-2">
                <div className="px-6 py-2 text-xs text-gray-500 font-bold uppercase tracking-wider">Nutrition Plans</div>
                {serviceLinks.filter(link => link.category === 'Nutrition').map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-3 text-sm font-medium transition-all ${
                      location.pathname === link.path 
                        ? 'text-primary bg-bg-accent' 
                        : 'text-txt-secondary hover:text-txt-primary hover:bg-bg-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="px-6 py-2 text-xs text-gray-500 font-bold uppercase tracking-wider mt-3">Transformation Programs</div>
                {serviceLinks.filter(link => link.category === 'Transformation').map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-6 py-3 text-sm font-medium transition-all ${
                      location.pathname === link.path 
                        ? 'text-primary bg-bg-accent' 
                        : 'text-txt-secondary hover:text-txt-primary hover:bg-bg-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-3 text-sm font-bold text-primary hover:bg-bg-accent transition-all border-t border-txt-muted/30 mt-2"
                >
                  View All Programs →
                </Link>
              </div>

              <div className="px-6 pt-4 pb-6 border-t border-txt-muted/30 mt-2 space-y-4">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between pb-4 border-b border-txt-muted/20">
                  <span className="text-sm font-bold text-txt-secondary uppercase tracking-wider">Theme</span>
                  <ThemeToggle />
                </div>
                
                <Link
                  to={ctaButton.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full text-center block text-sm py-3"
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
