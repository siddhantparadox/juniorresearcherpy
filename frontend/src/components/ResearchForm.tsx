"use client";
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ResearchFormProps {
  onSubmit: (data: ResearchFormData) => void;
  isLoading: boolean;
}

export interface ResearchFormData {
  query: string;
  mode: string;
  breadth: number;
  depth: number;
}

export function ResearchForm({ onSubmit, isLoading }: ResearchFormProps) {
  const [mode, setMode] = React.useState("balanced");
  const [numQueries, setNumQueries] = React.useState(5);
  const [depth, setDepth] = React.useState(3);
  const [query, setQuery] = React.useState("");

  // Adjust queries and depth based on selected mode only when mode changes
  React.useEffect(() => {
    // Only set default values when mode changes, not on every render
    switch (mode) {
      case "fast":
        setNumQueries(3);
        setDepth(2);
        break;
      case "balanced":
        setNumQueries(5);
        setDepth(3);
        break;
      case "comprehensive":
        setNumQueries(5);
        setDepth(5);
        break;
    }
  }, [mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      query,
      mode,
      breadth: numQueries,
      depth
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Research Query
        </label>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What would you like to research?"
          className="w-full"
        />
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Research Mode
        </label>
        <Select value={mode} onValueChange={setMode}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select mode" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fast">
              <div className="flex flex-col">
                <span>Fast</span>
                <span className="text-xs text-muted-foreground">Quick research (~1-3 min)</span>
              </div>
            </SelectItem>
            <SelectItem value="balanced">
              <div className="flex flex-col">
                <span>Balanced</span>
                <span className="text-xs text-muted-foreground">Moderate depth (~3-6 min)</span>
              </div>
            </SelectItem>
            <SelectItem value="comprehensive">
              <div className="flex flex-col">
                <span>Comprehensive</span>
                <span className="text-xs text-muted-foreground">In-depth analysis (~5-12 min)</span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
        
        <div className="mt-2 text-xs bg-secondary/50 rounded-md p-3 border">
          <div className="font-medium text-primary mb-1">Mode Details:</div>
          {mode === "fast" && (
            <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
              <li>Quick, surface-level research</li>
              <li>Maximum of 3 concurrent queries</li>
              <li>No recursive deep diving</li>
              <li>Best for initial exploration</li>
            </ul>
          )}
          {mode === "balanced" && (
            <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
              <li>Moderate depth and breadth</li>
              <li>Maximum of 7 concurrent queries</li>
              <li>Explores main concepts and relationships</li>
              <li>Recommended for most research needs</li>
            </ul>
          )}
          {mode === "comprehensive" && (
            <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
              <li>Exhaustive, in-depth research</li>
              <li>Includes recursive deep diving</li>
              <li>Explores primary, secondary, and tertiary relationships</li>
              <li>Best for academic or detailed analysis</li>
            </ul>
          )}
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Number of Queries
          </label>
          <span className="text-sm font-medium text-primary">{numQueries}</span>
        </div>
        <Slider
          value={[numQueries]}
          min={1}
          max={mode === "fast" ? 3 : mode === "balanced" ? 7 : 5}
          step={1}
          onValueChange={(vals) => setNumQueries(vals[0])}
          className="py-2"
        />
        <p className="text-xs text-muted-foreground">
          More queries provide broader coverage of the topic
        </p>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Research Depth
          </label>
          <span className="text-sm font-medium text-primary">{depth}</span>
        </div>
        <Slider
          value={[depth]}
          min={1}
          max={mode === "fast" ? 2 : mode === "balanced" ? 3 : 5}
          step={1}
          onValueChange={(vals) => setDepth(vals[0])}
          className="py-2"
        />
        <p className="text-xs text-muted-foreground">
          Higher depth values result in more detailed research
        </p>
      </div>
      
      <Button 
        type="submit" 
        disabled={isLoading} 
        className="w-full"
      >
        {isLoading ? "Researching..." : "Start Research"}
      </Button>
    </form>
  );
}
