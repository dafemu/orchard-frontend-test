import { useState } from 'react';
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import ContentWrapper from './components/ContentWrapper';
import CookingSection from './components/CookingSection';
import TasteColorsSection from './components/TasteColorsSection';
import { data } from './utils';

function App() {
  const [modalImage, setModalImage] = useState(null);
  return (
    <ContentWrapper>
      <CookingSection data={data} setModalImage={setModalImage} />
      <TasteColorsSection data={data} setModalImage={setModalImage} />

      <Dialog open={!!modalImage} onClose={() => setModalImage(null)} className="modal">
        <motion.img
          src={modalImage}
          alt="Modal"
          className="modal-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        />
      </Dialog>
    </ContentWrapper>
  )
}

export default App
