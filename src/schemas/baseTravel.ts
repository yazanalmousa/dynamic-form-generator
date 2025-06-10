import { RJSFSchema } from "@rjsf/utils";

export const baseSchema: RJSFSchema = {
  title: "Travel Insurance Quote",
  type: "object",
  required: [],
  properties: {
    firstName: { type: "string", title: "First Name" },
    lastName: { type: "string", title: "Last Name" },
    email: { type: "string", title: "Email", format: "email" },
    mobileNumber: { type: "string", title: "Mobile" },
    age: { type: "integer", title: "Age", minimum: 0 },
    destination: {
      type: "string",
      title: "Travel Destination",
      enum: ["Europe", "USA", "Asia", "Africa", "Other"],
    },
    startDate: { type: "string", title: "Trip Start Date" },
    endDate: { type: "string", title: "Trip End Date" },
    needsMedicalCoverage: {
      type: "boolean",
      title: "Do you require medical coverage?",
    },
  },
};
