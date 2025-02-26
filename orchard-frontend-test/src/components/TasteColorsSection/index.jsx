import { motion } from "framer-motion";
import './TasteColorsSection.scss';

export default function TasteColorsSection({data, setModalImage}) {
  return (
    <section className='taste-colors-section'>
        <h2>{data.taste.title}</h2>
        <div>
          {data.taste.cards.map((card, index) => (
            <div key={index} className="card-card">
              <motion.img
                src={card.image}
                alt={card.name}
                className="image"
                width={card.width}
                height={card.height}
                whileHover={{ scale: 1.1 }}
                onClick={() => setModalImage(card.image)}
              />
              <h3>{card.name}</h3>
              <p>{card.description}</p>
            </div>
        ))}
        </div>
    </section>
  )
}
