import { Link } from "wouter";
import { FileText, AlertTriangle, Calendar, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function MedicalTests() {
  const tests = [
    {
      name: "LH (Luteinizing Hormone)",
      purpose: "Often high in PCOS; helps assess ovulation health",
      normalRange: "5-20 IU/L (varies by cycle phase)",
      preparation: "No special preparation needed",
      category: "Hormone Panel",
    },
    {
      name: "FSH (Follicle-Stimulating Hormone)",
      purpose: "Measures ovary function and egg production",
      normalRange: "3-20 IU/L (varies by cycle phase)",
      preparation: "Best done on cycle days 3-5",
      category: "Hormone Panel",
    },
    {
      name: "LH:FSH Ratio",
      purpose: "In PCOS, this ratio is often >2:1",
      normalRange: "<2:1",
      preparation: "Both LH and FSH needed",
      category: "Hormone Panel",
    },
    {
      name: "Total & Free Testosterone",
      purpose: "High levels suggest excess male hormones (androgens)",
      normalRange: "Total: 8-60 ng/dL, Free: 0.3-3.2 pg/mL",
      preparation: "Best done in morning",
      category: "Androgen Panel",
    },
    {
      name: "DHEAS (Dehydroepiandrosterone sulfate)",
      purpose: "Another androgen; elevated in PCOS",
      normalRange: "35-430 µg/dL",
      preparation: "No special preparation needed",
      category: "Androgen Panel",
    },
    {
      name: "Prolactin",
      purpose: "To rule out other hormonal issues causing missed periods",
      normalRange: "4-23 ng/mL",
      preparation: "Avoid stress before test",
      category: "Additional Hormones",
    },
    {
      name: "TSH (Thyroid-Stimulating Hormone)",
      purpose: "To rule out thyroid disorders",
      normalRange: "0.4-4.0 mIU/L",
      preparation: "Best done in morning",
      category: "Additional Hormones",
    },
    {
      name: "Estrogen & Progesterone",
      purpose: "Assess overall hormonal balance and ovulation",
      normalRange: "Varies by cycle phase",
      preparation: "Timing depends on cycle",
      category: "Reproductive Hormones",
    },
  ];

  const additionalTests = [
    {
      name: "Glucose Tolerance Test (GTT)",
      purpose: "Check for insulin resistance and diabetes risk",
      description: "2-hour test after glucose drink",
    },
    {
      name: "Lipid Panel",
      purpose: "Assess cardiovascular risk factors",
      description: "Cholesterol and triglyceride levels",
    },
    {
      name: "Pelvic Ultrasound",
      purpose: "Look for ovarian cysts and assess ovary appearance",
      description: "Transvaginal or abdominal ultrasound",
    },
    {
      name: "Anti-Müllerian Hormone (AMH)",
      purpose: "Assess ovarian reserve and function",
      description: "Elevated in PCOS patients",
    },
  ];

  const testCategories = [
    { name: "Hormone Panel", color: "bg-blue-100 text-blue-700", count: 3 },
    { name: "Androgen Panel", color: "bg-purple-100 text-purple-700", count: 2 },
    { name: "Additional Hormones", color: "bg-green-100 text-green-700", count: 2 },
    { name: "Reproductive Hormones", color: "bg-pink-100 text-pink-700", count: 1 },
  ];

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="h-8 w-8 text-orange-500 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800">
              Recommended Medical Tests
            </h1>
          </div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-6">
            Based on your high-risk assessment results, these tests are recommended for proper PCOS/PCOD diagnosis
          </p>
          <Card className="bg-orange-50 max-w-2xl mx-auto">
            <CardContent className="p-4">
              <p className="text-orange-800 text-sm">
                <strong>Important:</strong> Please consult with a healthcare provider to discuss these tests and determine which ones are appropriate for your specific situation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Test Categories Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {testCategories.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-4 text-center">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                  {category.name}
                </span>
                <p className="text-2xl font-bold text-neutral-800 mt-2">{category.count}</p>
                <p className="text-sm text-neutral-600">tests</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Tests */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Essential Hormone Tests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tests.map((test, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-neutral-800">{test.name}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      test.category === "Hormone Panel" ? "bg-blue-100 text-blue-700" :
                      test.category === "Androgen Panel" ? "bg-purple-100 text-purple-700" :
                      test.category === "Additional Hormones" ? "bg-green-100 text-green-700" :
                      "bg-pink-100 text-pink-700"
                    }`}>
                      {test.category}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-3">{test.purpose}</p>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-neutral-700">Normal Range:</span>
                      <span className="text-neutral-600 ml-2">{test.normalRange}</span>
                    </div>
                    <div>
                      <span className="font-medium text-neutral-700">Preparation:</span>
                      <span className="text-neutral-600 ml-2">{test.preparation}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Tests */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-neutral-800 mb-6">Additional Recommended Tests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalTests.map((test, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">{test.name}</h3>
                  <p className="text-neutral-600 mb-3">{test.purpose}</p>
                  <p className="text-sm text-neutral-500">{test.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-blue-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-blue-800">Book Your Tests</h3>
              </div>
              <p className="text-blue-700 mb-4">
                Schedule an appointment with a healthcare provider to discuss and order these tests.
              </p>
              <Link href="/doctor-consultation">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Find a Doctor
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-green-50">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="text-xl font-bold text-green-800">Download Test Guide</h3>
              </div>
              <p className="text-green-700 mb-4">
                Get a printable guide with all test information to take to your doctor.
              </p>
              <Button className="bg-green-600 text-white hover:bg-green-700">
                Download PDF
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Preparation Tips */}
        <Card className="mt-8 bg-yellow-50">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Test Preparation Tips</h3>
            <div className="grid md:grid-cols-2 gap-6 text-yellow-700">
              <div>
                <h4 className="font-semibold mb-2">Before Your Appointment:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Fast for 8-12 hours if glucose tests are ordered</li>
                  <li>• Schedule tests for early morning when possible</li>
                  <li>• Track your menstrual cycle dates</li>
                  <li>• List all current medications and supplements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What to Expect:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Blood draw takes 10-15 minutes</li>
                  <li>• Results typically available in 3-5 days</li>
                  <li>• Some tests may need to be repeated</li>
                  <li>• Follow-up appointment to discuss results</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Results */}
        <div className="text-center mt-8">
          <Link href="/results">
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              Back to Assessment Results
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}