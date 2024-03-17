import React from "react";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { BarChartIcon } from "lucide-react";

const TemplatesPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <div className="bg-white p-8">
        <h1 className="text-3xl font-semibold">Email Templates</h1>
        <p className="mt-2 mb-6 text-gray-600">
          Use templates to send mass emails and workflow alerts.
        </p>
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger id="modules">
                <SelectValue placeholder="All Modules" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="module1">Module 1</SelectItem>
                <SelectItem value="module2">Module 2</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Search" />
          </div>
          <div className="flex space-x-2">
            <Button variant="default">+ New Template</Button>
            <Button variant="outline">New Template Folder</Button>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-4">Public Email Templates</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20%]">NAME</TableHead>
              <TableHead className="w-[30%]">SUBJECT</TableHead>
              <TableHead className="w-[20%]">MODULE/TYPE</TableHead>
              <TableHead className="w-[15%]">SENDER'S EMAIL ADDRESS</TableHead>
              <TableHead className="w-[10%]">
                OPEN RATE (LATEST VERSION)
              </TableHead>
              <TableHead className="w-[5%]">STATS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Application Association
              </TableCell>
              <TableCell>{`New candidate associated for $Openings.Posting Title}`}</TableCell>
              <TableCell>Applications</TableCell>
              <TableCell>Current User's Email</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <BarChartIcon className="text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Archived Application - Application
              </TableCell>
              <TableCell>{`Update on your application to $Name}`}</TableCell>
              <TableCell>Applications</TableCell>
              <TableCell>Current User's Email</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <BarChartIcon className="text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Cancel Interview Notification - Candidate
              </TableCell>
              <TableCell>{`Cancelling interview for $Openings.Posting Title} position`}</TableCell>
              <TableCell>Interviews</TableCell>
              <TableCell>Current User's Email</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <BarChartIcon className="text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Cancel Interview Notification - Interviewer
              </TableCell>
              <TableCell>{`Cancelling interview for $Openings.Posting Title} position`}</TableCell>
              <TableCell>Interviews</TableCell>
              <TableCell>Current User's Email</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <BarChartIcon className="text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Hired Application - Application
              </TableCell>
              <TableCell>{`Your application to $Name} is shortlisted`}</TableCell>
              <TableCell>Applications</TableCell>
              <TableCell>Current User's Email</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <BarChartIcon className="text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Interview Notification - Candidate
              </TableCell>
              <TableCell>{`Interview details for the position of $Openings.Posting Title}`}</TableCell>
              <TableCell>Interviews</TableCell>
              <TableCell>Current User's Email</TableCell>
              <TableCell>-</TableCell>
              <TableCell>
                <BarChartIcon className="text-gray-600" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TemplatesPage;
