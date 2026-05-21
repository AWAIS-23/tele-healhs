import { Zap } from "lucide-react";

export default function ArticleContentSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[3fr_2fr]">
            <div className="min-w-0">
              <div className="rounded-xl border-l-4 border-blue-600 bg-gray-50 p-7 shadow-sm mb-10">
                <div className="mb-3 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-blue-600" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Quick Answer</span>
                </div>
                <p className="leading-relaxed text-gray-900">
                  CCN Health integrates Ethizo with facility EHRs (PointClickCare, ALIS, MatrixCare, August Health) via secure API. This dual-EHR architecture is purpose-built for senior care physicians — monitoring data flows to facility records while billing documentation routes to Ethizo for Medicare claims across RPM, CCM, PCM, BHI, and RTM programs.
                </p>
              </div>

              <div className="mb-10 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-500">Deep Dive</span>
                <div className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent"></div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">The Dual-EHR Reality for Senior Care Physicians</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Senior care physicians operate in a fundamentally different workflow than office-based primary care. A geriatrician or post-acute medicine specialist does not see patients in a clinic waiting room all day. They round at skilled nursing facilities, assisted living communities, memory care units, and CCRCs — often visiting three or four facilities in a single day. Each of those facilities runs its own EHR. PointClickCare at the SNF down the road. ALIS at the assisted living community across town. MatrixCare at the post-acute facility on the other side of the county.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  But the physician documents and bills through their own practice EHR — Ethizo, which is specifically designed for the senior care physician workflow. Referral management, rounding schedules, billing documentation, and care plan coordination all live in Ethizo because it was built for this exact practice model.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This is the dual-EHR reality. Patient clinical data lives in the facility EHR. Physician documentation and billing live in the practice EHR. And when you add remote patient monitoring or chronic care management to the equation, the question becomes: how does monitoring data reach both systems without manual transcription, faxing, or duplicate data entry?
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  That is the problem CCN Health solves for Ethizo practices.
                </p>

                <hr className="my-8 border-gray-200" />

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How CCN Health Bridges Ethizo and Facility EHRs</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  CCN Health sits between Ethizo and the facility EHR, integrating with both systems simultaneously via secure API. Monitoring data from RPM devices flows in two directions — clinical readings post to the facility EHR for nursing staff workflows, while CPT-ready billing documentation routes to Ethizo for the ordering physician's claims submission.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Data Flow Architecture</h3>
                <div className="overflow-x-auto mb-8">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Data Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Source</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Destination</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Patient demographics</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Facility EHR</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">CCN Health</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Auto-enrollment, resident identification</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Vital sign readings</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">RPM devices</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Facility EHR + Ethizo dashboard</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Clinical workflows + physician review</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">ADT events</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Facility EHR</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">CCN Health</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Protocol adjustments on admission, transfer, discharge</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Care plan data</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Facility EHR</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">CCN Health</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Monitoring thresholds informed by treatment goals</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Billing documentation</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">CCN Health</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Ethizo</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">CPT-ready records for Medicare claims submission</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Care coordination notes</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">CCN Health</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Facility EHR + Ethizo</td>
                        <td className="px-4 py-3 text-sm text-gray-700 border-b">Complete clinical context in both systems</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Alert notifications</td>
                        <td className="px-4 py-3 text-sm text-gray-700">CCN Health</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Facility EHR + Ethizo</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Threshold violations surfaced to nursing staff and physician</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Ethizo-Specific Integration Features</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Vital Sign Dashboard</strong> — Device readings from all connected RPM monitors appear within Ethizo's patient vital sign dashboard. Physicians reviewing a patient chart in Ethizo see trending blood pressure, weight, glucose, and pulse oximetry data without opening a separate platform. This is critical for senior care physicians who manage large patient panels across facilities — switching between systems for every patient is not operationally feasible.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Referral Management</strong> — Ethizo's referral management capabilities integrate with facility ADT events flowing through CCN Health. When a patient is admitted to a facility, the referral status updates in Ethizo. When a patient transfers from assisted living to skilled nursing, the physician's Ethizo record reflects the change and monitoring protocols adjust automatically. This keeps the physician's patient roster current across every facility they serve.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  <strong>Automated Billing Documentation</strong> — CCN Health generates time-tracked, CPT-coded billing records for all five Medicare programs and routes them directly to Ethizo. The physician practice does not need to manually compile monitoring logs, calculate time thresholds, or select CPT codes. Documentation arrives in Ethizo ready for claims submission — 99453 through 99458 for RPM, 99490 and 99491 for CCM, and the corresponding codes for PCM, BHI, and RTM.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  <strong>Care Plan Synchronization</strong> — Care plans created in Ethizo and care plans documented in the facility EHR are both visible to CCN Health's monitoring engine. Alert thresholds, medication context, and treatment goals from both systems inform how device readings are evaluated. A blood pressure spike that would be routine for one patient might trigger an immediate escalation for another — the monitoring intelligence draws from both EHRs to make that determination.
                </p>

                <hr className="my-8 border-gray-200" />

                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Facility EHR Pairings</h2>
                <p className="text-gray-600 leading-relaxed">
                  CCN Health currently integrates Ethizo with four leading facility EHR platforms:
                </p>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Table of Contents</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#the-dual-ehr-reality" className="text-gray-600 hover:text-blue-600 transition-colors">
                        The Dual-EHR Reality
                      </a>
                    </li>
                    <li>
                      <a href="#how-ccn-health-bridges" className="text-gray-600 hover:text-blue-600 transition-colors">
                        How CCN Health Bridges
                      </a>
                    </li>
                    <li>
                      <a href="#data-flow-architecture" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Data Flow Architecture
                      </a>
                    </li>
                    <li>
                      <a href="#ethizo-specific-features" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Ethizo-Specific Features
                      </a>
                    </li>
                    <li>
                      <a href="#facility-ehr-pairings" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Facility EHR Pairings
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
