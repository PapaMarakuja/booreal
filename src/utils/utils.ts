// Contact information
export const WHATSAPP_NUMBER = "55479923732782";
export const DEFAULT_WHATSAPP_MESSAGE = "Olá, Booreal! Estou interessado em começar meu projeto agora.";

// Helper function to create WhatsApp URL
export const createWhatsAppUrl = (message: string = DEFAULT_WHATSAPP_MESSAGE) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};