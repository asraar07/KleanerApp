import {projectData,PROJECTS_PER_PAGE, MAX_PROJECT_PAGES} from '../../data/projectData'
import React, { useState } from 'react'
// Note: MAX_PROJECT_PAGES and PROJECTS_PER_PAGE are correctly imported and used below



// Renamed prop to onButtonClick for consistency
const ProjectsSection = ({ onButtonClick }) => { 
    const [currentProjectPage, setCurrentProjectPage] = useState(0);
     const prevProjectPage = () => {
        setCurrentProjectPage((prev) => (prev === 0 ? MAX_PROJECT_PAGES - 1 : prev - 1));
    };

    const nextProjectPage = () => {
        setCurrentProjectPage((prev) => (prev === MAX_PROJECT_PAGES - 1 ? 0 : prev + 1));
    };

    // --- FIX: Slice the data for the current page ---
    const startIndex = currentProjectPage * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const visibleProjects = projectData.slice(startIndex, endIndex);
    // ------------------------------------------------

  return (
    <div>
       <section className="py-20 px-4 bg-gray-800" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/black-felt.png')", backgroundRepeat: 'repeat' }}>
                <div className="max-w-7xl mx-auto">
                    <p className="text-yellow-500 font-semibold text-sm text-center tracking-widest uppercase mb-2">
                        Our Latest
                    </p>
                    <h2 className="text-4xl font-extrabold text-white text-center mb-12">
                        Cleaning Projects
                    </h2>
                    
                    <div className="relative">
                        {/* Project Slides Wrapper (Visible area) */}
                        <div className="overflow-hidden rounded-xl shadow-2xl">
                            {/* Inner Slider Container: Now holds only the current page, so width/transform are simple */}
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ width: `100%`, transform: `translateX(0)` }}
                            >
                                {/* Use the new visibleProjects array */}
                                {visibleProjects.map((project, index) => {
                                    // Check if this is the last item on the visible page
                                    const isOverlayed = index === visibleProjects.length - 1;

                                    return (
                                        <div 
                                            key={project.id} 
                                            // Each visible card takes up 1/3 of the visible area
                                            style={{ width: `${100 / PROJECTS_PER_PAGE}%` }} 
                                            className="flex-shrink-0 relative overflow-hidden h-[300px] md:h-[400px]"
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                            />

                                            {/* Conditional Overlay is now correct */}
                                            {isOverlayed && (
                                                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 text-white transition duration-300 hover:bg-opacity-40">
                                                    <p className="text-sm font-light text-yellow-400 mb-1">
                                                        {project.subtitle}
                                                    </p>
                                                    <h4 className="text-2xl font-bold">
                                                        {project.title}
                                                    </h4>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        {/* Navigation Buttons (Unchanged) */}
                        <button
                            onClick={prevProjectPage}
                            className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 p-3 rounded-full text-white hover:bg-opacity-90 transition-all z-10 shadow-lg"
                            aria-label="Previous Projects"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextProjectPage}
                            className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-gray-700 bg-opacity-70 p-3 rounded-full text-white hover:bg-opacity-90 transition-all z-10 shadow-lg"
                            aria-label="Next Projects"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* "View Projects" Button */}
                    <div className="text-center mt-12">
                         <button
                            // Using the consistent prop name
                            onClick={() => onButtonClick("View Projects")} 
                            className="px-8 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-200 shadow-xl border-2 border-transparent hover:border-white"
                        >
                            View Projects
                        </button>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ProjectsSection