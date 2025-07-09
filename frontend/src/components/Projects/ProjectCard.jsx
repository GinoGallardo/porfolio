import { useState } from "react";
import ProjectCardPreview from "./ProjectCardPreview";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <ProjectCardPreview item={item} onClick={() => setShowDetails(true)} />
      {showDetails && (
        <ProjectModal item={item} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
};

export default ProjectCard;
