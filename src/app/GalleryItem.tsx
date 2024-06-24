import React from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  return (
    <div className="w-full p-1">
      <div className="overflow-hidden h-full w-full">
        <a href={src} data-fancybox="gallery">
          <img
            alt={alt}
            className="block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"
            src={src}
          />
        </a>
      </div>
    </div>
  );
}

export default GalleryItem;
