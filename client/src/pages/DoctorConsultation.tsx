import { useState } from "react";
import { Calendar, Clock, Video, Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DoctorConsultation() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const doctors = [
    {
      id: 1,
      name: "Dr. Sara Trivedi",
      specialty: "Reproductive Endocrinologist",
      rating: 4.9,
      reviews: 234,
      experience: "15+ years",
      location: "Mumbai, India",
      consultationFee: 500,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      availableSlots: ["9:00 AM", "2:00 PM", "4:30 PM"],
      languages: ["English", "Spanish"],
    },
    {
      id: 2,
      name: "Dr. Kalyan Sharma",
      specialty: "Gynecologist",
      rating: 4.8,
      reviews: 189,
      experience: "12+ years",
      location: "Mumbai, India",
      consultationFee: 500,
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
      availableSlots: ["10:00 AM", "1:00 PM", "3:00 PM"],
      languages: ["English", "Spanish", "Portuguese"],
    },
    {
      id: 3,
      name: "Dr. Pooja Shah",
      specialty: "Endocrinologist",
      rating: 4.9,
      reviews: 156,
      experience: "10+ years",
      location: "Mumbai, India",
      consultationFee: 800,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      availableSlots: ["11:00 AM", "2:30 PM", "5:00 PM"],
      languages: ["English", "Mandarin"],
    },
  ];

  const specialties = [
    { value: "all", label: "All Specialties" },
    {
      value: "reproductive-endocrinologist",
      label: "Reproductive Endocrinologist",
    },
    { value: "gynecologist", label: "Gynecologist" },
    { value: "endocrinologist", label: "Endocrinologist" },
    { value: "nutritionist", label: "Nutritionist" },
  ];

  const consultationTypes = [
    {
      type: "Video Consultation",
      icon: Video,
      duration: "30 minutes",
      description: "Secure video call with specialist",
      price: "From Rs.500",
    },
    {
      type: "Phone Consultation",
      icon: Phone,
      duration: "20 minutes",
      description: "Convenient phone consultation",
      price: "From Rs.800",
    },
    {
      type: "In-Person Visit",
      icon: MapPin,
      duration: "45 minutes",
      description: "Face-to-face consultation at clinic",
      price: "From Rs.500",
    },
  ];

  const filteredDoctors =
    selectedSpecialty === "all"
      ? doctors
      : doctors.filter((doctor) =>
          doctor.specialty
            .toLowerCase()
            .includes(selectedSpecialty.replace("-", " ")),
        );

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Doctor Consultation
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Connect with specialist doctors and healthcare professionals
            experienced in PCOS/PCOD treatment
          </p>
        </div>

        <Tabs defaultValue="book-appointment" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="book-appointment">Book Appointment</TabsTrigger>
            <TabsTrigger value="consultation-types">
              Consultation Types
            </TabsTrigger>
            <TabsTrigger value="preparation">Prepare for Visit</TabsTrigger>
          </TabsList>

          <TabsContent value="book-appointment" className="mt-8">
            <div className="mb-6">
              <Select
                value={selectedSpecialty}
                onValueChange={setSelectedSpecialty}
              >
                <SelectTrigger className="max-w-xs">
                  <SelectValue placeholder="Filter by specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty.value} value={specialty.value}>
                      {specialty.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <Card
                  key={doctor.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                      />
                      <h3 className="text-lg font-bold text-neutral-800">
                        {doctor.name}
                      </h3>
                      <p className="text-sm text-neutral-600">
                        {doctor.specialty}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600">Rating:</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="font-medium">{doctor.rating}</span>
                          <span className="text-neutral-500 ml-1">
                            ({doctor.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600">Experience:</span>
                        <span className="font-medium">{doctor.experience}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600">Location:</span>
                        <span className="font-medium">{doctor.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-neutral-600">Fee:</span>
                        <span className="font-medium text-primary">
                          ${doctor.consultationFee}
                        </span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs text-neutral-600 mb-2">
                        Available today:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {doctor.availableSlots.map((slot, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                          >
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-primary text-white hover:bg-blue-700">
                      Book Appointment
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="consultation-types" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {consultationTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardContent className="p-6">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-800 mb-2">
                        {type.type}
                      </h3>
                      <p className="text-neutral-600 mb-2">
                        {type.description}
                      </p>
                      <div className="text-sm text-neutral-500 mb-4">
                        <Clock className="h-4 w-4 inline mr-1" />
                        {type.duration}
                      </div>
                      <p className="text-lg font-semibold text-primary">
                        {type.price}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="preparation" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">
                    Before Your Appointment
                  </h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li>
                      • Gather your medical history and current medications
                    </li>
                    <li>• Track your symptoms for at least 2 weeks</li>
                    <li>• Note your menstrual cycle patterns</li>
                    <li>• List any family history of PCOS or diabetes</li>
                    <li>• Prepare questions about treatment options</li>
                    <li>• Bring recent lab results if available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">
                    Questions to Ask
                  </h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li>• What tests do I need for PCOS diagnosis?</li>
                    <li>• What are my treatment options?</li>
                    <li>• How will this affect my fertility?</li>
                    <li>• What lifestyle changes should I make?</li>
                    <li>• When should I schedule follow-up visits?</li>
                    <li>• Are there any medications I should avoid?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-6 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                  Insurance & Payment
                </h3>
                <p className="text-blue-700">
                  Most consultations are covered by insurance. We accept all
                  major insurance plans and offer flexible payment options for
                  uninsured patients. Contact our billing team for specific
                  coverage questions.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
