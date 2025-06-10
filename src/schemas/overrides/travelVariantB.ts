import { RJSFSchema } from "@rjsf/utils";

export const schemaOverridesB: Partial<RJSFSchema> = {
  title: "Travel Insurance Quote – Variant B",
  required: [
    "firstName",
    "lastName",
    "email",
    "destination",
    "startDate",
    "endDate",
  ],
  properties: {
    age: {
      title: "Your Current Age (above 18)",
    },
    destination: {
      type: "string",
      title: "Travel Destination",
      enum: ["Europe", "USA", "Asia", "Africa", "Middle-East", "Other"],
    },
    street: {
      type: "string",
      title: "Street",
    },
  },
};
