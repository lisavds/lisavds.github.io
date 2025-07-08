export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#257dc6] via-[#2a87d3] to-[#3092e0] shadow-lg border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="/assets/logo.png" alt="EvolveMEd Logo" className="h-10 w-auto drop-shadow-sm" />
          </div>
          <nav className="flex space-x-1">
            <a 
              href="#services" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm tracking-wide backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg"
            >
              Services
            </a>
            <a 
              href="#contact" 
              className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm tracking-wide backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
