import { RJSFSchema } from "@rjsf/utils";
import deepmerge from "deepmerge";

export const mergeSchemas = (
  baseSchema: RJSFSchema,
  overrideSchema: Partial<RJSFSchema>
): RJSFSchema => {
  return deepmerge(baseSchema, overrideSchema) as RJSFSchema;
};
