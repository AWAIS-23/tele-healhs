export function HeroTitle() {
  return (
    <div className="mb-8">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6">
        <span className="w-2 h-2 rounded-full bg-blue-500" />
        <span className="text-sm text-gray-600 font-medium">
          Outpatient Care & Specialty Surgery
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
        We Take Care
        <br />
        of Person By Heart
      </h1>

      {/* Description */}
      <p className="max-w-md text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
        With more than 42+ specialties, you can find the care you need for your family.
      </p>
    </div>
  );
}
