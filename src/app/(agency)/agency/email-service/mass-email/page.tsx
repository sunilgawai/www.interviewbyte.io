import React from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { HelpCircleIcon } from "lucide-react";
import { EmailTemplateSelector } from "@/components/email-template-selector";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import ApplicationsTable from "@/components/tables/applications-table";
import { ApplicationsColumns } from "@/components/tables/application-column";
const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <div className="max-w-4xl mx-auto my-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Mass Email</h1>
          <a className="text-indigo-600 hover:text-indigo-800" href="#">
            <HelpCircleIcon className="w-6 h-6" />
          </a>
        </div>
        <div className="bg-yellow-100 border border-yellow-200 rounded p-4 mb-6">
          <p className="font-semibold mb-2">Tip:</p>
          <ul className="list-disc pl-4">
            <li>
              This page helps you select an email template. If you do not find
              an email template that matches your requirements, you can create a
              custom template. (Note: Must have permission to manage templates.)
            </li>
            <li>
              Emails will not be sent for the applications without correct email
              addresses.
            </li>
            <li>
              The Trial Edition allows you to send up to 20 mass emails per day.
            </li>
            <li>
              Note: If our team receives spam reports from your candidates or
              contacts, your account's bulk email capabilities will be disabled
              without prior notification. To learn more, please refer to our
              Anti-spam Policy.
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Email Templates</h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col mb-4 md:mb-0">
              <label className="font-medium mb-1" htmlFor="email-template">
                Email Template <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center justify-center gap-4">
                <EmailTemplateSelector />
                <Link
                  className={cn(buttonVariants())}
                  href="/agency/templates"
                >
                  Create Template
                </Link>
              </div>
            </div>
            <div className="text-sm">
              <p className="font-medium">Number of emails sent today: 0</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center">
            <input
              className="mr-2"
              id="custom-view-criteria"
              name="criteria"
              type="radio"
            />
            <label className="font-medium" htmlFor="custom-view-criteria">
              Custom View Criteria
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              id="manual-criteria"
              name="criteria"
              type="radio"
            />
            <label className="font-medium" htmlFor="manual-criteria">
              Manual Criteria
            </label>
          </div>
          <div className="flex items-center">
            <input
              className="mr-2"
              id="saved-search"
              name="criteria"
              type="radio"
            />
            <label className="font-medium" htmlFor="saved-search">
              Saved Search
            </label>
          </div>
        </div>
      </div>

      <ApplicationsTable columns={ApplicationsColumns} data={[]} />
    </div>
  );
};

export default Page;
