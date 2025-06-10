import { extendTheme } from "@chakra-ui/react";
import { buttonStyle } from "./btn.style";
import { inputStyle } from "./input.style";
import { textAreaStyle } from "./textarea.style";
import { checkboxStyle } from "./checkbox.style";
import { selectStyle } from "./select.style";
import { radioStyle } from "./radio.style";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "black",
      },
      color: "black",
    },
  },
  colors: {
    brand: {
      50: "#e6fffa",
      100: "#b2f5ea",
      200: "#81e6d9",
      300: "#4fd1c7",
      400: "#38b2ac",
      500: "#319795",
      600: "#2c7a7b",
      700: "#285e61",
      800: "#234e52",
      900: "#1d4044",
    },
    gray: {
      50: "#f7fafc",
      100: "#edf2f7",
      200: "#e2e8f0",
      300: "#cbd5e0",
      400: "#a0aec0",
      500: "#718096",
      600: "#4a5568",
      700: "#2d3748",
      800: "#1a202c",
      900: "#171923",
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  },
  components: {
    // Button: buttonStyle,
    // Input: inputStyle,
    // Textarea: textAreaStyle,
    // Select: selectStyle,
    // Checkbox: checkboxStyle,
    // Radio: radioStyle,
    FormLabel: {
      baseStyle: {
        color: "black",
        fontWeight: "medium",
      },
    },
    FormErrorMessage: {
      baseStyle: {
        color: "red.300",
      },
    },
    Heading: {
      baseStyle: {
        textAlign: "center",
      },
    },
  },
  select: {
    baseStyle: {
      color: "black",
      fontWeight: "medium",
    },
  },
});

export default theme;
