import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import { Box } from "@chakra-ui/react";

const Root = () => {
  return (
    <Box>
      <Navigation />
      <Outlet />
    </Box>
  );
};

export default Root;
