import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import {
  fetchRequests,
  updateRequestStatus,
} from "../../Apis/Admin/propertyRequestApi";

const AdminPropertyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);

  const loadRequests = async () => {
    setLoading(true);
    try {
      const data = await fetchRequests();
      setRequests(data);
    } catch (err) {
      console.error("Failed to fetch property requests:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = async (id, status) => {
    setUpdatingId(id);
    try {
      await updateRequestStatus(id, status);
      await loadRequests(); // refresh the list
    } catch (err) {
      console.error(`Failed to update request ${id}:`, err);
    } finally {
      setUpdatingId(null);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Pending Property Requests</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Submitted By</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {requests?.map((req) => (
            <TableRow key={req.id}>
              <TableCell>{req.id}</TableCell>
              <TableCell>{req.title}</TableCell>
              <TableCell>{req.username}</TableCell>
              <TableCell>{req.type}</TableCell>
              <TableCell>₹{req.price}</TableCell>
              <TableCell>{req.status}</TableCell>
              <TableCell className="space-x-2">
                <Button
                  variant="success"
                  disabled={updatingId === req.id}
                  onClick={() => handleAction(req.id, "accepted")}
                >
                  Accept
                </Button>
                <Button
                  variant="destructive"
                  disabled={updatingId === req.id}
                  onClick={() => handleAction(req.id, "rejected")}
                >
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminPropertyRequests;
