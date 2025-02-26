import './CookingSection.scss';

export default function CookingSection() {
  return (
    <section className='cooking-section'>
        <div className='cooking-section__images'>
            Images
        </div>
        <div className='cooking-section__content'>
            <h2>WHAT DOES COOKING MEAN?</h2>
            <p>Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out. We spoke to him to find out what his experiments have told him. And in the process even discovered the secret to cooking the perfect egg...</p>

            <h6 className='cooking-section__eyebrow'></h6>
            <p>Keep water between 67 and 68°C for a flavourful, tender yolk</p>
        </div>
    </section>
  )
}
