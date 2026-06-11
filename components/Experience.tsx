import experience from "../data/Experiences.js";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    
      <div className="max-h-[400px] overflow-y-auto pr-1">
               
        <div className="grid grid-cols-1 gap-6">
          {experience.map((e) => (
            <ExperienceCard key={e.id} experience={e} />
          ))}
        </div>
      </div>
    
  );
}
