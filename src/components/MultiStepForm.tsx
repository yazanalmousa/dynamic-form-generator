// src/components/MultiStepForm.tsx
"use client";

import {
  Box,
  Button,
  Step,
  StepIndicator,
  Stepper,
  StepStatus,
  StepTitle,
  StepDescription,
  StepSeparator,
  StepNumber,
  useSteps,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { travelFormSteps } from "@/forms/stepConfigs";
import { UiSchema } from "@rjsf/utils";
import dynamic from "next/dynamic";
const FormRenderer = dynamic(() => import("@/components/formRenderer"), {
  ssr: false,
  loading: () => (
    <Center minH="200px">
      <Spinner size="xl" color="brand.400" />
    </Center>
  ),
});
export const MultiStepForm = ({
  schema,
  uiSchema,
}: {
  schema: any;
  uiSchema: UiSchema;
}) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: travelFormSteps.length,
  });
  const [formData, setFormData] = useState({});

  const currentStep = travelFormSteps[activeStep];

  const filteredSchema = {
    ...schema,
    properties: Object.fromEntries(
      Object.entries(schema.properties).filter(([key]) =>
        currentStep.fields.includes(key)
      )
    ),
    required: (schema.required || []).filter((r: any) =>
      currentStep.fields.includes(r)
    ),
  };

  const filteredUiSchema = Object.fromEntries(
    Object.entries(uiSchema).filter(
      ([key]) => currentStep.fields.includes(key) || key.startsWith("ui:")
    )
  );

  return (
    <Box>
      <Stepper index={activeStep} mb={6}>
        {travelFormSteps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepNumber />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription></StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <FormRenderer
        schema={filteredSchema}
        uiSchema={filteredUiSchema}
        formData={formData as any}
        onChange={(e: any) => setFormData(e.formData)}
        onSubmit={(e: any) => {
          if (activeStep < travelFormSteps.length - 1) {
            setFormData(e.formData);
            setActiveStep(activeStep + 1);
          } else {
            console.log("Final Submit:", e.formData);
          }
        }}
      />
    </Box>
  );
};
