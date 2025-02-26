import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";

export default function Modal({modalImage, setModalImage}) {
  return (
    <Dialog 
        open={!!modalImage} 
        onClose={() => setModalImage(null)} 
        className="modal"
    >
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
            <Dialog.Panel 
            as={motion.div} 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.8 }}
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer clic dentro
            >
            <button 
                className="close-button" 
                onClick={() => setModalImage(null)} 
                aria-label="Close modal"
            >
                ✕
            </button>
            {modalImage && <img src={modalImage} alt="Enlarged" />}
            </Dialog.Panel>
        </div>
        </Dialog>

  )
}
