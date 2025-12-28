import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';
import { logoData, companyInfo, quickLinks, contactInfo, socialLinks, legalLinks, copyrightText } from '../data/footer';

const Footer = () => {
  const logoPrefix = logoData.text.replace(logoData.highlight, '');

  const getSocialIcon = (iconName) => {
    const icons = {
      instagram: FaInstagram,
      facebook: FaFacebook,
      youtube: FaYoutube,
      twitter: FaTwitter,
    };
    const Icon = icons[iconName.toLowerCase()];
    return Icon ? <Icon className="text-xl md:text-2xl" /> : null;
  };

  return (
    <footer className="bg-[#141414] border-t border-gray-700 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#ff4500] rounded-full blur-3xl opacity-10"></div>

      <div className="container-custom px-4 py-8 md:py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 md:mb-6">
              <span className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tight">
                {logoPrefix}<span className="text-[#ff4500]">{logoData.highlight}</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-md mb-6 md:mb-8">
              {companyInfo.description}
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-[#242424] border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#ff4500] hover:border-[#ff4500] transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-xl font-heading font-black text-white mb-4 md:mb-6 uppercase">Navigate</h3>
            <ul className="space-y-3 md:space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 font-medium hover:text-[#ff4500] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#ff4500] rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg md:text-xl font-heading font-black text-white mb-4 md:mb-6 uppercase">Contact</h3>
            <ul className="space-y-3 md:space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff4500] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm">{contactInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff4500] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">{contactInfo.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#ff4500] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm">{contactInfo.phone}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 md:mt-12 lg:mt-16 pt-6 md:pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
            {copyrightText}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-gray-500 text-xs md:text-sm">
            {legalLinks.map((link) => (
              <a key={link.name} href={link.url} className="hover:text-[#ff4500] transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
