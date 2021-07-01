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
  const { getInputProps, getCheckboxProps } = useRadio(props);

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

const GenSelect = () => {
  const generations = ['1','2', '3','4','5', '6', '7', '8'];
  const setGen = useStore((state) => state.setGen);
  
  const { getRootProps: getRadioRootProps, getRadioProps } = useRadioGroup({
    name: "generation",
    defaultValue: '1',
    onChange: (val) => {
      setGen(val);
    },
  });

  return (
    <HStack {...getRadioRootProps()}>
      {generations.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} value={value} {...radio}>
            {`Gen ${value}`}
          </RadioCard>
        );
      })}
    </HStack>
  );
};

export default GenSelect;
