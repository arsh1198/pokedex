import * as React from "react";
import {
  HStack,
  Box,
  RadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import useStore from "../Store";

const RadioCard = (props: RadioProps) => {
  const { getInputProps, getCheckboxProps } =           useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        bg="#fff"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={1.5}
      >
        {props.children}
      </Box>
    </Box>
  );
};

const FilterOptions = () => {
  const options = ["Type", "Generation"];
  const setFilter = useStore((state) => state.setFilter);
  const setType = useStore((state) => state.setType);

  const { getRootProps: getRadioRootProps, getRadioProps } = useRadioGroup({
    name: "pokemonTypes",
    onChange: (val) => {
      setFilter(val);
      setType('');
    },
  });

  return (
    <HStack {...getRadioRootProps()}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default FilterOptions;