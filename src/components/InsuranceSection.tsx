import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function InsuranceSection() {
  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance & Fees</h2>
          <p className="text-xl text-gray-600">Multiple coverage options available</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-[#257dc6]">
            <CardHeader className="text-center">
              <CardTitle className="text-[#257dc6] text-xl">ACC Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Consultations covered by ACC are free as long as referral criteria are met.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-[#257dc6]">
            <CardHeader className="text-center">
              <CardTitle className="text-[#257dc6] text-xl">Health Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">We are affiliated providers for Southern Cross and nib Health partner.</p>
              <div className="flex items-center justify-center gap-6 mt-4">
                <img 
                  src="/assets/sc-logo.jpeg" 
                  alt="Southern Cross Logo" 
                  className="h-12 w-auto object-contain"
                />
                <img 
                  src="/assets/nib-logo.png" 
                  alt="nib Health Logo" 
                  className="h-12 w-auto object-contain"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-[#257dc6]">
            <CardHeader className="text-center">
              <CardTitle className="text-[#257dc6] text-xl">Other Insurance</CardTitle>
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
  );
}
