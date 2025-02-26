import { motion } from "framer-motion";
import './TasteColorsSection.scss';

export default function TasteColorsSection({data, setModalImage}) {
  return (
    <section className='taste-colors-section'>
      <header>
        <h1>{data.taste.title}</h1>
      </header>
      <div className="taste-colors-section__cards">
        {data.taste.cards.map((card, index) => (
          <div key={index} className="taste-colors-section__card">
            <a href="#" key={index} onClick={(e) => e.preventDefault()}>
              <motion.img
                src={card.image}
                alt={card.name}
                className="image"
                whileHover={{ scale: 1.1 }}
                onClick={() => setModalImage(card.image)}
              />
            </a>
            <div className="taste-colors-section__card-content">
              <h3>{card.name}</h3>
              <p>{card.description}</p>
            </div>
          </div>
      ))}
      </div>
    </section>
  )
}
