import { UiSchema } from "@rjsf/utils";

export const uiSchema: UiSchema = {
  "ui:order": [
    "email",
    "firstName",
    "lastName",
    "street",
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
  },
  firstName: {
    "ui:widget": "text",
    "ui:placeholder": "Your first name",
  },
  lastName: {
    "ui:widget": "text",
    "ui:placeholder": "Your last name",
  },
  street: {
    "ui:widget": "text",
    "ui:placeholder": "enter your street",
  },
  age: {
    "ui:widget": "updown",
    "ui:placeholder": "Your age",
    "ui:help": "Must be 0 or older",
  },
  destination: {
    "ui:widget": "select",
    "ui:placeholder": "choose destination",
  },
  startDate: {
    "ui:widget": "date",
    "ui:placeholder": "Start date",
  },
  endDate: {
    "ui:widget": "date",
    "ui:placeholder": "End date",
  },
  needsMedicalCoverage: {
    "ui:widget": "radio",
    "ui:help": "Choose yes if you need medical coverage.",
    "ui:options": {
      inline: true,
    },
  },
};
