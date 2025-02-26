import { motion } from "framer-motion";
import './CookingSection.scss';

export default function CookingSection({data, setModalImage}) {
  return (
    <article className='cooking-section'>
        <div className='cooking-section__images'>
          {data.cooking.images.map((image, index) => (
            <motion.img
              key={index}
              src={image.src}
              alt={`Cooking image ${index + 1}`}
              className={`image-${index}`}
              width={image.width}
              height={image.height}
              whileHover={{ scale: 1.05 }}
              onClick={() => setModalImage(image.src)}
            />
          ))}
        </div>
        <div className='cooking-section__content'>
          <header>
            <h1>{data.cooking.title}</h1>
          </header>
            <p>{data.cooking.text}</p>
            <div className='cooking-section__eyebrow'>
              <h6>{data.cooking.eyebrow.title}</h6>
              <p>{data.cooking.eyebrow.text}</p>
            </div>
        </div>
    </article>
  )
}
