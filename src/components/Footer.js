import React from "react";

const Footer = () => {
    return (
       <footer className="bg-gray-900 py-12">
  <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-sm">
    
    <div className="mb-4 md:mb-0 text-center md:text-left">
      <p>&copy; 2025 StackStir. All rights reserved.</p>
      <p className="text-xs mt-1">Collaborate. Create. Conquer.</p>
    </div>

    <nav className="mb-4 md:mb-0">
      <ul className="flex flex-wrap justify-center md:justify-start space-x-4 mr-3">
        <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
        <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
        <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
      </ul>
    </nav>

    <div className="flex space-x-4">
      <a href="https://github.com/your-username/StackStir-Platform" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.01-1.03-.015-1.994-2.793.607-3.379-1.147-3.379-1.147-.454-1.156-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.529 2.341 1.089 2.91.833.091-.647.35-1.089.636-1.338-2.22-.253-4.555-1.119-4.555-4.93 0-1.09.39-1.984 1.03-2.685-.103-.253-.448-1.27.097-2.659 0 0 .84-.27 2.75 1.025.79-.22 1.63-.33 2.47-.33.84 0 1.68.11 2.47.33 1.91-1.295 2.75-1.025 2.75-1.025.546 1.39.202 2.406.099 2.659.64.701 1.027 1.595 1.027 2.685 0 3.82-2.339 4.673-4.566 4.92.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.179.579.688.482C21.137 20.281 24 16.516 24 12.017 24 6.484 19.522 2 14 2h-2Z" clipRule="evenodd" /></svg>
      </a>
      <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.21-6.892L4.93 21.75H1.625l7.73-8.835L1.25 2.25h3.308l5.379 6.148L14.498 2.25h3.746zm-1.87 17.54L12.01 9.27L4.426 3.25H2.87l7.322 8.354L17.58 21.75h1.564z"></path>
        </svg>
      </a>
    </div>
  </div>
</footer>

    )
}

export default Footer;