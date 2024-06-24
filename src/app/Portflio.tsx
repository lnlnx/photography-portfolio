import React from 'react';
import GalleryItem from './GalleryItem';

const images = [
  {
    src: "https://images.unsplash.com/photo-1675789203977-70070dae0799?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt: "a person standing in front of a rock formation",
  },
  {
    src: "https://images.unsplash.com/photo-1674985594089-eab270e843c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1963&q=80",
    alt: "a cat laying on top of a sidewalk next to the ocean",
  },
  // Add more images here
];

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
      <section className="text-neutral-700">
        <div className="container w-full">
          <div className="flex flex-wrap w-full">
            {images.map((image, index) => (
              <div className="flex w-full md:w-1/2 flex-wrap" key={index}>
                <GalleryItem src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
