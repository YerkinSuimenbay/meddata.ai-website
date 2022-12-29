import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Circle = () => {
  return (
    <Box
      sx={{ height: "calc(100vh - 70px)" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Box>
  );
};

export default Circle;
