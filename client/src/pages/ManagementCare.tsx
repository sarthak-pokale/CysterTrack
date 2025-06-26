import { Heart, Target, Calendar, Zap, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function ManagementCare() {
  const carePrograms = [
    {
      name: "PCOS Complete Care",
      duration: "12 months",
      price: 299,
      features: [
        "Personalized treatment plan",
        "Monthly doctor consultations",
        "Nutrition coaching",
        "Exercise program",
        "Medication management",
        "24/7 support chat"
      ],
      popular: true,
    },
    {
      name: "Lifestyle Management",
      duration: "6 months",
      price: 199,
      features: [
        "Custom meal plans",
        "Fitness tracking",
        "Symptom monitoring",
        "Educational resources",
        "Bi-weekly check-ins"
      ],
      popular: false,
    },
    {
      name: "Fertility Focus",
      duration: "9 months",
      price: 399,
      features: [
        "Fertility specialist access",
        "Ovulation tracking",
        "Hormone optimization",
        "Stress management",
        "Partner support resources",
        "IVF preparation guidance"
      ],
      popular: false,
    },
  ];

  const managementAreas = [
    {
      icon: Heart,
      title: "Hormone Balance",
      description: "Regulate insulin, testosterone, and other key hormones through targeted interventions",
      tips: ["Take prescribed medications consistently", "Monitor blood sugar levels", "Consider supplements like inositol"],
    },
    {
      icon: Target,
      title: "Weight Management",
      description: "Achieve and maintain healthy weight through sustainable lifestyle changes",
      tips: ["Focus on whole foods", "Practice portion control", "Incorporate strength training"],
    },
    {
      icon: Zap,
      title: "Energy & Fatigue",
      description: "Combat PCOS-related fatigue and boost energy levels naturally",
      tips: ["Prioritize sleep quality", "Manage stress levels", "Stay consistently active"],
    },
    {
      icon: Users,
      title: "Emotional Support",
      description: "Address mental health and emotional wellbeing aspects of PCOS",
      tips: ["Join support groups", "Consider counseling", "Practice mindfulness"],
    },
  ];

  const dailyChecklist = [
    { task: "Take prescribed medications", completed: true },
    { task: "Log meals and symptoms", completed: true },
    { task: "30 minutes physical activity", completed: false },
    { task: "Practice stress management", completed: false },
    { task: "Take supplements", completed: true },
    { task: "Track cycle/symptoms", completed: false },
  ];

  const completedTasks = dailyChecklist.filter(task => task.completed).length;
  const progressPercentage = (completedTasks / dailyChecklist.length) * 100;

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Management & Care Plans
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive care plans and lifestyle management strategies tailored for PCOS/PCOD
          </p>
        </div>

        {/* Daily Progress Tracker */}
        <Card className="mb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-neutral-800">Today's Progress</h2>
              <span className="text-sm text-neutral-600">{completedTasks}/{dailyChecklist.length} completed</span>
            </div>
            <Progress value={progressPercentage} className="mb-4" />
            <div className="grid md:grid-cols-3 gap-4">
              {dailyChecklist.map((item, index) => (
                <div key={index} className={`flex items-center space-x-2 p-2 rounded ${item.completed ? 'bg-green-100' : 'bg-neutral-100'}`}>
                  <div className={`w-4 h-4 rounded-full ${item.completed ? 'bg-green-500' : 'bg-neutral-300'}`}></div>
                  <span className={`text-sm ${item.completed ? 'text-green-800' : 'text-neutral-600'}`}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Care Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 text-center mb-8">Choose Your Care Program</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {carePrograms.map((program, index) => (
              <Card key={index} className={`relative ${program.popular ? 'border-2 border-primary shadow-lg' : ''}`}>
                {program.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">{program.name}</h3>
                    <div className="text-3xl font-bold text-primary mb-1">${program.price}</div>
                    <p className="text-neutral-600">{program.duration} program</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-neutral-600">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${program.popular ? 'bg-primary text-white hover:bg-blue-700' : 'bg-neutral-800 text-white hover:bg-neutral-700'}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Management Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 text-center mb-8">Key Management Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {managementAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-neutral-800 mb-2">{area.title}</h3>
                        <p className="text-neutral-600 mb-4">{area.description}</p>
                        <div className="space-y-2">
                          {area.tips.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-center text-sm text-neutral-500">
                              <div className="w-1 h-1 bg-accent rounded-full mr-2"></div>
                              {tip}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Resources Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-800">Educational Resources</h3>
              </div>
              <ul className="space-y-3 text-blue-700">
                <li>• PCOS Management Guidebook (PDF)</li>
                <li>• Meal Planning Templates</li>
                <li>• Exercise Video Library</li>
                <li>• Medication Tracking Sheets</li>
                <li>• Symptom Diary Templates</li>
              </ul>
              <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">
                Access Resources
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-800">Upcoming Appointments</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-green-800">Dr. Johnson</p>
                    <p className="text-sm text-green-600">Follow-up consultation</p>
                  </div>
                  <span className="text-sm text-green-700">Jan 15</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <div>
                    <p className="font-medium text-green-800">Lab Tests</p>
                    <p className="text-sm text-green-600">Hormone panel</p>
                  </div>
                  <span className="text-sm text-green-700">Jan 22</span>
                </div>
              </div>
              <Button className="mt-4 bg-green-600 text-white hover:bg-green-700">
                Schedule Appointment
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}