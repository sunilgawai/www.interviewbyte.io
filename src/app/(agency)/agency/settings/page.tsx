import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const SettingsPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-10 p-24">
      <div className="bg-white w-full p-8">
        <div className="flex justify-between items-center border-b pb-4">
          <div className="flex space-x-8">
            <h1 className="text-lg font-semibold text-blue-600 border-b-2 border-blue-600 pb-2">
              Hiring Pipeline
            </h1>
            <h2 className="text-lg font-semibold text-gray-600">
              Applications
            </h2>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Hiring Pipeline</h2>
          <p className="text-sm text-gray-600 mt-2">
            A Pipeline is a group of Stages that represents the complete hiring
            process categorization for a job opening.
          </p>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-lg font-semibold">Stages List:</h3>
            <div className="space-x-2">
              <Button className="bg-gray-200 text-gray-700" variant="secondary">
                Manage Status
              </Button>
              <Button className="bg-blue-600 text-white">Add Stage</Button>
            </div>
          </div>
          <Table className="mt-4">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">STAGE NAME</TableHead>
                <TableHead className="w-[50%]">ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  <Badge
                    className="bg-blue-100 text-blue-600"
                    variant="default"
                  >
                    Screening
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link className="text-blue-600 mr-2" href="#">
                    Edit
                  </Link>{" "}
                  |{" "}
                  <Link className="text-red-600" href="#">
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Badge
                    className="bg-blue-100 text-blue-600"
                    variant="default"
                  >
                    Submissions
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link className="text-blue-600 mr-2" href="#">
                    Edit
                  </Link>{" "}
                  |{" "}
                  <Link className="text-red-600" href="#">
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Badge
                    className="bg-blue-100 text-blue-600"
                    variant="default"
                  >
                    Interview
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link className="text-blue-600 mr-2" href="#">
                    Edit
                  </Link>{" "}
                  |{" "}
                  <Link className="text-red-600" href="#">
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Badge
                    className="bg-blue-100 text-blue-600"
                    variant="default"
                  >
                    Offered
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link className="text-blue-600 mr-2" href="#">
                    Edit
                  </Link>{" "}
                  |{" "}
                  <Link className="text-red-600" href="#">
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Badge
                    className="bg-green-100 text-green-600"
                    variant="default"
                  >
                    Hired
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link className="text-blue-600 mr-2" href="#">
                    Edit
                  </Link>{" "}
                  |{" "}
                  <Link className="text-red-600" href="#">
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Badge className="bg-red-100 text-red-600" variant="default">
                    Rejected
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link className="text-blue-600 mr-2" href="#">
                    Edit
                  </Link>{" "}
                  |{" "}
                  <Link className="text-red-600" href="#">
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Badge
                    className="bg-gray-100 text-gray-600"
                    variant="default"
                  >
                    Archived
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link className="text-blue-600 mr-2" href="#">
                    Edit
                  </Link>{" "}
                  |{" "}
                  <Link className="text-red-600" href="#">
                    Delete
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Badge
                    className="bg-gray-100 text-gray-600"
                    variant="default"
                  >
                    Others
                  </Badge>
                </TableCell>
                <TableCell>0 unmapped statuses are in this stage.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="flex justify-end mt-4">
            <Button className="bg-blue-600 text-white">Map Status</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
