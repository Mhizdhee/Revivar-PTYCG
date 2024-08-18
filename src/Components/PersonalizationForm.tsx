import React, { useState } from 'react';

interface Props {
  image: any;
  onGenerate: (name: string) => void;
}

const PersonalizationForm: React.FC<Props> = ({ image, onGenerate }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(name);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <img
        src={image.urls.regular}
        alt="Selected"
        className="w-full max-w-md h-60 object-cover rounded-lg mb-4 shadow-md"
      />
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-[24px] font-[600]  font-sans text-center mb-4">Personalize Your Card</h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none  mb-4"
        />
        <button
          type="submit"
          className="w-full py-3 bg-[#333333] text-[#fafbfe] font-semibold rounded-[48px] shadow-md transition duration-300"
        >
          Generate Card
        </button>
      </form>
    </div>
  );
};

export default PersonalizationForm;
