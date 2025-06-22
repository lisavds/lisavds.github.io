import { useState } from "react"
import { Mail, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#257dc6] via-[#2a87d3] to-[#3092e0] shadow-lg border-b border-white/10 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/assets/logo.png" alt="EvolveMEd Logo" className="h-10 w-auto drop-shadow-sm" />
            </div>
            <nav className="flex space-x-1">
              <a 
                href="#about" 
                className="text-white/90 hover:text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out font-medium text-sm tracking-wide backdrop-blur-sm border border-transparent hover:border-white/20 hover:shadow-lg"
              >
                About
              </a>
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

      {/* Hero Section - Split Layout*/}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
            
            {/* Left Side - Welcome */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-gray-900">
                Welcome to 
                <span className="block text-[#257dc6]">EvolveMEd</span>
                {/* <img src="/assets/logo new.png" alt="EvolveMEd Logo" className="h-50 w-auto rounded" /> */}
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed mt-8">
                Expert musculoskeletal care with precision diagnosis and personalised treatment plans.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="bg-[#257dc6] hover:bg-[#1e6ba8] text-white text-lg px-8 py-4">
                  Learn More About Our Services
                </Button>
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

      {/* You. Better. Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="relative inline-block">
              <p className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#257dc6] tracking-wide">
                You. Better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section with Collage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Collage Image */}
            <div>
              <img
                src="/assets/final 2.jpg"
                alt="Dr Morné Pienaar - Practice Collage"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right Side - Bio Content */}
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                Dr Morné Pienaar is a Musculoskeletal Specialist, with interests in all musculoskeletal disorders,
                musculoskeletal pain and chronic pain management. He is extensively trained in the diagnosis and
                management of a wide range of conditions and has a keen interest in sports medicine and regenerative
                medicine.
              </p>
              <p>
                He had spinal fusion surgery at a young age, two shoulder surgeries and a fractured spine. A keen
                and competitive multisporter and adventure racer, Morné is a testament to the value of a
                multidisciplinary approach and effective rehabilitation.
              </p>
              <p>
                His practice focuses on precision diagnosis, assisted using Point-of-care ultrasound as well as
                ultrasound-guided interventional procedures. Being part of the local Queenstown community for the
                last 20 years, Morné has an extensive networking knowledge to involve other healthcare providers as
                needed.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Problems We Treat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialised care for chronic pain and musculoskeletal conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {["Chronic back pain", "Chronic joint pain", "Persistent tendon pain or weakness"].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#257dc6] text-white rounded-full mb-4 mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-[#257dc6]">{service}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
            <div className="text-center">
              <p className="text-xl">
                Dr Pienaar will work closely with your health providers when putting together a management plan to suit
                your situation and to ensure the best possible outcome for you.
              </p>
            </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance & Fees</h2>
            <p className="text-xl text-gray-600">Multiple coverage options available</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-[#257dc6]">
              <CardHeader>
                <CardTitle className="text-[#257dc6]">ACC Coverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Consultations covered by ACC are free as long as referral criteria are met.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#257dc6]">
              <CardHeader>
                <CardTitle className="text-[#257dc6]">Health Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">We are affiliated providers for Southern Cross and nib Health partner.</p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-[#257dc6]">
              <CardHeader>
                <CardTitle className="text-[#257dc6]">Other Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  For other health insurance or if you are not covered, contact us for further information as fees vary
                  depending on the nature of the consultation and/or procedure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch to schedule your appointment</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#257dc6] flex items-center">
                  <Mail className="w-6 h-6 mr-2" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#257dc6] mr-3" />
                    <a href="mailto:info@evomed.co.nz" className="text-[#257dc6] hover:underline text-lg">
                      info@evomed.co.nz
                    </a>
                  </div>
                  
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-[#257dc6] hover:bg-[#1e6ba8]">Send Message</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle className="text-[#257dc6]">Contact EvolveMEd</DialogTitle>
                        <DialogDescription>
                          Fill out the form below and we'll get back to you as soon as possible.
                        </DialogDescription>
                      </DialogHeader>
                      <form action="https://formsubmit.co/fca523378823f582de89d2594207eda2" method="POST" className="space-y-4">
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://yoursite.com/thank-you" />
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#257dc6] focus:border-transparent"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#257dc6] focus:border-transparent"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#257dc6] focus:border-transparent"
                            placeholder="Your phone number"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            required
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#257dc6] focus:border-transparent resize-none"
                            placeholder="Tell us about your condition or how we can help..."
                          />
                        </div>
                        <div className="flex gap-3 pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsDialogOpen(false)}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                          <Button type="submit" className="flex-1 bg-[#257dc6] hover:bg-[#1e6ba8]">
                            Send Message
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-[#257dc6] flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-[#257dc6] text-lg">EvolveMEd</p>
                  <p>The Mill</p>
                  <p>5 Tulip Lane</p>
                  <p>Remarkable Park</p>
                  <p>Frankton</p>
                  <p className="font-semibold text-[#257dc6]">QUEENSTOWN</p>
                </div>
                
                {/* Google Maps Embed */}
                <div className="bg-gray-100 rounded-lg overflow-hidden my-4 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.0842868447897!2d168.73591321570906!3d-45.06359447909726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7c2cf63%3A0x2a5c5b4b5cf2f5d4!2s5%20Tulip%20Ln%2C%20Frankton%2C%20Queenstown%209300%2C%20New%20Zealand!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="EvolveMEd Location"
                  ></iframe>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full mt-4 border-[#257dc6] text-[#257dc6] hover:bg-[#257dc6] hover:text-white"
                  onClick={() => window.open('https://maps.google.com/?q=5+Tulip+Lane,+Frankton,+Queenstown,+New+Zealand', '_blank')}
                >
                  Open in Google Maps
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#257dc6] mb-4">EvolveMEd</h3>
            <p className="text-gray-400 mb-4">Expert musculoskeletal care in Queenstown</p>
            <p className="text-gray-500">&copy; 2025 EvolveMEd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
