const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: "By accessing and using the Health Shield website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this service."
  },
  {
    number: "02",
    title: "Modification of Terms",
    content: "Health Shield reserves the right to change these terms and conditions at any time. Changes will be posted on this page with the updated date. Your continued use of the service after such changes constitutes your acceptance of the new terms."
  },
  {
    number: "03",
    title: "Services Description",
    content: "Health Shield provides remote patient monitoring, chronic care management, and related healthcare services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice."
  },
  {
    number: "04",
    title: "User Accounts and Registration",
    content: "To access certain features of our services, you may be required to create an account. You agree to:",
    list: [
      "Provide accurate, current, and complete information during registration",
      "Maintain and update your account information to keep it accurate, current, and complete",
      "Maintain the security of your password and account",
      "Accept responsibility for all activities that occur under your account",
      "Notify Health Shield immediately of any unauthorized use of your account"
    ]
  },
  {
    number: "05",
    title: "Privacy Policy",
    content: "Your use of our services is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal and health information. Please review our Privacy Policy carefully."
  },
  {
    number: "06",
    title: "Health Information Disclaimer",
    content: "The health information provided through Health Shield services is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition."
  },
  {
    number: "07",
    title: "User Responsibilities",
    content: "As a user of Health Shield services, you agree to:",
    list: [
      "Use the services only for their intended purposes",
      "Not attempt to gain unauthorized access to our systems or networks",
      "Not use the services to transmit any viruses, malware, or harmful code",
      "Not interfere with or disrupt the services or servers",
      "Comply with all applicable laws and regulations"
    ]
  },
  {
    number: "08",
    title: "Intellectual Property",
    content: "All content, features, and functionality of the Health Shield website and services, including but not limited to text, graphics, logos, and software, are the exclusive property of Health Shield and are protected by international copyright, trademark, and other intellectual property laws."
  },
  {
    number: "09",
    title: "Limitation of Liability",
    content: "Health Shield shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service."
  },
  {
    number: "10",
    title: "Indemnification",
    content: "You agree to indemnify, defend, and hold harmless Health Shield, its officers, directors, employees, agents, and affiliates from and against any claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) resulting from or arising out of your use of the services."
  },
  {
    number: "11",
    title: "Governing Law",
    content: "These terms and conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Health Shield is headquartered, without regard to its conflict of law provisions."
  },
  {
    number: "12",
    title: "Termination",
    content: "Health Shield reserves the right to terminate or suspend your account and access to the services at our sole discretion, without prior notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason."
  },
  {
    number: "13",
    title: "Contact Information",
    content: "If you have any questions about these Terms and Conditions, please contact Health Shield at info@healthshield.com."
  }
];

export function TermsContent() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.number}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-xs font-semibold shrink-0 mt-0.5">
                    {section.number}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900 leading-snug">
                    {section.title}
                  </h2>
                </div>
                <div className="pl-12 space-y-3">
                  <p className="text-gray-600 leading-relaxed">
                    {section.content}
                  </p>
                  {section.list && (
                    <ul className="space-y-1.5 mt-2">
                      {section.list.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-gray-600 leading-relaxed">
                          <span className="text-blue-600 text-xs mt-1.5 shrink-0">○</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">Last updated: March 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
