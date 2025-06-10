export const selectStyle = {
  variants: {
    outline: {
      field: {
        bg: "black",
        borderColor: "black",
        color: "black",
        _hover: {
          borderColor: "black",
        },
        _focus: {
          borderColor: "black",
          boxShadow: "0 0 0 1px #319795",
        },
      },
    },
  },
  baseStyle: {
    field: {
      bg: "black",
      color: "black",
      option: {
        bg: "black",
        color: "red",
      },
    },
  },
};
