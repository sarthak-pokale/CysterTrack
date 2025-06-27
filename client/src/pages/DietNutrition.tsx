import { Apple, Clock, Heart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DietNutrition() {
  const mealPlans = [
    {
      name: "Anti-Inflammatory Plan",
      description: "Reduce inflammation and insulin resistance",
      duration: "4 weeks",
      meals: 21,
      difficulty: "Easy",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Low-Carb PCOS Plan",
      description: "Balance hormones through carb management",
      duration: "6 weeks",
      meals: 35,
      difficulty: "Moderate",
      color: "bg-blue-100 text-blue-700",
    },
    {
      name: "Mediterranean Style",
      description: "Heart-healthy fats and whole foods with perfect meals",
      duration: "8 weeks",
      meals: 42,
      difficulty: "Easy",
      color: "bg-purple-100 text-purple-700",
    },
  ];

  const supplements = [
    { name: "Inositol", dosage: "2-4g daily", benefit: "Improves insulin sensitivity" },
    { name: "Omega-3", dosage: "1-2g daily", benefit: "Reduces inflammation" },
    { name: "Vitamin D", dosage: "1000-2000 IU", benefit: "Supports hormone balance" },
    { name: "Chromium", dosage: "200-400mcg", benefit: "Helps with glucose metabolism" },
  ];

  const foods = {
    recommended: [
      "Leafy greens (spinach, kale)",
      "Fatty fish (salmon, sardines)",
      "Nuts and seeds",
      "Berries and low-glycemic fruits",
      "Lean proteins",
      "Whole grains (quinoa, brown rice)",
    ],
    avoid: [
      "Processed foods",
      "Sugary drinks and desserts",
      "White bread and pasta",
      "Fried foods",
      "Excessive dairy",
      "High-sodium foods",
    ],
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            Diet & Nutrition for PCOS
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Personalized meal plans and nutrition guidance designed specifically for PCOS management
          </p>
        </div>

        <Tabs defaultValue="meal-plans" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="meal-plans">Meal Plans</TabsTrigger>
            <TabsTrigger value="foods">Food Guide</TabsTrigger>
            <TabsTrigger value="supplements">Supplements</TabsTrigger>
            <TabsTrigger value="tips">Nutrition Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="meal-plans" className="mt-8">
            <div className="grid md:grid-cols-3 gap-6">
              {mealPlans.map((plan, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${plan.color}`}>
                        {plan.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">{plan.name}</h3>
                    <p className="text-neutral-600 mb-4">{plan.description}</p>
                    <div className="space-y-2 text-sm text-neutral-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {plan.duration}
                      </div>
                      <div className="flex items-center">
                        <Apple className="h-4 w-4 mr-2" />
                        {plan.meals} recipes included
                      </div>
                    </div>
                    <Button className="w-full bg-primary text-white hover:bg-blue-700">
                      Get Plan (Rs.299)
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="foods" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Recommended Foods
                  </h3>
                  <ul className="space-y-3">
                    {foods.recommended.map((food, index) => (
                      <li key={index} className="flex items-center text-green-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {food}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-red-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Foods to Limit
                  </h3>
                  <ul className="space-y-3">
                    {foods.avoid.map((food, index) => (
                      <li key={index} className="flex items-center text-red-700">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {food}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="supplements" className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {supplements.map((supplement, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-neutral-800 mb-2">{supplement.name}</h3>
                    <p className="text-primary font-medium mb-2">{supplement.dosage}</p>
                    <p className="text-neutral-600">{supplement.benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Card className="mt-6 bg-yellow-50">
              <CardContent className="p-6">
                <p className="text-sm text-yellow-800">
                  <strong>Important:</strong> Always consult with your healthcare provider before starting any supplement regimen, especially if you're taking medications.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tips" className="mt-8">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Meal Timing Tips</h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li>• Eat regular meals every 3-4 hours</li>
                    <li>• Don't skip breakfast</li>
                    <li>• Include protein with every meal</li>
                    <li>• Stay hydrated throughout the day</li>
                    <li>• Avoid eating large meals late at night</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Cooking Methods</h3>
                  <ul className="space-y-3 text-neutral-600">
                    <li>• Steam or bake instead of frying</li>
                    <li>• Use healthy oils like olive oil</li>
                    <li>• Season with herbs and spices</li>
                    <li>• Meal prep for consistency</li>
                    <li>• Read nutrition labels carefully</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}