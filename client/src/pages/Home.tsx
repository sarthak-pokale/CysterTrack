import { Link } from "wouter";
import { ClipboardCheck, Calendar, Apple, UserRound, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "PCOS/PCOD Symptom Test",
      description: "Comprehensive questionnaire to assess your symptoms and risk factors",
      link: "/symptom-test",
      buttonText: "Take Test",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Calendar,
      title: "Period Tracker",
      description: "Track your menstrual cycle, symptoms, and patterns over time",
      link: "/period-tracker",
      buttonText: "Start Tracking",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: Apple,
      title: "Diet & Nutrition",
      description: "Personalized meal plans and nutrition guidance for PCOS management",
      link: "#",
      buttonText: "Learn More",
      bgColor: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: UserRound,
      title: "Doctor Consultation",
      description: "Connect with specialist doctors and healthcare professionals",
      link: "#",
      buttonText: "Book Appointment",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Heart,
      title: "Management & Care",
      description: "Comprehensive care plans and lifestyle management strategies",
      link: "#",
      buttonText: "Get Started",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access articles, guides, and research about women's health",
      link: "#",
      buttonText: "Explore",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to CysterCare</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your comprehensive platform for PCOS/PCOD detection, period tracking, and women's health management
            </p>
            <div className="space-x-4">
              <Link href="/symptom-test">
                <Button size="lg" className="bg-white text-primary hover:bg-neutral-100">
                  Take Symptom Test
                </Button>
              </Link>
              <Link href="/period-tracker">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary"
                >
                  Track Period
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PCOS Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Understanding PCOS & PCOD
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Polycystic Ovary Syndrome (PCOS) and Polycystic Ovary Disease (PCOD) are common hormonal disorders affecting millions of women worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Medical consultation"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">What is PCOS?</h3>
                  <p className="text-neutral-600">
                    PCOS is a hormonal disorder causing enlarged ovaries with small cysts on the outer edges. It affects hormone levels, metabolism, and can impact fertility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">Common Symptoms</h3>
                  <ul className="text-neutral-600 space-y-2">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Irregular periods
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Weight gain
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Excess facial/body hair
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Acne and mood changes
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Our Services</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive tools and resources to help you manage your health journey
            </p>
          </div>

          {/* Services Grid - 2 rows of 3 cards each */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`${service.iconColor} h-8 w-8`} />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-3">{service.title}</h3>
                    <p className="text-neutral-600 mb-4">{service.description}</p>
                    <Link href={service.link}>
                      <Button variant="ghost" className="text-primary hover:text-blue-700 group-hover:underline">
                        {service.buttonText} →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
