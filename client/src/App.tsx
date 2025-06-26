import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import SymptomTest from "@/pages/SymptomTest";
import Results from "@/pages/Results";
import PeriodTracker from "@/pages/PeriodTracker";
import Forum from "@/pages/Forum";
import Signup from "@/pages/Signup";
import DietNutrition from "@/pages/DietNutrition";
import DoctorConsultation from "@/pages/DoctorConsultation";
import ManagementCare from "@/pages/ManagementCare";
import EducationalResources from "@/pages/EducationalResources";
import MedicalTests from "@/pages/MedicalTests";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/symptom-test" component={SymptomTest} />
        <Route path="/results" component={Results} />
        <Route path="/period-tracker" component={PeriodTracker} />
        <Route path="/forum" component={Forum} />
        <Route path="/signup" component={Signup} />
        <Route path="/diet-nutrition" component={DietNutrition} />
        <Route path="/doctor-consultation" component={DoctorConsultation} />
        <Route path="/management-care" component={ManagementCare} />
        <Route path="/educational-resources" component={EducationalResources} />
        <Route path="/medical-tests" component={MedicalTests} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
