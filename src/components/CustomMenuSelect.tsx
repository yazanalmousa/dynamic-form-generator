"use client";

import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { WidgetProps } from "@rjsf/utils";

const CustomMenuSelect = ({
  id,
  value,
  onChange,
  options,
  required,
  label,
}: WidgetProps) => {
  const enumOptions = options.enumOptions || [];

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        w="100%"
        textAlign="left"
      >
        {value || label || "Select an option"}
      </MenuButton>
      <MenuList bg="gray.800">
        {enumOptions.map((opt) => (
          <MenuItem
            key={opt.value}
            value={opt.value}
            onClick={() => onChange(opt.value)}
            _hover={{ bg: "gray.700" }}
            bg={value === opt.value ? "gray.700" : "gray.800"}
            color="white"
          >
            {opt.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CustomMenuSelect;
