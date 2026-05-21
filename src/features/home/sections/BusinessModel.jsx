import { Badge } from "../../../components/Badge";

export function BusinessModel() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <Badge 
            variant="emerald" 
            icon={
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            className="mb-6"
          >
            Business Model
          </Badge>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Recurring, Scalable, <span className="text-emerald-700">Reimbursed</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Care-as-a-Service */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-3">
            B2B
          </span>
          <h3 className="text-base font-semibold text-gray-900 mb-3">
            Care-as-a-Service
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            We partner with independent practices, FQHCs, ACOs, pharmacies, and
            health systems. Health Shield handles enrollment, device logistics,
            AI monitoring, clinical support, and billing — providers keep their
            payer relationships, we earn a{" "}
            <strong className="text-gray-800 font-medium">
              revenue-share or PMPM fee
            </strong>
            .
          </p>
        </div>

        {/* Reimbursement Stack */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 mb-3">
            2026
          </span>
          <h3 className="text-base font-semibold text-gray-900 mb-4">
            Medicare reimbursement stack
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {[
              { code: "99490 + add-ons", name: "CCM", amount: "~$66–$116/mo" },
              { code: "99454 / 99457", name: "RPM", amount: "~$50–$100+/mo" },
            ].map((item) => (
              <div key={item.name} className="bg-gray-50 rounded-xl p-4">
                <p className="font-mono text-[10px] text-gray-400 mb-1">{item.code}</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.name}</p>
                <p className="font-mono text-sm font-medium text-emerald-700">{item.amount}</p>
              </div>
            ))}
            <div className="col-span-2 bg-gray-50 rounded-xl p-4">
              <p className="font-mono text-[10px] text-gray-400 mb-1">Stacked episodes</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">RTM + TCM</p>
              <p className="font-mono text-sm font-medium text-emerald-700">~$150–$300+/mo total</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900">80–90%</p>
            <p className="text-sm text-gray-500 mt-0.5">Gross margins at scale</p>
          </div>
        </div>
        <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-emerald-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-900">Sticky ARR</p>
            <p className="text-sm text-gray-500 mt-0.5">
              Predictable, recurring revenue per enrolled patient
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
