import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

interface Props {
  image: any;
  name: string;
}

const CardGenerator: React.FC<Props> = ({ image, name }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current,{
            useCORS: true, 
        logging: true,
        scale: 2,
        });
        const link = document.createElement('a');
        link.download = 'thank-you-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error generating the card image:', error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-[#f5f5f5]">
      <div
        ref={cardRef}
        className="relative w-full max-w-[400px] min-h-[20vh] aspect-[4/5] bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden"
      >
        <img src={image.urls.regular} alt="Card Background" className="w-full h-full object-cover"    crossOrigin="anonymous"   onLoad={() => console.log('Image loaded')}

/>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center text-[16px] md:text-[24px] lg:text-[32px] font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg whitespace-nowrap ">
          <p>THANK YOU</p>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-[16px] md:text-[24px] lg:text-[32px] font-semibold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
          {name}
        </div>
      </div>
      <button
        onClick={handleDownload}
        className="mt-6 px-6 py-3 bg-[#333333] text-[#fafbfe] text-lg font-semibold rounded-full shadow-md transition-colors duration-300"
      >
        Download Card
      </button>
    </div>
  );
};

export default CardGenerator;

