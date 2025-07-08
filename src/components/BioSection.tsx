export default function BioSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Collage Image */}
          <div>
            <img
              src="/assets/final 2.jpg"
              alt="Dr Morné Pienaar - Practice Collage"
              className="w-md h-auto rounded-2xl shadow-lg"
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
  );
}
