import React from 'react';
import Image from 'next/image'

interface GalleryItemProps {
  src: string;
  alt: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt }) => {
  return (
        <a href={src} data-fancybox="gallery" className="rounded-md">
          <img alt={alt} src={src} className="p-3 block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110"></img>
        </a>
  );
}

export default GalleryItem;
