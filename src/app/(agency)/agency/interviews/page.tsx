import { CreateInterviewDialog } from "@/components/create-interview-dialog";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

const InterviewsPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-10 p-24">
      {/* <h1 className="font-semibold text-2xl">Interviews</h1>
      <p className="font-base text-md">
        Schedule interviews with candidates who have applied for positions
      </p>
      <CreateInterviewDialog /> */}
      <div className="bg-white w-full p-8">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-2xl font-semibold">Interviews</h1>
          <Button className="text-sm" variant="ghost">
            Help
          </Button>
        </div>
        <div className="mt-6 rounded-md border p-4">
          <p className="text-sm leading-6">
            Schedule interviews with candidates who have applied for positions
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Start Scheduling interviews</h2>
          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <p className="text-sm text-gray-500">
              No interview has been scheduled.
            </p>
            <CreateInterviewDialog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewsPage;
