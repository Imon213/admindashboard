import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, trackingID, date, status) {
  return { name, trackingID, date, status };
}
function makeStyle(status) {
  if (status === "Pending") {
    return {
      color: "red",
    };
  } else {
    return {
      color: "green",
    };
  }
}

const rows = [
  createData("Frozen yoghurt", 15978765, "1st october", "Approved"),
  createData("Ice cream sandwich", 88978765, "1st october", "Approved"),
  createData("Eclair", 98978778, "1st october", "Pending"),
  createData("Cupcake", 32978790, "1st october", "Approved"),
];

export default function BasicTable() {
  return (
    <div  className="table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{
          boxShadow: "0px 13px 20px 0px #80808029",
          borderRadius: "0.5rem",
        }}
      >
        <Table
         
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">
                TrackingID
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">
                Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">
                Status
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="left">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.trackingID}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left" style={makeStyle(row.status)}>
                  {row.status}
                </TableCell>
                <TableCell align="left">Details</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
