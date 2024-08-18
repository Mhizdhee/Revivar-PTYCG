import React, { useEffect, useState } from 'react';
import { fetchRandomImages } from '../Components/UnsplashService';

interface Image {
  id: string;
  urls: { small: string; regular: string };
}

const ImageSelection: React.FC<{ onSelect: (image: Image) => void }> = ({ onSelect }) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    fetchRandomImages().then(setImages).catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt="Unsplash"
          className="cursor-pointer"
          onClick={() => onSelect(image)}
        />
      ))}
    </div>
  );
};

export default ImageSelection;
