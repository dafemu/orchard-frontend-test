import { useState, useEffect } from 'react';
import ContentWrapper from './components/ContentWrapper';
import CookingSection from './components/CookingSection';
import TasteColorsSection from './components/TasteColorsSection';
import { data } from './utils';
import Modal from './components/Modal';

function App() {
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const handleAnchorClick = (event) => {
      if (event.target.tagName === 'A') {
        console.log("Clicked element:", event.target);
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      <ContentWrapper>
        <CookingSection data={data} setModalImage={setModalImage} />
      </ContentWrapper>
      
      <ContentWrapper>
        <TasteColorsSection data={data} setModalImage={setModalImage} />
      </ContentWrapper>
      <Modal modalImage={modalImage} setModalImage={setModalImage} />
    </>
  )
}

export default App
