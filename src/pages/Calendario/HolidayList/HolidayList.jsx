import * as React from "react";
import List from "@mui/material/List";

export default function HolidayList({ children }) {
  return (
    <List sx={{ width: "100%", maxWidth: 560, bgcolor: "background.paper" }}>
      {children}
    </List>
  );
}
