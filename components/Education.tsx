import education from "../data/Education.js";
import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <div className="h-[280px] sm:h-[400px] overflow-y-auto min-h-0 pr-1 hide-scrollbar">
      <div className="grid grid-cols-1 gap-6">
        {education.map((e) => (
          <EducationCard key={e.id} education={e} />
        ))}
      </div>
    </div>
  );
}
