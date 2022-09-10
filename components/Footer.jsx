import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
    >
      &copy; 2022 ElShenawy Realtor, Inc.
    </Box>
  );
};

export default Footer;
