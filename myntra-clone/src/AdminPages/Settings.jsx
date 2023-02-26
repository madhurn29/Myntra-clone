import { Box } from "@chakra-ui/react";
import React from "react";
import AdminSidebar from "../Components/AdminSidebar";
import BackdropExample from "./EditModal";

function Settings() {
  return (
    <AdminSidebar heading={"Settings"}>
      <Box>
        <BackdropExample/>
      </Box>
    </AdminSidebar>
  );
}

export default Settings;
