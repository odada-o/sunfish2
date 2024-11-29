import { Box, useRadio } from '@chakra-ui/react';

// 1. Create a component that consumes the `useRadio` hook
const RadioCardTwo = (props) => {
    const { getInputPropsTwo, getRadioPropsTwo } = useRadio(props);

    const input = getInputPropsTwo();
    const checkbox = getRadioPropsTwo();

    return (
        <Box as='label'>
            <input {...input} />
            <Box
                {...checkbox}
                cursor='pointer'
                borderWidth='1px'
                borderRadius='md'
                boxShadow='md'
                _checked={{
                    bg: 'teal.600',
                    color: 'white',
                    borderColor: 'teal.600',
                }}
                _focus={{
                    boxShadow: 'outline',
                }}
                px={5}
                py={3}
            >
                {props.children}
            </Box>
        </Box>
    );
};

export default RadioCardTwo;
