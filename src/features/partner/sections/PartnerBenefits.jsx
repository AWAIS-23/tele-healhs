export default function PartnerBenefits() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold text-indigo-600 mb-2">AI‑Driven
            Automation</div>
          <p className="text-gray-600">Reduce per‑patient cost with intelligent
            monitoring.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold text-indigo-600 mb-2">Scalable
            Platform</div>
          <p className="text-gray-600">Grow without proportional headcount.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold text-indigo-600 mb-2">Regulatory
            Ready</div>
          <p className="text-gray-600">Compliant with Medicare CCM/RPM
            standards.</p>
        </div>
      </div>
    </section>
  );
}
