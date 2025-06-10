"use client";

import { Button, Flex, Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <Flex
      p={20}
      textAlign="center"
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundImage={"/assets/26807.jpg"}
      backgroundSize={"cover"}
      h={"100vh"}
    >
      <Heading
        mb={10}
        sx={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
        }}
        color={"white"}
      >
        Choose an Insurance Company
      </Heading>
      <VStack spacing={8} direction="row" justify="center" w={"60%"}>
        <Button
          size="lg"
          colorScheme="blue"
          w="100%"
          h="100px"
          boxShadow={"2xl"}
          onClick={() => router.push("/pages/SecureLife?variant=A")}
        >
          SecureLife Insurance
        </Button>
        <Button
          size="lg"
          colorScheme="teal"
          w="100%"
          h="100px"
          boxShadow={"2xl"}
          onClick={() => router.push("/pages/HorizonProtect?variant=B")}
        >
          Horizon Protect
        </Button>
      </VStack>
    </Flex>
  );
}
