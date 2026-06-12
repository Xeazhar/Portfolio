import experience from "../data/Experiences.js";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    
      <div className="h-[280px] sm:h-[400px] overflow-y-auto min-h-0 pr-1 hide-scrollbar">
               
        <div className="grid grid-cols-1 gap-6">
          {experience.map((e) => (
            <ExperienceCard key={e.id} experience={e} />
          ))}
        </div>
      </div>
    
  );
}
