import Button from "../Button/Button";
import imageCV from "../../assets/CV/cv-Gino-Gallardo.jpg";
import pdfCV from "../../assets/CV/cv_Gino_Gallardo.pdf";

const DowloadCV = () => {
  return (
    <div className="w-full flex gap-6 text-white justify-center items-center">
      <Button>
        <a href={pdfCV} download="cv-Gino-Gallardo.pdf">
          Descargar .pdf
        </a>
      </Button>
      <Button>
        <a href={imageCV} download="imageCV">
          Descargar .jpg
        </a>
      </Button>
    </div>
  );
};

export default DowloadCV;
