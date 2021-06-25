import * as React from 'react'
import { Box,HStack, CheckboxProps, useCheckbox, useCheckboxGroup} from "@chakra-ui/react" 
import { pokemonTypes } from '../utils/pokemonTypes'
 
const CheckBoxCard = (props: CheckboxProps) => {
    const {getInputProps, getCheckboxProps} = useCheckbox(props)
    
    const input = getInputProps()
  const checkbox = getCheckboxProps()
    
    return <Box as='label'>
        <input {...input} />
        <Box
        bg='#fff'
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius='xl'
        boxShadow="md"
        _checked={{
          bg: "rgb(255, 82, 51, 0.1)",
          color: "rgb(255, 82, 51)",
          borderColor: "rgb(255, 82, 51)",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={3}
        py={1.5}
      >
        {props.children}
      </Box>
    </Box>;
}

const TypeSelect = () => {
  const types = pokemonTypes

  const { value: selectedTypes, getCheckboxProps } = useCheckboxGroup({ 
    defaultValue: ['🔥 fire']
   })

   return <HStack>
   {types.map((value) => {
     const checkbox = getCheckboxProps({ value,  })
     return (
       <CheckBoxCard bg='#fff' key={value} {...checkbox}>
         {value}
       </CheckBoxCard>
     )
   })}
 </HStack>
}
 
export default TypeSelect;