import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    
      <div className="h-[400px] overflow-y-auto min-h-0 pr-1 hide-scrollbar">
        <div className="grid grid-cols-1 gap-6 ">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    
  );
}
