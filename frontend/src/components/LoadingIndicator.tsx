"use client";
import React from "react";

interface LoadingIndicatorProps {
  isLoading: boolean;
}

export function LoadingIndicator({ isLoading }: LoadingIndicatorProps) {
  if (!isLoading) return null;

  return (
    <div className="mt-6 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0ms" }}></div>
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "300ms" }}></div>
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "600ms" }}></div>
        </div>
        <p className="text-sm text-primary font-medium">
          Researching your query... This may take a few moments
        </p>
      </div>
    </div>
  );
}
