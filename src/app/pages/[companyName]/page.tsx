"use client";

import { useParams, useSearchParams } from "next/navigation";
import { getVariantSchema } from "@/forms/variants";
import dynamic from "next/dynamic";
import { companyConfigs } from "@/config/companyConfigs";
import { FormLayout } from "@/components/FormLayout";
import { Box, Center, Spinner } from "@chakra-ui/react";
import { MultiStepForm } from "@/components/MultiStepForm";
const FormRenderer = dynamic(() => import("@/components/formRenderer"), {
  ssr: false,
  loading: () => (
    <Center minH="200px">
      <Spinner size="xl" color="brand.400" />
    </Center>
  ),
});

const Page = () => {
  const { companyName } = useParams<{ companyName: string }>();
  const searchParams = useSearchParams();
  const variant = searchParams.get("variant") as "A" | "B";

  const { schema, uiSchema } = getVariantSchema(variant || "A");
  const config = companyConfigs[companyName as keyof typeof companyConfigs];

  if (!config) {
    return <Box p={10}>Unknown insurance company: {companyName}</Box>;
  }

  return (
    <Box
      p={10}
      bgImage={"/assets/26807.jpg"}
      h={"100vh"}
      overflowY={"auto"}
      bgSize={"cover"}
    >
      <FormLayout config={config}>
        {config?.multiStep ? (
          <MultiStepForm schema={schema} uiSchema={uiSchema} />
        ) : (
          <FormRenderer schema={schema} uiSchema={uiSchema} />
        )}
      </FormLayout>
    </Box>
  );
};

export default Page;
