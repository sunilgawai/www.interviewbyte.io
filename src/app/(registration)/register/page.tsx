import React from "react";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import Link from "next/link";
import { BriefcaseIcon, UsersIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
const RegistrationPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-10 p-24">
      <h1 className="font-semibold text-2xl">Welcome to InterviewByte</h1>
      <h2 className="mt-6 mb-4 text-lg font-medium">
        Choose an account type to continue
      </h2>
      <div className="flex justify-center space-x-8">
        <Card className="w-[350px]">
          <CardHeader>
            <UsersIcon className="text-blue-500" />
            <CardTitle>Staffing Agency</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Take your agency to the next level. Hire the right talent for your
              clients
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="w-[350px]">
          <CardHeader>
            <BriefcaseIcon className="text-blue-500" />
            <CardTitle>Corporate HRs</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Find and retain the best talent for your organization
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="w-full my-4 flex flex-col items-center justify-center gap-y-4">
        <h1 className="font-semibold text-lg">
          Please provide us below details
        </h1>
        <form className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-start justify-between">
            <p className="font-base text-lg">Companay</p>
            <Input
              className="py-2 px-4 w-full"
              placeholder="enter company name"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <p className="font-base text-lg">Phone*</p>
            <Input
              className="py-2 px-4 w-full"
              placeholder="enter phone number"
            />
          </div>
          <Button>Get Started</Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
