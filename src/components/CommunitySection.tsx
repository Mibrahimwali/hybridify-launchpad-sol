
const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-gradient-to-b from-hybridify-dark-800 to-hybridify-dark-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://placehold.co/600x400/5271FF/FFFFFF?text=Join+Our+Community" 
              alt="Hybridify Community" 
              className="rounded-xl shadow-2xl mx-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Join the Hybridify Community</h2>
            <p className="text-xl mb-6">
              Connect with creators, developers, and enthusiasts exploring the future of hybrid NFTs on Solana.
            </p>
            <p className="mb-8 text-gray-300">
              Get early access to new features, participate in community events, and shape the future of hybrid token technology. Our growing ecosystem welcomes builders of all experience levels.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://x.com/hybridify" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-glow bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center"
              >
                <span className="mr-2">Follow on X</span>
              </a>
              <a 
                href="https://discord.gg/hybridify" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-glow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full flex items-center justify-center"
              >
                <span className="mr-2">Join Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
