import { CheckCircle } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Reproductive Endocrinologist",
      description: "15+ years specializing in PCOS treatment and women's hormonal health",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Dr. Maria Rodriguez",
      role: "Clinical Nutritionist",
      description: "Specialized in PCOS nutrition therapy and metabolic health management",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
    {
      name: "Dr. Emily Chen",
      role: "Health Psychologist",
      description: "Expert in mental health aspects of chronic health conditions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    },
  ];

  const features = [
    {
      title: "Evidence-Based Approach",
      description: "All our tools and information are based on current medical research and guidelines",
    },
    {
      title: "Privacy First",
      description: "Your health data is encrypted and protected with industry-standard security measures",
    },
    {
      title: "Community Support",
      description: "Connect with other women sharing similar health journeys in our supportive community",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">About CysterTrack</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Empowering women through comprehensive health management and early detection tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1729105140067-00c3c435ccd6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBsYXVnaGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Healthcare team"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">Our Mission</h2>
            <p className="text-neutral-600 mb-6">
              At CysterTrack, we believe every woman deserves access to comprehensive health information and tools to manage conditions like PCOS and PCOD. Our platform combines medical expertise with user-friendly technology to provide early detection, tracking, and management solutions.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-accent h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-neutral-800">{feature.title}</h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-12">Our Expert Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{member.name}</h3>
                <p className="text-neutral-600 mb-2">{member.role}</p>
                <p className="text-sm text-neutral-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
