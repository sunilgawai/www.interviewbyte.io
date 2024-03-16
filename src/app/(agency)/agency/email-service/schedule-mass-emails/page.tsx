import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <div className="bg-white w-full p-8">
        <div className="flex items-center justify-between border-b pb-4">
          <h1 className="text-2xl font-semibold">Schedule Mass Emails</h1>
          <Button className="text-sm" variant="ghost">
            Help
          </Button>
        </div>
        <div className="mt-6 rounded-md border p-4">
          <p className="text-sm leading-6">
            You can schedule a time for the mass emails to be sent.
            <br />
            You can send up to 20 emails per day.
            <br />
            You can create a maximum of three schedulers.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Mass Mail Schedulers</h2>
          <div className="mt-4 flex items-center justify-between border-t pt-4">
            <p className="text-sm text-gray-500">
              No mass emails have been scheduled.
            </p>
            <Button className="flex items-center space-x-2">
              <PlusIcon className="h-4 w-4" />
              <span>New Mass Mail Schedule</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
