import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  // IMPORTANT: Replace "YOUR_PHONE_NUMBER_HERE" with your actual WhatsApp number.
  // Include the country code, but without the '+' or any leading zeros.
  // For example, if your number is +1 (555) 123-4567, use "15551234567".
  // If it's +62 812 3456 7890 (Indonesia), use "6281234567890".
  const phoneNumber = "YOUR_PHONE_NUMBER_HERE"; 
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Consult Now</span>
    </a>
  );
};

export default WhatsAppButton;