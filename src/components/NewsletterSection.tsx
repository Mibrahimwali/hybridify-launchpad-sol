
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate subscription success
    toast({
      title: "Subscription successful",
      description: "Thank you for subscribing to our newsletter!",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-hybridify-dark-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg">Subscribe to our newsletter for the latest updates, tutorials, and community events.</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow py-3 px-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              type="submit" 
              className="bg-hybridify-dark-900 hover:bg-hybridify-dark-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
