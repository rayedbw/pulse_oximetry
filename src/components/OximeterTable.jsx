import React from "react";

import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";

const OximeterTable = ({ spo2Data }) => {
  return (
    <TableContainer component={Paper}>
      <Table style={{ width: "100%" }} aria-label="spo2 table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Time</TableCell>
            <TableCell align="center">SpO2</TableCell>
            <TableCell align="center">Heart Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spo2Data.reverse().map((data) => (
            <TableRow key={data.id}>
              <TableCell align="center">
                {new Date(data.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell align="center">
                {new Date(data.createdAt).toLocaleTimeString()}
              </TableCell>
              <TableCell align="center">{data.spo2}</TableCell>
              <TableCell align="center">{data.heartRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OximeterTable;
