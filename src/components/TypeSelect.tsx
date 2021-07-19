import * as React from "react";
import {
  Box,
  HStack,
  CheckboxProps,
  useCheckboxGroup,
  useRadio,
  useRadioGroup,
  RadioProps,
} from "@chakra-ui/react";
import { PokemonType, pokemonTypes, typeStyles } from "../utils/pokemonTypes";
import * as Color from "color";
import useStore from "../Store";
import { animate, motion } from "framer-motion";
import { useHistory } from "react-router-dom";

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

const CheckBoxCard = (props: RadioProps) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  const type = props.value as PokemonType;

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderColor={Color(typeStyles[type].color).alpha(0.3).toString()}
        color={Color(typeStyles[type].color).alpha(0.3).toString()}
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
  const history = useHistory();
  const { getRootProps: getRadioRootProps, getRadioProps } = useRadioGroup({
    name: "filters",
    onChange: (val) => {
      history.push({
        pathname: `/type/${val}`,
      });
    },
  });

  return (
    <motion.div
      variants={variants}
      transition={{
        y: { type: "spring", damping: 10, stiffness: 50 },
      }}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HStack {...getRadioRootProps()}>
        {types.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <CheckBoxCard key={value} value={value} {...radio}>
              {value}
            </CheckBoxCard>
          );
        })}
      </HStack>
    </motion.div>
  );
};

export default TypeSelect;
