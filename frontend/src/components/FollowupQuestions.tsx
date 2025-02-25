"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FollowupQuestionsProps {
  questions: string[];
  onSubmit: (answers: Array<{ question: string; answer: string }>) => void;
  isLoading: boolean;
}

export function FollowupQuestions({ questions, onSubmit, isLoading }: FollowupQuestionsProps) {
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const questionAnswers = questions.map((question, index) => ({
      question,
      answer: answers[index] || "No answer provided"
    }));
    
    onSubmit(questionAnswers);
  };

  return (
    <div className="space-y-6">
      <div className="bg-secondary/30 rounded-lg p-4 border">
        <p className="text-sm text-muted-foreground mb-2">
          To better understand your research needs, please answer these follow-up questions:
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((question, index) => (
          <div key={index} className="space-y-2">
            <label className="text-sm font-medium">
              {question}
            </label>
            <Input
              value={answers[index]}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              placeholder="Your answer"
              className="w-full"
            />
          </div>
        ))}
        
        <Button 
          type="submit" 
          disabled={isLoading || answers.every(answer => !answer.trim())}
          className="w-full"
        >
          {isLoading ? "Processing..." : "Submit Answers"}
        </Button>
      </form>
    </div>
  );
}
