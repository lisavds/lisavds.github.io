import { CheckCircle } from "lucide-react"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"


export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive musculoskeletal care with precision diagnosis and personalised treatment plans
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#257dc6] text-white rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl text-[#257dc6] mb-4">Consultation & Assessment</CardTitle>
              <p className="text-gray-600 text-sm leading-relaxed">
                During your first consultation Dr Pienaar will collect a thorough history of your medical health and background and perform a physical examination that may also include a point of care ultrasound examination.
              </p>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#257dc6] text-white rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl text-[#257dc6] mb-4">Precision Diagnosis</CardTitle>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in precision diagnosis with the use of high-tech imaging such as MRI, CT scans etc. to then work towards precise diagnosis to guide our treatment.
              </p>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#257dc6] text-white rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl text-[#257dc6] mb-4">Multidisciplinary Treatment</CardTitle>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our treatment and rehabilitation plan would usually involve multiple Allied Health professionals working towards a common goal to treat your pain.
              </p>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#257dc6] text-white rounded-full mb-4 mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <CardTitle className="text-xl text-[#257dc6] mb-4">Intervention</CardTitle>
              <p className="text-gray-600 text-sm leading-relaxed">
                Common sources of pain can be treated by minimal interventional treatment. All our interventions are image guided. We refer and coordinate interventions that we don't offer, including surgery, if needed.
              </p>
            </CardHeader>
          </Card>
        </div>

        {/* Common Problems We Treat - Made Less Prominent */}
        {/* <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Common Problems We Treat</h3>
            <p className="text-gray-600">
              Specialised care for chronic pain and musculoskeletal conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {["Chronic back pain", "Chronic joint pain", "Persistent tendon pain or weakness"].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 bg-[#257dc6] text-white rounded-full mb-3 mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-medium text-[#257dc6]">{service}</h4>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-700">
              Dr Pienaar will work closely with your health providers when putting together a management plan to suit
              your situation and to ensure the best possible outcome for you.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
