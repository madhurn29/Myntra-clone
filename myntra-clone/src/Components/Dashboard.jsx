import { Box, Image } from "@chakra-ui/react";
import React from "react";
import AdminSidebar from "./AdminSidebar";
import SimpleSidebar from "./AdminSidebar";

function Dashboard() {
  console.log("dashboard");
  return (
    <AdminSidebar heading={"Dashboard"} >
      <Box>

      </Box>
    </AdminSidebar>
  );
}

export default Dashboard;
