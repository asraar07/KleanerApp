import React from "react"
import ProjectCard from "../components/common/ProjectCard";
import Projects from "../data/projects2Data"
const Project = () => {
  const [activeFilter, setActiveFilter] = React.useState('Projects');

  // Placeholder URL for the background image, simulating the professional service look
  const bannerImageUrl = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80';

  const filterButtonClasses = (filter) =>
    `px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
      activeFilter === filter
        ? 'bg-white text-indigo-700 shadow-md'
        : 'bg-transparent text-gray-200 hover:text-white hover:bg-white/10'
    }`;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* 1. Header/Banner Section */}
      <header
        className="relative h-[300px] md:h-[250px] flex items-end"
        style={{
          backgroundImage: `url(${bannerImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark Overlay to improve text readability, mimicking the original image's blurred effect */}
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"></div>

        {/* Content Container */}
        <div className="relative container mx-auto px-4 py-12 text-white">
          <p className="text-lg uppercase tracking-widest opacity-80 mb-1">
            Selection of our work
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Latest Projects
          </h1>

          {/* Navigation/Filter Bar */}
          <div className="flex space-x-4">
            <button
              className={filterButtonClasses('The Exterior')}
              onClick={() => setActiveFilter('The Exterior')}
            >
              The Exterior
            </button>
            <button
              className={filterButtonClasses('Projects')}
              onClick={() => setActiveFilter('Projects')}
            >
              Projects
            </button>
          </div>
        </div>
      </header>

      {/* 2. Projects Grid Section */}
      <main className="container mx-auto px-4 py-16">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Project;