import { Link } from "wouter";
import {
  ClipboardCheck,
  Calendar,
  Apple,
  UserRound,
  Heart,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const services = [
    {
      icon: ClipboardCheck,
      title: "PCOS/PCOD Symptom Test",
      description:
        "Comprehensive questionnaire to assess your symptoms and risk factors",
      link: "/symptom-test",
      buttonText: "Take Test",
      bgColor: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Calendar,
      title: "Period Tracker",
      description:
        "Track your menstrual cycle, symptoms, and patterns over time",
      link: "/period-tracker",
      buttonText: "Start Tracking",
      bgColor: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: Apple,
      title: "Diet & Nutrition",
      description:
        "Personalized meal plans and nutrition guidance for PCOS management",
      link: "/diet-nutrition",
      buttonText: "Learn More",
      bgColor: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: UserRound,
      title: "Doctor Consultation",
      description:
        "Connect with specialist doctors and healthcare professionals",
      link: "/doctor-consultation",
      buttonText: "Book Appointment",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Heart,
      title: "Management & Care",
      description:
        "Comprehensive care plans and lifestyle management strategies",
      link: "/management-care",
      buttonText: "Get Started",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access articles, guides, and research about women's health",
      link: "/educational-resources",
      buttonText: "Explore",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-violet-200 to-pink-200 text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to CysterTrack
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your comprehensive platform for PCOS/PCOD detection, period
              tracking, and women's health management
            </p>
            <div className="space-x-4">
              <Link href="/symptom-test">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-pink-300 hover:text-black"
                >
                  Take Symptom Test
                </Button>
              </Link>
              <Link href="/period-tracker">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-black text-white hover:bg-pink-300 hover:text-black"
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
              Polycystic Ovary Syndrome (PCOS) and Polycystic Ovary Disease
              (PCOD) are common hormonal disorders affecting millions of women
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cystercare.com/wp-content/uploads/2022/03/home-page-website-1.png"
                alt="Medical consultation"
                className="rounded-xl shadow-lg w-500 h-500"
              />
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                    What is PCOS?
                  </h3>
                  <p className="text-neutral-600">
                    PCOS is a hormonal disorder causing enlarged ovaries with
                    small cysts on the outer edges. It affects hormone levels,
                    metabolism, and can impact fertility.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                    Common Symptoms
                  </h3>
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
      <section className="py-16 bg-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Comprehensive tools and resources to help you manage your health
              journey
            </p>
          </div>

          {/* Services Grid - 2 rows of 3 cards each */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${service.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <IconComponent
                        className={`${service.iconColor} h-8 w-8`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {service.description}
                    </p>
                    <Link href={service.link}>
                      <Button
                        variant="ghost"
                        className="text-black hover:text-black-700 group-hover:underline"
                      >
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

      {/* Journey Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
                It is a journey
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                When I found out what was happening to me had a name, I was greatly relieved. 
                Up to that point, I thought I was going crazy. I first suggested to my doctor 
                that I was worried about my weight and facial hair, she said just stop eating 
                and wax. I felt very isolated.
              </p>
              <div className="pt-4">
                <Link href="/about">
                  <Button size="lg" className="bg-primary text-white hover:bg-blue-700">
                    Learn More About Our Mission
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background gradient */}
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#87CEEB" />
                      <stop offset="50%" stopColor="#FFE4E1" />
                      <stop offset="100%" stopColor="#FFF8DC" />
                    </linearGradient>
                    <radialGradient id="lightGradient" cx="80%" cy="20%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                      <stop offset="50%" stopColor="#FFE4E1" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#87CEEB" stopOpacity="0.3" />
                    </radialGradient>
                  </defs>
                  
                  {/* Sky background */}
                  <rect width="400" height="300" fill="url(#skyGradient)" />
                  
                  {/* Light source */}
                  <circle cx="320" cy="60" r="40" fill="url(#lightGradient)" />
                  
                  {/* Road */}
                  <path
                    d="M 0 250 Q 200 240 400 200"
                    stroke="#8B7355"
                    strokeWidth="40"
                    fill="none"
                  />
                  <path
                    d="M 0 250 Q 200 240 400 200"
                    stroke="#A0522D"
                    strokeWidth="30"
                    fill="none"
                  />
                  
                  {/* Road markings */}
                  <path
                    d="M 50 245 L 80 243 M 120 241 L 150 239 M 190 237 L 220 235 M 260 233 L 290 231"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeDasharray="15,10"
                  />
                  
                  {/* Trees/landscape */}
                  <ellipse cx="50" cy="200" rx="15" ry="25" fill="#228B22" />
                  <ellipse cx="80" cy="190" rx="12" ry="20" fill="#32CD32" />
                  <ellipse cx="350" cy="180" rx="18" ry="30" fill="#228B22" />
                  
                  {/* Girl figure walking */}
                  <g transform="translate(180, 200)">
                    {/* Shadow */}
                    <ellipse cx="0" cy="35" rx="8" ry="3" fill="#000000" opacity="0.2" />
                    
                    {/* Legs */}
                    <line x1="-3" y1="15" x2="-5" y2="30" stroke="#FFB6C1" strokeWidth="3" strokeLinecap="round" />
                    <line x1="3" y1="15" x2="8" y2="28" stroke="#FFB6C1" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Body */}
                    <rect x="-4" y="0" width="8" height="18" rx="4" fill="#FF69B4" />
                    
                    {/* Arms */}
                    <line x1="-4" y1="8" x2="-8" y2="15" stroke="#FFB6C1" strokeWidth="2" strokeLinecap="round" />
                    <line x1="4" y1="8" x2="6" y2="12" stroke="#FFB6C1" strokeWidth="2" strokeLinecap="round" />
                    
                    {/* Head */}
                    <circle cx="0" cy="-6" r="6" fill="#FFB6C1" />
                    
                    {/* Hair */}
                    <path d="M -6 -10 Q 0 -14 6 -10 Q 4 -6 0 -8 Q -4 -6 -6 -10" fill="#8B4513" />
                  </g>
                  
                  {/* Light rays */}
                  <g opacity="0.6">
                    <line x1="320" y1="60" x2="180" y2="180" stroke="#FFE4E1" strokeWidth="2" />
                    <line x1="310" y1="50" x2="160" y2="170" stroke="#FFE4E1" strokeWidth="1" />
                    <line x1="330" y1="50" x2="200" y2="170" stroke="#FFE4E1" strokeWidth="1" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
