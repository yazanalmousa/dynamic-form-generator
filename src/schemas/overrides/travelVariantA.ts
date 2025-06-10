import { RJSFSchema } from "@rjsf/utils";

export const schemaOverridesA: Partial<RJSFSchema> = {
  title: "Travel Insurance Quote – Variant A",
  required: [
    "firstName",
    "lastName",
    "email",
    "mobileNumber",
    "destination",
    "startDate",
    "endDate",
  ],
};
