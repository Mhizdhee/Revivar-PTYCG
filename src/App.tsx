// import React, { useState } from "react";
// import ImageSelection from "./Components/ImageSelection";
// import PersonalizationForm from "./Components/PersonalizationForm";
// import CardGenerator from "./Components/CardGenerator";

// const App: React.FC = () => {
//   const [selectedImage, setSelectedImage] = useState<any>(null);
//   const [userName, setUserName] = useState<string>("");

//   const handleImageSelect = (image: any) => setSelectedImage(image);
//   const handleGenerate = (name: string) => setUserName(name);

//   return (
//     <>
//       <div className="min-h-screen flex flex-col bg-gray-100">
//         <header className="bg-[#f47621] text-white py-4 text-center text-2xl font-bold">
//           <p>Personalized Thank You Card Generator</p>
//         </header>
//         <main className="flex-grow flex items-center justify-center p-4">
//           {!selectedImage ? (
//             <ImageSelection onSelect={handleImageSelect} />
//           ) : !userName ? (
//             <PersonalizationForm
//               image={selectedImage}
//               onGenerate={handleGenerate}
//             />
//           ) : (
//             <CardGenerator image={selectedImage} name={userName} />
//           )}
//         </main>
//         <footer className="bg-[#f47621] text-center py-4">
//           <p className="text-white">© 2024 Olaniyan Dorcas</p>
          
//         </footer>
//       </div>
//     </>
//   );
// };

// export default App;



import React, { useState } from "react";
import ImageSelection from "./Components/ImageSelection";
import PersonalizationForm from "./Components/PersonalizationForm";
import CardGenerator from "./Components/CardGenerator";

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");

  const handleImageSelect = (image: any) => setSelectedImage(image);
  const handleGenerate = (name: string) => setUserName(name);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <header className="bg-[#f47621] text-white py-4 ">
          <p className="text-center text-[24px] font-[600]">Personalized Thank You Card Generator</p>
        </header>
        <main className="flex-grow flex items-center justify-center p-4">
          {!selectedImage ? (
            <ImageSelection onSelect={handleImageSelect} />
          ) : !userName ? (
            <PersonalizationForm
              image={selectedImage}
              onGenerate={handleGenerate}
            />
          ) : (
            <CardGenerator image={selectedImage} name={userName} />
          )}
        </main>
        <footer className="bg-[#f47621] text-center py-4">
          <p className="text-white">© 2024</p>
          <p className="text-white mt-2">
            Images sourced from <a href="https://unsplash.com" className="underline" target="_blank" rel="noopener noreferrer">Unsplash</a>. Photo by <a href="https://unsplash.com/@photographer-profile" className="underline" target="_blank" rel="noopener noreferrer">Photographer Name</a> on Unsplash.
          </p>
        </footer>
      </div>
    </>
  );
};

export default App;
