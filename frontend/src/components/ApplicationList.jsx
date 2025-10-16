import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const API_URL = import.meta.env.VITE_GET_API_URL;

export default function ApplicationList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState("1");
  const [size] = useState(9);
  const [totalPages, setTotalPages] = useState(1);

  const fetchApplications = async (currentPage = 1) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/admin/1/getApplicationByAgentId?page=${
          currentPage - 1
        }&size=${size}`
      );

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setApplications(Array.isArray(data.content) ? data.content : []);
      setTotalPages(data.totalPages || 1);
      toast.success("Records fetched successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch applications");
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications(page);
    setInputPage(String(page));
  }, [page]);

  const handlePrev = () => page > 1 && setPage(page - 1);
  const handleNext = () => page < totalPages && setPage(page + 1);

  const handlePageInput = (e) => setInputPage(e.target.value);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      const value = parseInt(inputPage);
      if (value >= 1 && value <= totalPages) setPage(value);
      else toast.error(`Enter a page between 1 and ${totalPages}`);
    }
  };

  const allKeys = Array.from(
    new Set(applications.flatMap((app) => Object.keys(app)))
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 bg-white rounded-lg shadow">
      <Toaster />
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Saved Applications
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : applications.length === 0 ? (
        <p className="text-center text-gray-500">No records found</p>
      ) : (
        <div className="overflow-x-auto">
          <Table className="min-w-[1200px] border border-gray-200">
            <TableHeader className="bg-gray-100 border-b border-gray-200">
              <TableRow>
                <TableHead className="border-r p-2 w-[50px]">#</TableHead>
                {allKeys.map((key) => (
                  <TableHead
                    key={key}
                    className="border-r p-2 min-w-[150px] truncate">
                    {key}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((item, index) => (
                <TableRow key={item.applicationId || index}>
                  <TableCell className="border-r p-2">
                    {(page - 1) * size + index + 1}
                  </TableCell>
                  {allKeys.map((key) => (
                    <TableCell
                      key={key}
                      className="border-r p-2 truncate max-w-[150px]">
                      {item[key] !== null && item[key] !== "" ? item[key] : "-"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-center items-center gap-2 mt-4">
            <Button onClick={handlePrev} disabled={page === 1}>
              Previous
            </Button>

            <input
              type="text"
              value={inputPage}
              onChange={handlePageInput}
              onKeyDown={handleEnter}
              className="w-16 h-10 text-center border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button onClick={handleNext} disabled={page === totalPages}>
              Next
            </Button>
          </div>

          <p className="text-center mt-2">
            Page {page} of {totalPages}
          </p>
        </div>
      )}
    </div>
  );
}
