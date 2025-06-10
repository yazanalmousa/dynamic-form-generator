"use client";

import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

export const FormLayout = ({
  config,
  children,
}: {
  config: any;
  children: ReactNode;
}) => {
  return (
    <Box
      maxW="600px"
      mx="auto"
      bg={"white"}
      p={8}
      borderRadius="xl"
      boxShadow="md"
    >
      <Box textAlign="center" mb={6}>
        <Heading size="lg" mb={2}>
          {config.headline}
        </Heading>
        <Text fontSize="md" color="gray.600">
          {config.subtext}
        </Text>
      </Box>
      {children}
    </Box>
  );
};
