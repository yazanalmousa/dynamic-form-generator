export const buttonStyle = {
  baseStyle: {
    fontWeight: "bold",
  },
  sizes: {
    xl: {
      h: "56px",
      fontSize: "lg",
      px: "32px",
    },
  },
  variants: {
    "with-shadow": {
      bg: "red.600",
      color: "white",
      boxShadow: "0 0 2px 2px rgba(255, 255, 255, 0.1)",
      _hover: {
        bg: "red.500",
        boxShadow: "0 0 4px 2px rgba(255, 255, 255, 0.15)",
      },
    },

    sm: {
      bg: "teal.600",
      color: "white",
      fontSize: "md",
      _hover: {
        bg: "teal.500",
      },
      _active: {
        bg: "teal.700",
      },
    },
  },
  defaultProps: {
    size: "lg",
    variant: "sm",
    colorScheme: "teal",
  },
};
