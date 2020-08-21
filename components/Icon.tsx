import React from 'react';
import { Icon as ChakraIcon } from '@chakra-ui/core';

interface ChakraIconProps {
  name: string;
}

const Icon: React.FC<ChakraIconProps> = (props) => {
  return (
    <ChakraIcon color='gray.700' fontSize='1em' marginTop={2} {...props} />
  );
};

export default Icon;
