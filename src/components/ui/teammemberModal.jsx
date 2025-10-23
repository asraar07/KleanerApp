import React from 'react';
import { Phone, Mail, X } from "lucide-react"; 
import teamMembers from '../../data/teamMembers'; // Ensure you import teamMembers here if it's used directly in the modal component

// Helper component for a single profile card (used inside the modal)
const ProfileCard = ({ member }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100">
        <img
            src={member.img}
            alt={member.name}
            className="w-full h-48 object-cover"
        />
        <div className="p-4 text-center">
            <h4 className="font-semibold text-gray-800 text-lg">{member.name}</h4>
            <p className="text-blue-600 text-sm mt-1">{member.role}</p>
            <div className="flex justify-center gap-4 mt-3 text-gray-500">
                <Phone className="w-5 h-5" />
                <Mail className="w-5 h-5" />
            </div>
        </div>
    </div>
);


// The main modal component
// NOTE: We assume the parent (About.jsx) passes the selected 'role' string and the 'teamMembers' array.
const TeamMemberModal = ({ role, teamMembers, onClose }) => {
    if (!role) return null; 

    // 1. Filter the members for the selected role
    const membersForRole = teamMembers.filter(member => member.role === role);
    const memberCount = membersForRole.length;

    // 2. Determine modal and grid classes based on the count
    let modalWidthClass;
    let gridColsClass;
    
    if (memberCount === 1) {
        // Full width for single profile, centered content
        modalWidthClass = "max-w-md"; // e.g., 28rem (like your single card screenshot)
        gridColsClass = "grid-cols-1"; 
    } else if (memberCount === 2) {
        modalWidthClass = "max-w-3xl"; // e.g., 48rem
        gridColsClass = "grid-cols-2";
    } else { // 3 or more (Industrial Cleaner has 3)
        modalWidthClass = "max-w-5xl"; // e.g., 64rem
        gridColsClass = "grid-cols-2 sm:grid-cols-3";
    }


    // 3. Conditional rendering for a single member vs. multiple members
    const isSingleMember = memberCount === 1;
    const content = isSingleMember 
        ? (
            // Layout for a single person (like your single card screenshot)
            <div className="flex flex-col items-center">
                <img
                    src={membersForRole[0].img}
                    alt={membersForRole[0].name}
                    className="w-full h-80 object-cover rounded-t-xl" 
                />
                <div className="p-6 text-center">
                    <h3 className="font-bold text-gray-900 text-2xl">{membersForRole[0].name}</h3>
                    <p className="text-blue-600 text-lg mt-1 font-medium">{membersForRole[0].role}</p>
                    <p className="text-gray-600 mt-4 text-sm italic border-t pt-4">
                        "Committed to excellence in every aspect of our work."
                    </p>
                    <div className="flex justify-center gap-6 mt-5 text-gray-500">
                        <div className="flex items-center gap-2">
                            <Phone className="w-5 h-5 text-blue-500" />
                            <span className="text-sm">{membersForRole[0].phone || "N/A"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="w-5 h-5 text-blue-500" />
                            <span className="text-sm">{membersForRole[0].email || "N/A"}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
        : (
            // Layout for multiple people (Grid)
            <>
                <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
                    Team: {role}
                </h3>
                <div className={`grid ${gridColsClass} gap-6`}>
                    {membersForRole.map((member, index) => (
                        <ProfileCard key={index} member={member} />
                    ))}
                </div>
            </>
        );


    return (
        <div 
           className="fixed inset-0 z-50 bg-white/30 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" 
            onClick={onClose} 
        >
            {/* Modal Container: Applies dynamic width class */}
            <div 
                className={`bg-white rounded-xl shadow-2xl ${modalWidthClass} w-full transform transition-all duration-300 relative my-8 p-6`}
                onClick={(e) => e.stopPropagation()} 
            >
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white text-gray-800 hover:bg-gray-100 z-10 shadow-md"
                    aria-label="Close profile"
                >
                    <X className="w-5 h-5" />
                </button>

                {content} {/* Render the chosen layout */}
                
            </div>
        </div>
    );
};

export default TeamMemberModal;