const WHATSAPP_PHONE = '260777909863';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_PHONE}`;

export const WHATSAPP_DEFAULT_MESSAGE = 'Hello ApexCole Technology, I would like a quotation for a website.';
export const WHATSAPP_CUSTOM_SOFTWARE_MESSAGE = 'Hello ApexCole Technology, I\'m interested in a custom software solution for my business. I would like to request a quotation.';
export const WHATSAPP_MOBILE_APP_MESSAGE = 'Hello ApexCole Technology, I\'m interested in a mobile application for my business. I would like to request a quotation.';

export const WHATSAPP_PACKAGE_MESSAGES = {
  business: 'Hello ApexCole Technology, I\'m interested in the Business Profile Website package starting at K2,000. I would like to receive a quotation.',
  landing: 'Hello ApexCole Technology, I\'m interested in the Landing Page package starting at K2,500. Please provide me with a quotation.',
  custom: 'Hello ApexCole Technology, I\'m interested in the Custom Website package starting at K5,000. I would like to discuss my project requirements.',
};

export function getWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}
