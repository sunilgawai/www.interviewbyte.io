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

export const InterviewsColumns: ColumnDef<Category>[] = [
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
    accessorKey: "interview_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          INTERVIEW NAME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <Avatar>
        <AvatarFallback>
          <span className="sr-only">{row.getValue("username")}</span>
          <Icons.user className="h-8 w-8" />
        </AvatarFallback>
      </Avatar>
      // <div className="font-medium text-lg">{row.getValue("image")}</div>
      //   <Image src={pizza} alt="image" width={60} />
    ),
  },
  {
    accessorKey: "interview_from",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          FROM
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "interview_to",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          TO
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "candidate_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CANDIDATE NAME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "client_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CLIENT NAME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "posting_title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          CANDIDATE NAME
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="font-normal text-base">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "interview_status",
    header: "INTERVIEW STATUS",
    cell: ({ row }) => (
      <div className="capitalize">
        <div className="font-normal text-base">
          {row.getValue("interview_status")}
        </div>
      </div>
    ),
  },
//   {
//     id: "actions",
//     header: ({ column }) => {
//       return (
//         <Button variant="ghost">
//           Action
//           <CaretSortIcon className="ml-2 h-4 w-4 hover:bg-transparent" />
//         </Button>
//       );
//     },
//     enableHiding: false,
//     cell: ({ row }) => {
//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <DotsHorizontalIcon className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuItem>View Category</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>Edit Category</DropdownMenuItem>
//             <DropdownMenuItem>Delete Category</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       );
//     },
//   },
];
