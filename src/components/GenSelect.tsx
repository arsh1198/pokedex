import * as React from "react";
import {
  HStack,
  Box,
  RadioProps,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useHistory, useLocation } from "react-router-dom";

const variants = {
  initial: {
    y: -50,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: -50,
  },
};

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
  const generations = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const currentGen = params.get("generation");
  const history = useHistory();

  const { getRootProps: getRadioRootProps, getRadioProps } = useRadioGroup({
    name: "generation",
    defaultValue: "1",
    value: currentGen ?? "1",
    onChange: (val) => {
      const params = new URLSearchParams({ generation: val });

      history.push({
        pathname: "/",
        search: params.toString(),
      });
    },
  });

  return (
    <motion.div
    // variants={variants}
    // initial="initial"
    // animate="animate"
    // exit="exit"
    >
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
    </motion.div>
  );
};

export default GenSelect;
