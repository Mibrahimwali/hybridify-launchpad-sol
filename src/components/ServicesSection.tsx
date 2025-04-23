
import { ArrowRight, Package, Coins, Rocket } from 'lucide-react';

const ServiceCard = ({ icon, title, description, checkItems, linkColor }) => {
  return (
    <div className="p-8 bg-hybridify-dark-800 rounded-xl text-center card-hover border border-gray-700">
      <div className={`w-20 h-20 mx-auto mb-6 ${linkColor} rounded-full flex items-center justify-center`}>
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="text-left text-gray-300 space-y-2 mb-6">
        {checkItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`text-${linkColor.replace('bg-', '')} mr-2`}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a href="#" className={`inline-block text-${linkColor.replace('bg-', '')} hover:text-opacity-80 font-medium`}>
        Learn more <ArrowRight size={16} className="ml-1 inline" />
      </a>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-hybridify-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Specialized Services</h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Comprehensive Metaplex-powered solutions for your Solana blockchain projects
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ServiceCard 
            icon={<Package size={28} className="text-white" />}
            title="Hybrid NFTs with MPL-Hybrid"
            description="Our flagship service helps you create and launch revolutionary hybrid tokens using Metaplex's MPL-Hybrid standard, combining NFT uniqueness with fungible token utility."
            checkItems={[
              "Programmable liquidity features",
              "Customizable token emission schedules",
              "Seamless NFT-to-token conversion"
            ]}
            linkColor="bg-blue-500"
          />
          
          <ServiceCard 
            icon={<Coins size={28} className="text-white" />}
            title="CoreNFTs via Metaplex"
            description="Create premium NFT collections with our secure and fast minting experience powered by Metaplex technology, perfect for art, collectibles, and utility NFTs."
            checkItems={[
              "Metadata-rich NFT collections",
              "Optimized minting experience",
              "Advanced royalty enforcement"
            ]}
            linkColor="bg-purple-500"
          />
          
          <ServiceCard 
            icon={<Rocket size={28} className="text-white" />}
            title="SPL Token & ICO Launch"
            description="Complete SPL token creation and ICO launch services using Metaplex technology, with expert guidance on tokenomics and distribution strategies."
            checkItems={[
              "Compliant token creation",
              "Secure ICO smart contracts",
              "Strategic distribution planning"
            ]}
            linkColor="bg-green-500"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
