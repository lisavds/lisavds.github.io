import { useState } from "react"
import { Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"


export default function ContactSection() {
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">Get in touch to schedule your appointment</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-[#257dc6] flex items-center">
                <Mail className="w-6 h-6 mr-2" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Have questions about our services or want to schedule an appointment? Fill out our contact form and we'll get back to you promptly.
              </p>
              
              <div className="flex items-center mb-6">
                <Mail className="w-5 h-5 text-[#257dc6] mr-3" />
                <a href="mailto:info@evomed.co.nz" className="text-[#257dc6] hover:underline text-lg">
                  info@evomed.co.nz
                </a>
              </div>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="w-full bg-[#257dc6] hover:bg-[#1e6ba8] text-lg py-3">
                    Contact Us
                  </Button>
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
            </CardContent>
          </Card>

          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl text-[#257dc6] flex items-center">
                <MapPin className="w-6 h-6 mr-2" />
                Visit Our Clinic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold text-[#257dc6] text-lg">EvolveMEd</p>
                  <p>The Mill</p>
                  <p>5 Tulip Lane</p>
                  <p>Remarkable Park</p>
                  <p>Frankton</p>
                  <p className="font-semibold text-[#257dc6]">QUEENSTOWN</p>
                </div>
                
                {/* Google Maps Embed */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
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
                  className="w-full border-[#257dc6] text-[#257dc6] hover:bg-[#257dc6] hover:text-white"
                  onClick={() => window.open('https://maps.google.com/?q=5+Tulip+Lane,+Frankton,+Queenstown,+New+Zealand', '_blank')}
                >
                  Open in Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
