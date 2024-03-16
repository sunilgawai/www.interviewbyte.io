import { EmailOptionsDropdown } from "@/components/email-options-dropdown";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const CandidatesPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <div className="flex items-center justify-center gap-4">
        <Link className={cn(buttonVariants())} href={""}>
          Create Candidate
        </Link>
        <Link className={cn(buttonVariants())} href={""}>
          Import Candidate
        </Link>
        <EmailOptionsDropdown />
      </div>
      <h1 className="font-semibold text-2xl">Candidates</h1>
      <p className="font-base text-md">
        Track Candidates who have applied or registered their details for future
        applications
      </p>
    </div>
  );
};

export default CandidatesPage;
