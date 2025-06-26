import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AlertTriangle, Info, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AssessmentResult {
  symptoms: string[];
  responses: Record<string, any>;
  riskScore: number;
  riskLevel: string;
}

export default function Results() {
  const [assessment, setAssessment] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    const storedAssessment = localStorage.getItem("lastAssessment");
    if (storedAssessment) {
      setAssessment(JSON.parse(storedAssessment));
    }
  }, []);

  if (!assessment) {
    return (
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-neutral-800 mb-6">No Assessment Found</h1>
          <p className="text-xl text-neutral-600 mb-8">
            Please complete the symptom assessment first to see your results.
          </p>
          <Link href="/symptom-test">
            <Button className="bg-primary text-white hover:bg-blue-700">
              Take Assessment
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  const getResultIcon = (riskLevel: string) => {
    switch (riskLevel) {
      case "High Risk":
        return <AlertTriangle className="h-12 w-12 text-red-600" />;
      case "Moderate Risk":
        return <Info className="h-12 w-12 text-yellow-600" />;
      default:
        return <CheckCircle className="h-12 w-12 text-green-600" />;
    }
  };

  const getResultColor = (riskLevel: string) => {
    switch (riskLevel) {
      case "High Risk":
        return "bg-red-100";
      case "Moderate Risk":
        return "bg-yellow-100";
      default:
        return "bg-green-100";
    }
  };

  const getResultMessage = (riskLevel: string) => {
    switch (riskLevel) {
      case "High Risk":
        return "Your responses indicate several symptoms commonly associated with PCOS/PCOD. We strongly recommend consulting with a healthcare professional for proper evaluation and testing.";
      case "Moderate Risk":
        return "Some of your symptoms may be related to hormonal imbalances. Consider monitoring your symptoms and consulting with a healthcare provider if they persist or worsen.";
      default:
        return "Based on your responses, you have few symptoms associated with PCOS/PCOD. Continue maintaining healthy habits and regular monitoring.";
    }
  };

  const getRecommendations = (riskLevel: string) => {
    switch (riskLevel) {
      case "High Risk":
        return [
          "Schedule an appointment with a gynecologist or endocrinologist",
          "Consider hormone level testing",
          "Keep a detailed symptom diary",
          "Start tracking your menstrual cycle",
          "Discuss family history with your doctor",
        ];
      case "Moderate Risk":
        return [
          "Continue monitoring symptoms with our tracker",
          "Maintain a healthy diet and regular exercise",
          "Consider consulting a healthcare provider",
          "Track your menstrual cycle patterns",
          "Join our community forum for support",
        ];
      default:
        return [
          "Continue healthy lifestyle habits",
          "Use our period tracker for cycle monitoring",
          "Stay informed about women's health",
          "Consider annual check-ups with your healthcare provider",
          "Join our community for health tips",
        ];
    }
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Your Assessment Results
          </h1>
          <p className="text-xl text-neutral-600">
            Based on your responses, here's your personalized health assessment
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${getResultColor(assessment.riskLevel)} mb-4`}>
                {getResultIcon(assessment.riskLevel)}
              </div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-2">{assessment.riskLevel}</h2>
              <p className="text-lg text-neutral-600">{getResultMessage(assessment.riskLevel)}</p>
            </div>

            <Card className="bg-neutral-50 mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">Your Assessment Summary</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-neutral-600">Symptoms Reported:</span>
                    <span className="font-semibold text-neutral-800 ml-2">{assessment.symptoms.length}</span>
                  </div>
                  <div>
                    <span className="text-neutral-600">Risk Score:</span>
                    <span className="font-semibold text-neutral-800 ml-2">{assessment.riskScore}/15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">Recommended Next Steps</h3>
              <ul className="space-y-3">
                {getRecommendations(assessment.riskLevel).map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-neutral-700">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="mt-8 bg-blue-50">
              <CardContent className="p-4">
                <p className="text-sm text-blue-800">
                  <strong>Important:</strong> This assessment is for informational purposes only and should not replace professional medical advice. Always consult with qualified healthcare providers for proper diagnosis and treatment.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/period-tracker">
            <Button size="lg" className="bg-primary text-white hover:bg-blue-700 mr-4">
              Start Period Tracking
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
