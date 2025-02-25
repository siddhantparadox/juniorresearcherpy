"use client";
import React, { useState } from "react";
import { ResearchForm, ResearchFormData } from "@/components/ResearchForm";
import { ResearchResults } from "@/components/ResearchResults";
import { LoadingIndicator } from "@/components/LoadingIndicator";
import { FollowupQuestions } from "@/components/FollowupQuestions";

// Define the research flow states
type ResearchState = "INITIAL" | "FOLLOWUP" | "RESULTS";

export default function HomePage() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [researchState, setResearchState] = useState<ResearchState>("INITIAL");
  
  // Store the form data and followup questions
  const [currentFormData, setCurrentFormData] = useState<ResearchFormData | null>(null);
  const [followupQuestions, setFollowupQuestions] = useState<string[]>([]);

  const handleInitialSubmit = async (formData: ResearchFormData) => {
    setIsLoading(true);
    setResult("");
    setCurrentFormData(formData);
    
    try {
      // First, get followup questions
      const followupResponse = await fetch("http://localhost:8080/followup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: formData.query }),
      });
      
      if (!followupResponse.ok) {
        throw new Error("Failed to get followup questions - " + followupResponse.statusText);
      }
      
      const followupData = await followupResponse.json();
      console.log("Followup questions:", followupData);
      
      if (followupData.questions && followupData.questions.length > 0) {
        // If we have followup questions, show them
        setFollowupQuestions(followupData.questions);
        setResearchState("FOLLOWUP");
      } else {
        // If no followup questions, proceed directly to research
        await submitResearch(formData, []);
      }
    } catch (error) {
      console.error("Error getting followup questions:", error);
      setResult("Error: " + (error instanceof Error ? error.message : String(error)));
      setResearchState("INITIAL");
    } finally {
      setIsLoading(false);
    }
  };

  const handleFollowupSubmit = async (answers: Array<{ question: string; answer: string }>) => {
    if (!currentFormData) return;
    
    setIsLoading(true);
    await submitResearch(currentFormData, answers);
  };

  const submitResearch = async (formData: ResearchFormData, followupAnswers: Array<{ question: string; answer: string }>) => {
    try {
      // Prepare the request data with form data and followup answers
      const requestData = {
        query: formData.query,
        mode: formData.mode,
        breadth: formData.breadth,
        depth: formData.depth,
        followup_answers: followupAnswers
      };
      
      console.log("Submitting research with data:", requestData);
      
      const response = await fetch("http://localhost:8080/research", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit research - " + response.statusText);
      }
      
      const data = await response.json();
      console.log("Research results:", data);
      setResult(data.result || JSON.stringify(data, null, 2));
      setResearchState("RESULTS");
    } catch (error) {
      console.error("Error submitting research:", error);
      setResult("Error: " + (error instanceof Error ? error.message : String(error)));
    } finally {
      setIsLoading(false);
    }
  };

  const resetResearch = () => {
    setResearchState("INITIAL");
    setResult("");
    setCurrentFormData(null);
    setFollowupQuestions([]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-card">
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-primary">Junior Researcher</h1>
          <p className="text-muted-foreground mt-2">
            An intelligent research assistant powered by AI
          </p>
        </div>
      </header>
      
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="bg-card rounded-lg shadow-sm p-6 border">
              {researchState === "INITIAL" && (
                <>
                  <h2 className="text-xl font-semibold mb-6">Research Settings</h2>
                  <ResearchForm onSubmit={handleInitialSubmit} isLoading={isLoading} />
                </>
              )}
              
              {researchState === "FOLLOWUP" && (
                <>
                  <h2 className="text-xl font-semibold mb-6">Follow-up Questions</h2>
                  <FollowupQuestions 
                    questions={followupQuestions} 
                    onSubmit={handleFollowupSubmit} 
                    isLoading={isLoading} 
                  />
                </>
              )}
              
              {researchState === "RESULTS" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Research Complete</h2>
                  <p className="text-sm text-muted-foreground">
                    Your research results are displayed on the right.
                  </p>
                  <button 
                    onClick={resetResearch}
                    className="text-primary text-sm hover:underline"
                  >
                    Start a new research query
                  </button>
                </div>
              )}
              
              <LoadingIndicator isLoading={isLoading} />
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <ResearchResults result={result} />
          </div>
        </div>
      </div>
    </div>
  );
}
