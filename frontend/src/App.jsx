import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ApplicationForm from "./components/ApplicationForm";
import ApplicationList from "./components/ApplicationList";

function App() {
  const [activeTab, setActiveTab] = useState("form"); 

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <Card className="shadow-lg">
        <CardContent className="p-6">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant={activeTab === "form" ? "default" : "outline"}
              onClick={() => setActiveTab("form")}
              className={`px-6 ${
                activeTab === "form"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : ""
              }`}>
              Form
            </Button>
            <Button
              variant={activeTab === "applicants" ? "default" : "outline"}
              onClick={() => setActiveTab("applicants")}
              className={`px-6 ${
                activeTab === "applicants"
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : ""
              }`}>
              Applicants
            </Button>
          </div>

          <div className="transition-all duration-300">
            {activeTab === "form" ? <ApplicationForm /> : <ApplicationList />}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
