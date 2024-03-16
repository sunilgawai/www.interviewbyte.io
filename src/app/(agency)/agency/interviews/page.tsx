import { CreateInterviewDialog } from "@/components/create-interview-dialog";
import { Button } from "@/components/ui/button";
import React from "react";

const InterviewsPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-10 p-24">
      <h1 className="font-semibold text-2xl">Interviews</h1>
      <p className="font-base text-md">
        Schedule interviews with candidates who have applied for positions
      </p>
      <CreateInterviewDialog />
    </div>
  );
};

export default InterviewsPage;
