import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function PeriodTracker() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedFlow, setSelectedFlow] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [notes, setNotes] = useState("");

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const symptoms = [
    { id: "cramps", label: "Cramps" },
    { id: "bloating", label: "Bloating" },
    { id: "mood-changes", label: "Mood changes" },
    { id: "headache", label: "Headache" },
    { id: "fatigue", label: "Fatigue" },
    { id: "breast-tenderness", label: "Breast tenderness" },
  ];

  const navigateMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const getDayClass = (day: number | null) => {
    if (!day) return "text-neutral-400";
    
    // Sample period days (8-12) and ovulation day (22)
    if ([8, 9, 10, 11, 12].includes(day)) {
      return "text-white bg-secondary rounded cursor-pointer";
    }
    if (day === 22) {
      return "text-white bg-primary rounded cursor-pointer";
    }
    return "text-neutral-800 hover:bg-neutral-100 rounded cursor-pointer";
  };

  const handleSymptomChange = (symptomId: string, checked: boolean) => {
    if (checked) {
      setSelectedSymptoms([...selectedSymptoms, symptomId]);
    } else {
      setSelectedSymptoms(selectedSymptoms.filter(id => id !== symptomId));
    }
  };

  const handleSaveEntry = () => {
    // Here you would typically save to your backend
    console.log({
      date: new Date().toISOString().split('T')[0],
      flow: selectedFlow,
      symptoms: selectedSymptoms,
      notes: notes,
    });
    
    // Reset form
    setSelectedFlow("");
    setSelectedSymptoms([]);
    setNotes("");
  };

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">Period Tracker</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Track your menstrual cycle, symptoms, and patterns to better understand your health
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar Section */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">Cycle Calendar</h2>

                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-6">
                  <Button variant="ghost" onClick={() => navigateMonth(-1)}>
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <h3 className="text-xl font-semibold text-neutral-800">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                  </h3>
                  <Button variant="ghost" onClick={() => navigateMonth(1)}>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-sm font-medium text-neutral-600 p-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {getDaysInMonth().map((day, index) => (
                    <div
                      key={index}
                      className={`text-center p-3 ${getDayClass(day)}`}
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Legend */}
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-secondary rounded mr-2"></div>
                    <span className="text-neutral-600">Period Days</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-primary rounded mr-2"></div>
                    <span className="text-neutral-600">Ovulation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-accent rounded mr-2"></div>
                    <span className="text-neutral-600">Fertile Window</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Cycle Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Last Period:</span>
                    <span className="font-semibold text-neutral-800">Dec 8, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Cycle Length:</span>
                    <span className="font-semibold text-neutral-800">28 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Period Length:</span>
                    <span className="font-semibold text-neutral-800">5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Next Period:</span>
                    <span className="font-semibold text-primary">Jan 5, 2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Daily Log */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-4">Today's Log</h3>
                <div className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium text-neutral-700 mb-2">Flow</Label>
                    <Select value={selectedFlow} onValueChange={setSelectedFlow}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select flow" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No flow</SelectItem>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="heavy">Heavy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-neutral-700 mb-2">Symptoms</Label>
                    <div className="space-y-2">
                      {symptoms.map((symptom) => (
                        <div key={symptom.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={symptom.id}
                            checked={selectedSymptoms.includes(symptom.id)}
                            onCheckedChange={(checked) => handleSymptomChange(symptom.id, checked as boolean)}
                          />
                          <Label htmlFor={symptom.id} className="text-sm">
                            {symptom.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-neutral-700 mb-2">Notes</Label>
                    <Textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Any additional notes..."
                      rows={3}
                    />
                  </div>

                  <Button 
                    onClick={handleSaveEntry}
                    className="w-full bg-primary text-white hover:bg-blue-700"
                  >
                    Save Entry
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Insights */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-neutral-800 mb-3">💡 Insight</h3>
                <p className="text-sm text-neutral-600">
                  Your cycles have been regular for the past 3 months. Keep tracking to identify patterns!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
