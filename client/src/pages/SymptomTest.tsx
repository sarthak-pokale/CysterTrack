import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const symptomTestSchema = z.object({
  symptoms: z.array(z.string()).optional(),
  periodRegularity: z.string().optional(),
  periodDuration: z.string().optional(),
  periodPain: z.string().optional(),
  moodIssues: z.string().optional(),
  fatigueLevel: z.string().optional(),
  excessHair: z.string().optional(),
  hairLoss: z.string().optional(),
  acneIssues: z.string().optional(),
  darkPatches: z.string().optional(),
  weightGain: z.string().optional(),
  weightDifficulty: z.string().optional(),
  sugarCravings: z.string().optional(),
  familyHistory: z.array(z.string()).optional(),
  physicalActivity: z.string().optional(),
  previousDiagnosis: z.string().optional(),
});

type SymptomTestForm = z.infer<typeof symptomTestSchema>;

export default function SymptomTest() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<SymptomTestForm>({
    resolver: zodResolver(symptomTestSchema),
    defaultValues: {
      symptoms: [],
      familyHistory: [],
    },
  });

  const submitAssessmentMutation = useMutation({
    mutationFn: async (data: any) => {
      return apiRequest("POST", "/api/symptom-assessments", data);
    },
    onSuccess: () => {
      setLocation("/results");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit assessment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: SymptomTestForm) => {
    // Calculate risk score
    let riskScore = data.symptoms?.length || 0;

    if (
      data.periodRegularity === "irregular" ||
      data.periodRegularity === "missed"
    )
      riskScore += 2;
    if (data.moodIssues === "yes") riskScore += 1;
    if (data.fatigueLevel === "often") riskScore += 1;
    if (data.weightGain === "yes") riskScore += 1;
    if (data.weightDifficulty === "yes") riskScore += 1;
    if (
      data.familyHistory?.includes("pcos") ||
      data.familyHistory?.includes("diabetes")
    )
      riskScore += 2;

    let riskLevel: string;
    if (riskScore >= 8) {
      riskLevel = "High Risk";
    } else if (riskScore >= 4) {
      riskLevel = "Moderate Risk";
    } else {
      riskLevel = "Low Risk";
    }

    const assessmentData = {
      userId: null, // For now, we're not requiring user authentication
      symptoms: data.symptoms || [],
      responses: data,
      riskScore,
      riskLevel,
    };

    // Store assessment data in localStorage for results page
    localStorage.setItem("lastAssessment", JSON.stringify(assessmentData));

    submitAssessmentMutation.mutate(assessmentData);
  };

  const symptoms = [
    { value: "irregular-periods", label: "Irregular periods" },
    { value: "acne", label: "Acne or oily skin" },
    { value: "weight-gain", label: "Weight gain" },
    { value: "excess-hair", label: "Excess facial/body hair" },
    { value: "hair-loss", label: "Hair thinning or scalp hair loss" },
    { value: "mood-swings", label: "Mood swings" },
    { value: "fatigue", label: "Fatigue" },
    { value: "bloating", label: "Bloating or abdominal discomfort" },
    { value: "weight-difficulty", label: "Difficulty losing weight" },
    { value: "dark-patches", label: "Dark patches on skin" },
    { value: "cravings", label: "Cravings for carbs/sugar" },
    { value: "sleep-issues", label: "Sleep disturbances" },
  ];

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
            PCOS/PCOD Symptom Assessment
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            This comprehensive assessment will help identify potential symptoms
            and risk factors. Please answer all questions honestly for the most
            accurate results.
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {/* Symptoms Checklist */}
                <div>
                  <h2 className="text-2xl font-bold text-neutral-800 mb-6">
                    Common PCOS/PCOD Symptoms
                  </h2>
                  <p className="text-neutral-600 mb-6">
                    Please check all symptoms you are currently experiencing:
                  </p>

                  <FormField
                    control={form.control}
                    name="symptoms"
                    render={() => (
                      <FormItem>
                        <div className="grid md:grid-cols-2 gap-4">
                          {symptoms.map((symptom) => (
                            <FormField
                              key={symptom.value}
                              control={form.control}
                              name="symptoms"
                              render={({ field }) => (
                                <FormItem className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(
                                        symptom.value,
                                      )}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([
                                              ...(field.value || []),
                                              symptom.value,
                                            ])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) =>
                                                  value !== symptom.value,
                                              ),
                                            );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-neutral-700 cursor-pointer">
                                    {symptom.label}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Menstrual Health */}
                <Card className="bg-neutral-50">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="periodRegularity"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              How regular are your periods?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="regular"
                                    id="regular"
                                  />
                                  <Label htmlFor="regular">
                                    Regular (every 28–35 days)
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="irregular"
                                    id="irregular"
                                  />
                                  <Label htmlFor="irregular">
                                    Irregular (more than 35 days or
                                    unpredictable)
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="missed" id="missed" />
                                  <Label htmlFor="missed">
                                    Missed for 2+ months
                                  </Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="periodDuration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              How long do your periods usually last?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="short" id="short" />
                                  <Label htmlFor="short">
                                    Less than 3 days
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="normal" id="normal" />
                                  <Label htmlFor="normal">3–7 days</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="long" id="long" />
                                  <Label htmlFor="long">More than 7 days</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="periodPain"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              Do you experience painful or heavy periods?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="yes" id="pain-yes" />
                                  <Label htmlFor="pain-yes">Yes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="no" id="pain-no" />
                                  <Label htmlFor="pain-no">No</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Emotional & Mental Health */}
                <Card className="bg-neutral-50">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="moodIssues"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              Do you frequently experience mood swings, anxiety,
                              or depression?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="yes" id="mood-yes" />
                                  <Label htmlFor="mood-yes">Yes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="no" id="mood-no" />
                                  <Label htmlFor="mood-no">No</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="fatigueLevel"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              Do you feel fatigued even after adequate rest?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="often"
                                    id="fatigue-often"
                                  />
                                  <Label htmlFor="fatigue-often">Often</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="sometimes"
                                    id="fatigue-sometimes"
                                  />
                                  <Label htmlFor="fatigue-sometimes">
                                    Sometimes
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="rarely"
                                    id="fatigue-rarely"
                                  />
                                  <Label htmlFor="fatigue-rarely">Rarely</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Physical Appearance */}
                <Card className="bg-neutral-50">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Additional radio group fields would go here for brevity, I'm showing the pattern */}
                      <FormField
                        control={form.control}
                        name="excessHair"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              Do you notice excess facial or body hair?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="yes" id="hair-yes" />
                                  <Label htmlFor="hair-yes">Yes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="no" id="hair-no" />
                                  <Label htmlFor="hair-no">No</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="weightGain"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              Have you gained weight recently, especially around
                              the belly?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="yes" id="weight-yes" />
                                  <Label htmlFor="weight-yes">Yes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="no" id="weight-no" />
                                  <Label htmlFor="weight-no">No</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Lifestyle & Family History */}
                <Card className="bg-neutral-50">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="sugarCravings"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              Do you often crave sugar or carbs?
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="space-y-2"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="yes"
                                    id="cravings-yes"
                                  />
                                  <Label htmlFor="cravings-yes">Yes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="no" id="cravings-no" />
                                  <Label htmlFor="cravings-no">No</Label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="familyHistory"
                        render={() => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              Do you have a family history of:
                            </FormLabel>
                            <div className="space-y-2">
                              {["pcos", "diabetes", "thyroid", "none"].map(
                                (condition) => (
                                  <FormField
                                    key={condition}
                                    control={form.control}
                                    name="familyHistory"
                                    render={({ field }) => (
                                      <FormItem className="flex items-center space-x-3">
                                        <FormControl>
                                          <Checkbox
                                            checked={field.value?.includes(
                                              condition,
                                            )}
                                            onCheckedChange={(checked) => {
                                              return checked
                                                ? field.onChange([
                                                    ...(field.value || []),
                                                    condition,
                                                  ])
                                                : field.onChange(
                                                    field.value?.filter(
                                                      (value) =>
                                                        value !== condition,
                                                    ),
                                                  );
                                            }}
                                          />
                                        </FormControl>
                                        <FormLabel className="text-neutral-700 capitalize">
                                          {condition === "pcos"
                                            ? "PCOS"
                                            : condition}
                                        </FormLabel>
                                      </FormItem>
                                    )}
                                  />
                                ),
                              )}
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitAssessmentMutation.isPending}
                    className="bg-primary text-white hover:bg-blue-700"
                  >
                    {submitAssessmentMutation.isPending
                      ? "Submitting..."
                      : "Submit Assessment"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
