
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "CryptoKingdoms",
    description: "A play-to-earn game utilizing hybrid NFTs for character assets and in-game currency.",
    image: "https://placehold.co/600x400/3B82F6/FFFFFF?text=CryptoKingdoms",
    launchDate: "May 2025",
    category: "hybrid",
    borderColor: "border-blue-900/30",
    hoverBorderColor: "border-blue-500/50",
    badgeColor: "bg-blue-500",
    ctaColor: "bg-blue-600 hover:bg-blue-700",
    dateColor: "text-blue-400"
  },
  {
    id: 2,
    title: "PixelArtists Collective",
    description: "A community-driven NFT collection featuring works from 50+ pixel artists worldwide.",
    image: "https://placehold.co/600x400/8B5CF6/FFFFFF?text=PixelArtists",
    launchDate: "April 2025",
    category: "nft",
    borderColor: "border-purple-900/30",
    hoverBorderColor: "border-purple-500/50",
    badgeColor: "bg-purple-500",
    ctaColor: "bg-purple-600 hover:bg-purple-700",
    dateColor: "text-purple-400"
  },
  {
    id: 3,
    title: "GreenFinance DAO",
    description: "A decentralized finance platform focused on funding sustainable energy projects.",
    image: "https://placehold.co/600x400/10B981/FFFFFF?text=GreenFinance",
    launchDate: "March 2025",
    category: "token",
    borderColor: "border-green-900/30",
    hoverBorderColor: "border-green-500/50",
    badgeColor: "bg-green-500",
    ctaColor: "bg-green-600 hover:bg-green-700",
    dateColor: "text-green-400"
  },
  {
    id: 4,
    title: "MusicDAO",
    description: "A music platform where artists release songs as hybrid NFTs with royalty-sharing tokens.",
    image: "https://placehold.co/600x400/F59E0B/FFFFFF?text=MusicDAO",
    launchDate: "February 2025",
    category: "hybrid",
    borderColor: "border-yellow-900/30",
    hoverBorderColor: "border-yellow-500/50",
    badgeColor: "bg-blue-500",
    ctaColor: "bg-yellow-600 hover:bg-yellow-700",
    dateColor: "text-yellow-400"
  },
  {
    id: 5,
    title: "Sports Memorabilia",
    description: "Digital collectibles featuring iconic moments from professional sports leagues.",
    image: "https://placehold.co/600x400/EF4444/FFFFFF?text=SportsMemorabilia",
    launchDate: "January 2025",
    category: "nft",
    borderColor: "border-red-900/30",
    hoverBorderColor: "border-red-500/50",
    badgeColor: "bg-purple-500",
    ctaColor: "bg-red-600 hover:bg-red-700",
    dateColor: "text-red-400"
  },
  {
    id: 6,
    title: "Quantum DeFi",
    description: "A next-generation DeFi protocol with innovative yield optimization strategies.",
    image: "https://placehold.co/600x400/6366F1/FFFFFF?text=DeFiProtocol",
    launchDate: "December 2024",
    category: "token",
    borderColor: "border-indigo-900/30",
    hoverBorderColor: "border-indigo-500/50",
    badgeColor: "bg-green-500",
    ctaColor: "bg-indigo-600 hover:bg-indigo-700",
    dateColor: "text-indigo-400"
  }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: '25%', left: '0' });
  const filterRef = useRef(null);

  // Filter projects when activeFilter changes
  useEffect(() => {
    const filtered = activeFilter === 'all' 
      ? projectsData 
      : projectsData.filter(project => project.category === activeFilter);
      
    // Add a small delay for animation purposes
    setTimeout(() => {
      setFilteredProjects(filtered);
    }, 300);
  }, [activeFilter]);

  const handleFilterClick = (filter, index) => {
    setActiveFilter(filter);
    
    // Calculate width and position for indicator
    if (filterRef.current) {
      const width = 100 / 4; // 4 filter buttons
      setIndicatorStyle({
        width: `${width}%`,
        left: `${index * width}%`
      });
    }
  };
  
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-hybridify-dark-900 to-hybridify-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Latest Project Launches
        </h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Explore successful projects launched on our platform
        </p>
        
        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div ref={filterRef} className="inline-flex bg-hybridify-dark-800 p-1.5 rounded-full shadow-lg relative">
            <div 
              className="filter-indicator absolute h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-in-out" 
              style={{ width: indicatorStyle.width, left: indicatorStyle.left }}
            ></div>
            <button 
              className={`filter-btn px-6 py-2 rounded-full ${activeFilter === 'all' ? 'text-white font-semibold' : 'text-gray-400'} transition-all relative z-10`} 
              onClick={() => handleFilterClick('all', 0)}
            >
              All
            </button>
            <button 
              className={`filter-btn px-6 py-2 rounded-full ${activeFilter === 'hybrid' ? 'text-white font-semibold' : 'text-gray-400'} transition-all relative z-10`}
              onClick={() => handleFilterClick('hybrid', 1)}
            >
              Hybrid
            </button>
            <button 
              className={`filter-btn px-6 py-2 rounded-full ${activeFilter === 'nft' ? 'text-white font-semibold' : 'text-gray-400'} transition-all relative z-10`}
              onClick={() => handleFilterClick('nft', 2)}
            >
              NFT
            </button>
            <button 
              className={`filter-btn px-6 py-2 rounded-full ${activeFilter === 'token' ? 'text-white font-semibold' : 'text-gray-400'} transition-all relative z-10`}
              onClick={() => handleFilterClick('token', 3)}
            >
              Token
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className={`project-card bg-hybridify-dark-800 rounded-xl overflow-hidden shadow-lg ${project.borderColor} hover:${project.hoverBorderColor}`}
              data-category={project.category}
            >
              <div className="h-48 overflow-hidden relative">
                <div className={`absolute top-3 right-3 ${project.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`${project.dateColor} text-sm`}>Launched: {project.launchDate}</span>
                  <a href="#" className={`text-white ${project.ctaColor} px-4 py-1.5 rounded-lg text-sm font-medium transition-colors`}>
                    View Case Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
          >
            View All Projects <ArrowRight size={16} className="ml-2 inline" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
