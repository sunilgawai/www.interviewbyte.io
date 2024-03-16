import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Notebook, PlusIcon, UsersIcon, VideoIcon } from "lucide-react";
import Link from "next/link";

export function CreateInterviewDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center space-x-2">
          <PlusIcon className="h-4 w-4" />
          <span>Create Interview</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Select Mode of interview</DialogTitle>
          <DialogDescription>you can choose any of them</DialogDescription>
        </DialogHeader>
        <Link href={"/agency/interviews/new-formal-interview"}>
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <UsersIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Formal Interview
              </p>
              <p className="text-sm text-muted-foreground">
                Schedule and conduct Interviews with Candidates, Interviewers,
                Recruiters and Contacts.
              </p>
            </div>
          </div>
        </Link>
        <Link href={"/agency/interviews/new-formal-interview"}>
          <div className=" flex items-center space-x-4 rounded-md border p-4">
            <VideoIcon />
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                Video Interview
              </p>
              <p className="text-sm text-muted-foreground">
                Schedule and conduct both recorded and live video Interviews
                with Candidates, Recruiters and Interviewers. Log an Interview
              </p>
            </div>
          </div>
        </Link>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <Notebook />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Log an Interview (currently not available)
            </p>
            <p className="text-sm text-muted-foreground">
              Log Interview data that had happened in the past or spontaneously
            </p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
