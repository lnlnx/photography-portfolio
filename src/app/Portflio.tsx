import React from 'react';
import GalleryItem from './GalleryItem';
import { images } from '@/data/images';
import Fancybox from '@/component/Fancybox';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl pt-10 pb-8 font-bold">PORTFOLIO</h1>
      <section className="text-neutral-700">
        <div className="container w-full columns-2 gap-3">
        <Fancybox
            options={{
                Carousel: {
                infinite: false,
                },
            }}
            >
            {images.map((image, index) => (
                <GalleryItem key={index} src={image.src} alt={image.alt} />
            ))}
        </Fancybox>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
