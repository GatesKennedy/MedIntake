'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ChildProps } from '../../app/layout';
import theme from '../../config/theme';

const Provider = ({ children }: ChildProps) => {
	return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Provider;
