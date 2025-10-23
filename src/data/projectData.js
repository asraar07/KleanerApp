const projectData = [
    // Page 1
    { id: 1, title: "Airport Floor Cleaning", subtitle: "Public Spaces", image: "https://placehold.co/600x400/1e293b/ffffff?text=Airport+Project" },
    { id: 2, title: "Industrial Tank Sanitation", subtitle: "Chemical Facilities", image: "https://placehold.co/600x400/4f46e5/ffffff?text=Industrial+Project" },
    { id: 3, title: "Contract Cleaning", subtitle: "Empire Grand Hotel", image: "https://placehold.co/600x400/f59e0b/333333?text=Hotel+Project" },
    { id: 4, title: "Skyscraper Window Wash", subtitle: "High-Access", image: "https://placehold.co/600x400/ef4444/ffffff?text=Window+Wash" },
    { id: 5, title: "Retail Store Deep Clean", subtitle: "Retail Chains", image: "https://placehold.co/600x400/059669/ffffff?text=Retail+Clean" },
    { id: 6, title: "Museum Exhibit Prep", subtitle: "Cultural Venues", image: "https://placehold.co/600x400/9333ea/ffffff?text=Museum+Prep" },
];
const PROJECTS_PER_PAGE = 3;
const MAX_PROJECT_PAGES = Math.ceil(projectData.length / PROJECTS_PER_PAGE);

export {projectData,PROJECTS_PER_PAGE,MAX_PROJECT_PAGES}; 