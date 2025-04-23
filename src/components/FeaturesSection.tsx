
import { ArrowRight, Plug, Shield, Users, LayoutGrid } from 'lucide-react';

const FeatureCard = ({ 
  image, 
  icon, 
  title, 
  description, 
  linkText, 
  borderColor, 
  hoverBorderColor, 
  iconBgFrom, 
  iconBgTo,
  textColor
}) => {
  return (
    <div className={`feature-card bg-hybridify-dark-900 rounded-xl overflow-hidden shadow-lg border ${borderColor} hover:${hoverBorderColor} transition-colors`}>
      <div className="h-64 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-900/70 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
        <img src={image} alt={title} className="w-full h-full object-cover feature-image" />
      </div>
      <div className="p-8 relative">
        <div className={`absolute -top-10 left-8 w-16 h-16 bg-gradient-to-br ${iconBgFrom} ${iconBgTo} rounded-xl flex items-center justify-center shadow-lg`}>
          {icon}
        </div>
        <h3 className={`text-2xl font-bold mb-4 mt-4 ${textColor}`}>{title}</h3>
        <p className="text-gray-300">{description}</p>
        <div className="mt-6 flex justify-end">
          <a href="#" className={`${textColor} hover:text-opacity-80 flex items-center font-medium`}>
            {linkText} <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-hybridify-dark-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          Revolutionize Your Blockchain Journey
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Unleash the power of hybrid tokens with our cutting-edge launchpad and expert team
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureCard 
            image="https://placehold.co/800x600/3B82F6/FFFFFF?text=MPL-Hybrid+Technology"
            icon={<Plug className="text-white text-2xl" />}
            title="Pioneer With MPL-Hybrid"
            description="As specialists in Metaplex's cutting-edge MPL-Hybrid standard, we empower creators to build revolutionary tokens that combine the uniqueness of NFTs with the liquidity of fungible tokens."
            linkText="Explore capabilities"
            borderColor="border-blue-900/30"
            hoverBorderColor="border-blue-500/50"
            iconBgFrom="from-blue-500"
            iconBgTo="to-blue-700"
            textColor="text-blue-400"
          />
          
          <FeatureCard 
            image="https://placehold.co/800x600/8B5CF6/FFFFFF?text=Secure+Minting"
            icon={<Shield className="text-white text-2xl" />}
            title="Lightning-Fast Security"
            description="Experience unparalleled minting speeds with bank-grade security. Our platform ensures your NFTs and tokens are created with industry-leading protection and optimal performance."
            linkText="Learn about our security"
            borderColor="border-purple-900/30"
            hoverBorderColor="border-purple-500/50"
            iconBgFrom="from-purple-500"
            iconBgTo="to-purple-700"
            textColor="text-purple-400"
          />
          
          <FeatureCard 
            image="https://placehold.co/800x600/10B981/FFFFFF?text=Expert+Team"
            icon={<Users className="text-white text-2xl" />}
            title="Solana Masterminds"
            description="Our elite team brings years of specialized experience in Solana development, tokenomics, and Metaplex implementations, having launched numerous successful projects on the blockchain."
            linkText="Meet our experts"
            borderColor="border-green-900/30"
            hoverBorderColor="border-green-500/50"
            iconBgFrom="from-green-500"
            iconBgTo="to-green-700"
            textColor="text-green-400"
          />
          
          <FeatureCard 
            image="https://placehold.co/800x600/F59E0B/FFFFFF?text=All-in-One+Platform"
            icon={<LayoutGrid className="text-white text-2xl" />}
            title="One-Click Launch Power"
            description="From concept to launch in record time. Our all-in-one platform provides everything you need: token creation, smart contracts, ICO management, and community tools in one seamless experience."
            linkText="See our platform"
            borderColor="border-yellow-900/30"
            hoverBorderColor="border-yellow-500/50"
            iconBgFrom="from-yellow-500"
            iconBgTo="to-yellow-700"
            textColor="text-yellow-400"
          />
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to transform your project with hybrid tokens?</h3>
            <a 
              href="#services" 
              className="inline-block mt-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105"
            >
              Explore Our Services <ArrowRight size={16} className="ml-2 inline" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
