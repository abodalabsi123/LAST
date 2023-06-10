import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './whatsappIcon.css'

const WhatsUpIcon = () => {
  return (
    <a
    href="https://wa.me/917087164327"
    class="whatsapp_float"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa fa-whatsapp whatsapp-icon"></i>
  </a>

  );
};

export default WhatsUpIcon;
