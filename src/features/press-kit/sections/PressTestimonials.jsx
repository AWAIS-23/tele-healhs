"use client";

import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer, Metro Health Systems",
    type: "Client Review",
    quote: "CCN Health has transformed how we manage chronic care. The automation alone has saved our team countless hours, allowing us to focus on patient outcomes.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "James Rodriguez",
    role: "CEO, CareFirst Partners",
    type: "Partner Feedback",
    quote: "The engineering-first approach is evident in every feature. CCN Health doesn't just add features — they solve real problems healthcare providers face daily.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Dr. Emily Chen",
    role: "Healthcare Innovation Expert",
    type: "Influencer Quote",
    quote: "CCN Health represents the future of care management. Their platform demonstrates how technology can truly enhance, not replace, the human element in healthcare.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=100&h=100&fit=crop&crop=face",
  },
];

export function PressTestimonials() {
  return (
    <section className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="text-sm font-medium text-blue-800">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What people<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">are saying</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} variant="round" padding="lg" hover={true}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                  {testimonial.type}
                </span>
              </div>
              <p className="text-gray-600 italic leading-relaxed">"{testimonial.quote}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
