
const ProjectCard = ({ project }) => (
  <div className="group overflow-hidden rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer bg-white">
    <div className="relative aspect-video">
      {/* Image with fallbacks */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/94a3b8/FFFFFF?text=Image+Error'; }}
      />
      {/* Optional: Overlay for hover effect */}
      <div className="absolute inset-0 bg-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-semibold tracking-wider">VIEW PROJECT</span>
      </div>
    </div>
  </div>
);

export default ProjectCard