import { FaWhatsapp } from 'react-icons/fa';
import { contactInfoData } from '../data/contact';

const WhatsAppButton = () => {
  const whatsappNumber = contactInfoData.cards[2].info[0]; // Update with your actual WhatsApp number
  const whatsappMessage = 'Hi! I would like to know more about your fitness programs.';
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl md:text-4xl" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
        Chat with us!
      </span>
      
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping"></span>
    </a>
  );
};

export default WhatsAppButton;


