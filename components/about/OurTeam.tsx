import React from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years in digital marketing.",
  },
  {
    name: "Jane Smith",
    role: "Creative Director",
    bio: "Award-winning designer with a passion for brand identity.",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    bio: "Full-stack wizard specializing in scalable web applications.",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Strategist",
    bio: "Data-driven marketer with a track record of successful campaigns.",
  },
  {
    name: "Alex Chen",
    role: "UX Designer",
    bio: "Crafting intuitive user experiences with a keen eye for detail.",
  },
];

interface TeamMemberProps extends TeamMember {
  index: number;
}

const TeamMemberComponent: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  imageUrl,
  index,
}) => (
  <div
    className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
  >
    <div className="w-full md:w-1/3 mb-6 md:mb-0">
      <div className="relative">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto border-4 border-white shadow-lg">
          <img
            src={imageUrl || `/images/team.jpg`}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white py-2 px-4 rounded-full text-sm font-semibold">
          {role}
        </div>
      </div>
    </div>
    <div
      className={`w-full md:w-2/3 text-center md:text-left ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}
    >
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

const OurTeamSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Team
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center mb-12 md:mb-16">
          Meet the experts behind our success
        </p>
        <div className="max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberComponent key={index} {...member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
