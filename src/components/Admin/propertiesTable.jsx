import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";

const PropertiesTable = ({ properties, onEdit, onDelete }) => {
  return (
    <div className="w-full overflow-x-auto rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {properties && properties.length > 0 ? (
            properties.map((property) => (
              <TableRow key={property.id}>
                <TableCell>{property.title}</TableCell>
                <TableCell>{property.type}</TableCell>
                <TableCell>{property.location}</TableCell>
                <TableCell>{property.status}</TableCell>
                <TableCell>₹{property.price}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      onClick={() => onEdit(property)}
                      className="text-blue-500 border-blue-500 hover:bg-blue-50"
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => onDelete(property.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                No properties found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default PropertiesTable;
