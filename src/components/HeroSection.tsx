
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-purple-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-1 py-16">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Fuse. Launch. Thrive.
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The premier launchpad for Hybrid NFTs, CoreNFTs, and SPL tokens on Solana powered by Metaplex technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#community" 
              className="btn-glow bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg"
            >
              Start Building
            </a>
            <a 
              href="#features" 
              className="border-2 border-white hover:border-blue-300 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <img 
            src="https://placehold.co/600x400/5271FF/FFFFFF?text=Hybrid+NFT+Launchpad" 
            alt="Hybrid NFT Launchpad" 
            className="rounded-xl shadow-2xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
