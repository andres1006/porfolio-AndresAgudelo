"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "573205389740";
    const message = encodeURIComponent(
      "Hola, estoy interesado en tus servicios de desarrollo de software. ¿Podemos hablar?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 cursor-pointer flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        {/* Botón principal */}
        <motion.button
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Contactar por WhatsApp"
          title="Contactar por WhatsApp"
        >
          <FaWhatsapp className="h-6 w-6" />
        </motion.button>
      </Button>
    </AnimatePresence>
  );
}
