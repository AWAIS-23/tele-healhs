const sections = [
  {
    number: "01",
    title: "Introduction",
    content: "The information we receive, and how we use it, depends on what you do when visiting our website. We collect and use your non-personal information (information that is not identifiable to you personally) differently than your personal information."
  },
  {
    number: "02",
    title: "What is Non-Personal Information?",
    content: "Non-personal information is information we collect through this website that does not identify you as an individual person. It may include information such as the following:",
    list: [
      "The type of web browser software you use",
      "The name of the domain from which you access the Internet",
      "The Internet address of the website from which you linked directly to our website",
      "The date and time you access our website",
      "Which pages you have visited on our website",
      "The search terms you use",
      "The links on which you click",
      "Personal information that has been made nonpersonal or anonymous (i.e., information that no longer reflects or references an individually identifiable user)"
    ]
  },
  {
    number: "03",
    title: "What Does Health Shield Do with Non-Personal Information?",
    content: "Because non-personal information cannot identify you or be tied to you, there are no restrictions on the ways that we can use or share non-personal information. We are always looking for ways to better serve you and improve this website. We will use non-personal information from you to help us make this website more useful to visitors. We also will use non-personal information for other business purposes. For example, we may use non-personal information or aggregate non-personal information to:",
    list: [
      "Create reports for internal use to develop programs, products, services or content",
      "Customize the information or services that are of interest to you",
      "Share it with or sell it to third parties",
      "Provide aggregated information on how visitors use our site, such as traffic statistics and response rates, to third parties"
    ]
  },
  {
    number: "04",
    title: "What is Personal Information?",
    content: "Personal information is information we collect or that you submit through this website (including through products that submit information to this website) that we can use to specifically identify you, for example, your:",
    list: [
      "Name",
      "Date of birth",
      "Home address, telephone number",
      "E-mail address",
      "Protected health information (see below)"
    ]
  },
  {
    number: "05",
    title: "Protected Health Information",
    content: "Protected health information is information that may identify you and that relates to your physical or mental health or condition and related health care services. Health Shield is committed to safeguarding all protected health information collected about you, while providing health-related products, services, education and/or training. Examples of protected health information include:",
    list: [
      "Information about your health condition (e.g., your blood pressure)",
      "Information about health care products or services provided to you",
      "Geographic information (e.g., your address)",
      "Demographic information (e.g., your race, gender, or age)",
      "Unique numbers that may identify you (e.g., your Social Security Number, phone number(s), or driver's license or state certificate number)",
      "Other types of information that may identify you"
    ]
  },
  {
    number: "06",
    title: "How Does Health Shield Keep and Use Personal Information?",
    content: "Health Shield may keep and use personal information we collect from you through this website to provide you with access to this website. In addition, Health Shield may keep and use your personal information:",
    list: [
      "To respond to your requests",
      "To send to third parties (family members, caregivers, friends, etc.) that you authorize Health Shield to send your personal information to",
      "To share with our business partners for purposes of improving your experience with our products",
      "To personalize your access to our website, for example, by telling you about new features that may be of interest to you",
      "To provide to caregivers such as your doctor or diabetes educator",
      "To develop records, including records of your personal information",
      "To contact you with information that might be of interest to you",
      "To remove your personal identifiers (your name, e-mail address, social security number, etc.) — once de-identified, it is non-personal information and we may treat it like other non-personal information",
      "To enforce this Privacy Policy and other rules about your use of this website",
      "To protect our rights or property",
      "To protect someone's health, safety or welfare",
      "To provide you with treatment and/or run our normal business operations"
    ]
  },
  {
    number: "07",
    title: "Does Health Shield Ever Share Personal Information with Third Parties?",
    content: "Health Shield will not share your personal information collected from this website with an unrelated third party without your permission, except as otherwise provided in this Privacy Policy.\n\nIn the ordinary course of business, Health Shield will share some personal information with companies that we hire to perform services or functions on our behalf. In all cases in which we share your personal information with a third party, we will not authorize them to keep, disclose or use your information with others except for the purpose of providing the services we asked them to provide.\n\nHealth Shield will not sell, exchange or publish your personal information, except in conjunction with a corporate sale, merger, dissolution, or acquisition."
  },
  {
    number: "08",
    title: "As Required By Law",
    content: "Health Shield may disclose your personal information if required to do so by federal, state, or local law, or if ordered by a court or by another properly authorized body (e.g., in response to a subpoena, discovery request, or other legal request). Health Shield may also disclose information in the context of civil litigation where you have put your condition at issue in the litigation."
  },
  {
    number: "09",
    title: "Written Authorization",
    content: "Except as described in this Privacy Policy, Health Shield will obtain your online or written authorization or consent before using your personal information or disclosing it to persons or organizations outside of Health Shield. Health Shield will also obtain an authorization for any communications with you for marketing purposes, or any disclosures that constitute a sale of personal information.\n\nYou may revoke any written authorization you have provided to Health Shield in writing, at any time. If you revoke your authorization, Health Shield will no longer use or disclose your personal information for the reasons covered by your written authorization, except to the extent that Health Shield has made any disclosures in reliance on an existing authorization. Health Shield is unable to take back any disclosures Health Shield has already made with your permission."
  },
  {
    number: "10",
    title: "What About Website Security?",
    content: "Security is important to Health Shield. Health Shield takes reasonable steps to protect your personal information from loss, misuse, and unauthorized access, disclosure, alteration, or destruction. You should keep in mind that no Internet transmission is ever 100% secure or error-free. Particularly, e-mail sent to or from this site may not be secure, and you should therefore take special care in deciding what information you send to Health Shield via e-mail."
  },
  {
    number: "11",
    title: "How to Contact Health Shield",
    content: "If you have any questions, comments, or concerns about this Privacy Policy or the information practices of this site, please contact Health Shield by e-mail at info@healthshield.com."
  },
  {
    number: "12",
    title: "Changes to Privacy Policy",
    content: "If this Privacy Policy is revised, the most current policy will be posted on this site. Please check back periodically, and especially before you provide any personally identifiable information."
  }
];

export function PrivacyContent() {
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
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
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
