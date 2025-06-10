"use client";

import React from "react";
import Form from "@rjsf/chakra-ui";
import validator from "@rjsf/validator-ajv8";
import { RJSFSchema, UiSchema } from "@rjsf/utils";

interface FormRendererProps {
  schema: RJSFSchema;
  uiSchema: UiSchema;
  formData?: any;
  onChange?: (e: any) => void;
  onSubmit?: (e: any) => void;
  onError?: (e: any) => void;
}

const FormRenderer = ({
  schema,
  uiSchema,
  formData,
  onChange = () => {},
  onSubmit = (e) => console.log("Submitted data:", e.formData),
  onError = (e) => console.error("Form error:", e),
}: FormRendererProps) => {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onChange={onChange}
      onSubmit={onSubmit}
      onError={onError}
      validator={validator}
    />
  );
};

export default FormRenderer;
