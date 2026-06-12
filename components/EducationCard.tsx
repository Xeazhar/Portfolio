import React from "react";

type Education = {
  id: string;
  school: string;
  degree: string;
  location: string;
  year: string;
  highlights: string[];
};

export default function EducationCard({ education }: { education: Education }) {
  return (
    <div
      className="
    cursor-target
    p-2
    relative
    after:absolute
    after:left-0
    after:top-0
    after:h-[2px]
    after:w-full
    after:origin-left
    after:scale-x-0
    after:bg-[var(--accent-dark)]
    after:transition-transform
    after:duration-300
    hover:after:scale-x-100
  "
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h3 className="text-xl font-bold">{education.school}</h3>
        <span className="text-sm text-gray-500 shrink-0">{education.year}</span>
      </div>

      <p className="text-gray-300 mb-1">{education.degree}</p>
      <p className="text-gray-500 text-sm mb-3">{education.location}</p>

      <ul className="list-disc list-outside pl-5 text-gray-400 space-y-1.5">
        {education.highlights.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
