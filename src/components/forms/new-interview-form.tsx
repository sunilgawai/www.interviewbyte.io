
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const NewInterviewForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Interview Information</h1>
        <Button variant="outline">Edit Page Layout</Button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-medium mb-4">Interview Information</h2>
          <div className="flex flex-col space-y-4">
            <Select>
              <SelectTrigger id="interview-name">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="interview1">Interview 1</SelectItem>
                <SelectItem value="interview2">Interview 2</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Client Name" />
            <div className="flex space-x-4">
              <Input placeholder="From" type="date" />
              <Input placeholder="Time" type="time" />
            </div>
            <Input placeholder="Interviewer(s)" />
            <Input placeholder="Location" />
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-4">
          <Input placeholder="Candidate Name" />
            <Input placeholder="Candidate Name" />
            <Input placeholder="Posting Title" />
            <div className="flex space-x-4">
              <Input placeholder="To" type="date" />
              <Input placeholder="Time" type="time" />
            </div>
            <Input placeholder="Interview Owner" />
            <Textarea placeholder="Schedule Comments" />
            <Select>
              <SelectTrigger id="assessment-name">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="assessment1">Assessment 1</SelectItem>
                <SelectItem value="assessment2">Assessment 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">Attachment Information</h2>
        <Select>
          <SelectTrigger id="attachment-type">
            <SelectValue placeholder="Others" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="type1">Type 1</SelectItem>
            <SelectItem value="type2">Type 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex justify-end space-x-2 mt-6">
        <Button variant="outline">Cancel</Button>
        <Button variant="secondary">Save and New</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default NewInterviewForm;
