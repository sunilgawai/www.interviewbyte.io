"use client";

import pizza from "@/assets/pizza.png";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Icons } from "../icons";

export type Category = {
  id: number;
  name: string;
  email: string;
  username: string;
  emailVerified: string;
  image: string;
  // status: boolean;
};

export const ApplicationsColumns: ColumnDef<Category>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          APPLICATION NAME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          HIRING PIPELINE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "emailVerified",
    header: "APPLICATION STATUS",
    cell: ({ row }) => (
      <div className="capitalize">
        {row.getValue("emailVerified") === true ? (
          <span className="bg-green-300/60 py-1.5 px-4 rounded-md font-medium text-center">
            Verified
          </span>
        ) : (
          <span className="bg-red-300/60 py-1.5 px-4 rounded-md font-medium">
            Not Verified
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          APPLICATION SOURCE
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("username")}</div>
    ),
  },
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          POTENTIALNAME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("username")}</div>
    ),
  },
  {
    id: "actions",
    header: ({ column }) => {
      return (
        <Button variant="ghost">
          Action
          <CaretSortIcon className="ml-2 h-4 w-4 hover:bg-transparent" />
        </Button>
      );
    },
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Category</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Category</DropdownMenuItem>
            <DropdownMenuItem>Delete Category</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
