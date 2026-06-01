"use client";

import { Badge } from "../../../components/Badge";
import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";

export function PartnerHeroNew() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-gray-100">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/40 pointer-events-none" />

      {/* Glow effects */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl" />

      <Container className="relative py-20 ">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            <Badge variant="blue" showDot className="mb-6">
              Strategic Partnerships
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Partner With Us to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Transform Chronic Care
              </span>
            </h1>

            <p className="text-xl font-semibold text-gray-700 mb-6">
              AI-Powered Remote Care That Delivers Results — Together
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              We’re building more than technology — we’re building a movement to close the chronic care gap for millions of patients.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We’re actively seeking strategic partners who want to make care proactive, scalable, and financially sustainable.
            </p>

            {/* Highlight */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-8 text-gray-700">
              <strong>Health systems, ACOs, device manufacturers, payers, and tech partners</strong> can expand reach, improve outcomes, and unlock new revenue streams.
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href="#become-partner"
                variant="primary"
                size="lg"
                className="bg-[#0e4060] hover:bg-[#0a2e45] text-white px-8"
              >
                Become a Partner
              </Button>

              <Button
                href="#who-we-partner-with"
                variant="outline"
                size="lg"
                className="px-8"
              >
                Who We Work With
              </Button>
            </div>

          </div>

          {/* RIGHT VISUAL CARD */}
          <div className="relative">

            <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-8 md:p-10 relative overflow-hidden">

              {/* top glow bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Why Partner With Us?
              </h3>

              <div className="space-y-5 text-gray-600">

                <div className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                  <p>Improve patient outcomes through continuous remote monitoring</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-indigo-500" />
                  <p>Reduce hospital readmissions and operational costs</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-purple-500" />
                  <p>Unlock scalable value-based care revenue streams</p>
                </div>

                <div className="flex gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-teal-500" />
                  <p>Seamless integration with existing healthcare systems</p>
                </div>

              </div>

              {/* mini stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-gray-100">

                <div>
                  <p className="text-2xl font-bold text-gray-900">24/7</p>
                  <p className="text-sm text-gray-500">Remote Monitoring</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-gray-900">Scalable</p>
                  <p className="text-sm text-gray-500">Care Network</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}