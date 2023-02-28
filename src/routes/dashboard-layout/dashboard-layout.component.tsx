import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components/navbar/navbar.component";
import { Sidebar } from "../../components/sidebar/sidebar.component";

const DashboardLayout = () => {
  return (
    <Box>
      <Navbar />
      <Sidebar />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
