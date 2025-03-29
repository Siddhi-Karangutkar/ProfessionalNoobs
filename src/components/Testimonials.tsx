
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, Handmade Crafts",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      quote: "The platform connected me with a sponsor who believed in my artisan business. With their support, I've increased production capacity by 40% and reached new markets.",
      type: "vendor"
    },
    {
      name: "Michael Chen",
      role: "CSR Manager, Tech Innovations Inc.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      quote: "As a corporate sponsor, we wanted to make a real difference in local communities. Through this platform, we've supported 12 vendors and seen measurable impact in our CSR initiatives.",
      type: "sponsor"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, Local Foods Co-op",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      quote: "The sponsorship we received helped us upgrade our equipment and expand our community outreach. Our sales have increased by 60% in just six months!",
      type: "vendor"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our platform has helped vendors and sponsors create successful partnerships.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <CardContent className="p-0">
                <div className={`h-2 ${testimonial.type === "vendor" ? "bg-brand-purple" : "bg-brand-blue"}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
