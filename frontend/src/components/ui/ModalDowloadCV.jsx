import imageCV from '../../assets/CV/cv-Gino-Gallardo.jpg'
import DowloadCV from './DowloadCV';

const ModalDowloadCV = ({ onClose }) => {
  
  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-6">
        <div className="bg-[#1f1f1f] custom-scroll max-w-5xl w-full rounded-lg shadow-lg overflow-y-auto max-h-[90vh] p-6 flex flex-col gap-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#f97e3e] text-2xl  hover:text-white transition"
          >
            ✕
          </button>
          <img src={imageCV} alt="CV de Gino Gallardo" className=" w-4xl rounded-md opacity-90" />
          <DowloadCV />
        </div>
      </div>
    </>
  );
};

export default ModalDowloadCV;
