// src/forms/variants.ts
import { RJSFSchema, UiSchema } from "@rjsf/utils";
import { baseSchema } from "@/schemas/baseTravel";
import { schemaOverridesA } from "@/schemas/overrides/travelVariantA";
import { schemaOverridesB } from "@/schemas/overrides/travelVariantB";
import { uiSchema as variantAUiSchema } from "@/schemas/uiSchemas/travel";
import { uiSchema as variantBUiSchema } from "@/schemas/uiSchemas/travelV2";
import { mergeSchemas } from "@/forms/utils/mergeSchemas";

export const getVariantSchema = (
  variant: "A" | "B"
): {
  schema: RJSFSchema;
  uiSchema: UiSchema;
} => {
  if (variant === "A") {
    console.log(mergeSchemas(baseSchema, schemaOverridesA));
    return {
      schema: mergeSchemas(baseSchema, schemaOverridesA),
      uiSchema: variantAUiSchema,
    };
  }

  console.log(mergeSchemas(baseSchema, schemaOverridesB));

  return {
    schema: mergeSchemas(baseSchema, schemaOverridesB),
    uiSchema: variantBUiSchema,
  };
};
