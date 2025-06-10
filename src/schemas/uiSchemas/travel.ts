import { UiSchema } from "@rjsf/utils";

export const uiSchema: UiSchema = {
  "ui:order": [
    "email",
    "firstName",
    "lastName",
    "destination",
    "mobileNumber",
    "startDate",
    "endDate",
    "age",
    "needsMedicalCoverage",
  ],
  email: {
    "ui:widget": "email",
    "ui:placeholder": "Enter your email",
    "ui:options": {
      chakra: {
        color: "black",
      },
    },
  },
  firstName: {
    "ui:widget": "text",
    "ui:placeholder": "Your first name",
    "ui:options": {
      chakra: {
        color: "black",
      },
    },
  },
  lastName: {
    "ui:widget": "text",
    "ui:placeholder": "Your last name",
    "ui:options": {
      chakra: {
        color: "black",
      },
    },
  },
  age: {
    "ui:widget": "updown",
    "ui:placeholder": "Your age",
    "ui:help": "Must be 0 or older",
    "ui:options": {
      chakra: {
        color: "black",
      },
    },
  },
  destination: {
    "ui:widget": "select",
    "ui:placeholder": "choose destination",
    "ui:options": {
      chakra: {
        color: "black",
      },
    },
  },
  startDate: {
    "ui:widget": "date",
    "ui:placeholder": "Start date",
    "ui:options": {
      chakra: {
        color: "black",
      },
    },
  },
  endDate: {
    "ui:widget": "date",
    "ui:placeholder": "End date",
    "ui:options": {
      chakra: {
        color: "black",
      },
    },
  },
  needsMedicalCoverage: {
    "ui:widget": "radio",
    "ui:help": "Choose yes if you need medical coverage.",
    "ui:options": {
      inline: true,
      chakra: {
        color: "black",
      },
    },
  },
};
