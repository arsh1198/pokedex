import * as React from "react";
import {
  Box,
  HStack,
  CheckboxProps,
  useCheckbox,
  useCheckboxGroup,
  Flex,
} from "@chakra-ui/react";
import { PokemonType, pokemonTypes, typeStyles } from "../utils/pokemonTypes";
import * as Color from "color";

const CheckBoxCard = (props: CheckboxProps) => {
  const { getInputProps, getCheckboxProps } = useCheckbox(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const type = props.value as PokemonType;

  return (
    <Box as="label">
      <input {...input} />
      <Box
        bg="#fff"
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderColor={Color(typeStyles[type].color).alpha(0.5).toString()}
        color={Color(typeStyles[type].color).alpha(0.5).toString()}
        borderRadius="xl"
        boxShadow="md"
        _checked={{
          bg: Color(typeStyles[type].color).alpha(0.1).toString(),
          color: typeStyles[type].color,
          borderColor: typeStyles[type].color,
        }}
        px={3}
        py={1.5}
      >
        {`${typeStyles[type].emoji} `}
        {props.children}
      </Box>
    </Box>
  );
};

const TypeSelect = () => {
  const types = pokemonTypes;

  const { value: selectedTypes, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["🔥 fire"],
  });

  return (
    <HStack>
      {types.map((value) => {
        const checkbox = getCheckboxProps({ value });
        return (
          <CheckBoxCard bg="#fff" key={value} value={value} {...checkbox}>
            {value}
          </CheckBoxCard>
        );
      })}
    </HStack>
  );
};

export default TypeSelect;
