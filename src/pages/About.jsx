import React, { useState } from "react";
// Assuming this path is correct and contains the array above
import teamMembers from "../data/teamMembers"; 
import { Phone, Mail, X } from "lucide-react"; 
import TeamMemberModal from "../components/ui/teammemberModal";
import PageHeader from '../components/common/pageHeroSection';


const About = () => {

  const [selectedRoleToDisplay, setSelectedRoleToDisplay] = useState(null);

  const uniqueRoles = [
    ...new Set(teamMembers.map((member) => member.role)),
  ];


  const handleRoleClick = (role) => {

 setSelectedRoleToDisplay(role);
  };
  
  const closeModal = () => {
      setSelectedRoleToDisplay(null);
  };

  return (
    <section className="w-full bg-gray-50">
      {/* Hero / Header section */}
        <PageHeader
        subtitle="Meet Our Professionals "
        title="Our Team"
        description=""
        bgImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80"
      />

      {/* Role Selection Buttons (Uses uniqueRoles) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800">
          View Profiles by Role
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {uniqueRoles.map((role) => (
            <button
              key={role}
              onClick={() => handleRoleClick(role)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 shadow-md 
                bg-blue-600 text-white hover:bg-blue-700
              `}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      
     <TeamMemberModal 

  role={selectedRoleToDisplay} 
  teamMembers={teamMembers}
  onClose={closeModal} 
/>

      {/* Original Team Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h3 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
          Full Team Overview
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-48 sm:h-52 md:h-56 object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {member.name}
                </h3>
                <p className="text-blue-600 text-sm mt-1">{member.role}</p>

                <div className="flex justify-center gap-5 mt-4 text-gray-500">
                  <Phone className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                  <Mail className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;