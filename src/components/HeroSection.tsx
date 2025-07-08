import { MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="h-auto pt-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Welcome */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-6xl font-bold leading-tight text-gray-900">
              Welcome to 
              <span className="block lg:text-8xl text-left">
                Evolve
                <span className="text-[#257dc6]">ME</span>
                d
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed mt-8">
              Expert musculoskeletal care with precision diagnosis and personalised treatment plans.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 text-lg">
                <MapPin className="w-6 h-6 mr-3" />
                <span>The Mill, 5 Tulip Lane, Queenstown</span>
              </div>
            </div>
          </div>

          {/* Right Side - About Dr Pienaar */}
          <div className="space-y-8">
            {/* About Preview */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="mb-6">
                  <img
                    src="/assets/portrait.jpg"
                    alt="Dr Morné Pienaar"
                    className="w-80 h-80 rounded-full mx-auto object-cover shadow-lg border-4 border-[#257dc6]"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Dr Morné Pienaar</h2>
                <p className="text-lg font-semibold text-[#257dc6] mb-1">MUSCULOSKELETAL SPECIALIST</p>
                <p className="text-gray-600">MBChB, DiMM, FDRHMNZ, FNZCMM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
