"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export function EmailOptionsDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>Email Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            className="py-2 px-4 font-medium text-base"
            href="/agency/email-service/mass-email"
          >
            Mass Email
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            className="py-2 px-4 font-medium text-base"
            href="/agency/email-service/mass-sms-applications"
          >
            Mass SMS Applications
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            className="py-2 px-4 font-medium text-base"
            href="/agency/email-service/mass-updates"
          >
            Mass Updates
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link
            className="py-2 px-4 font-medium text-base"
            href="/agency/email-service/schedule-mass-emails"
          >
            Schedule Mass Emails
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
