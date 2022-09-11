import React, { useEffect } from 'react';

import { Box, chakra, HStack, FormControl, FormLabel, Input, Button, FormErrorMessage, useToast, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    //
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <Box mx="auto" borderRadius={'5'} bg={'white'} px="5" py="5" shadow={'xl'} w="600px">
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={3}>
          <FormControl id="wsUrl" isInvalid={errors.wsUrl}>
            <HStack alignItems="center" justifyContent="center">
              <FormLabel w="125px" m="0">
                URL:
              </FormLabel>
              <Input size="sm" placeholder="websocket url" {...register('wsUrl', { required: 'Websocket is required!' })} />
              <FormErrorMessage>{errors.wsUrl?.message}</FormErrorMessage>
            </HStack>
          </FormControl>
          <FormControl id="username" isInvalid={errors.username}>
            <HStack alignItems="center" justifyContent="center">
              <FormLabel w="125px" m="0">
                USERNAME:
              </FormLabel>
              <Input size="sm" placeholder="username" {...register('username', { required: 'Username is required!' })} />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </HStack>
          </FormControl>
          <FormControl id="password" isInvalid={errors.password}>
            <HStack alignItems="center" justifyContent="center">
              <FormLabel w="125px" m="0">
                PASSWORD:
              </FormLabel>
              <Input size="sm" placeholder="password" {...register('password')} />
            </HStack>
          </FormControl>
          <FormControl id="topic" isInvalid={errors.topic}>
            <HStack alignItems="center" justifyContent="center">
              <FormLabel w="125px" m="0">
                TOPIC:
              </FormLabel>
              <Input size="sm" placeholder="topic" {...register('topic')} />
              <FormErrorMessage>{errors.topic?.message}</FormErrorMessage>
            </HStack>
          </FormControl>
          <HStack align="flex-end">
            <Button size="sm">Connect</Button>
            <Button size="sm">Subscribe</Button>
          </HStack>
        </VStack>
      </chakra.form>
    </Box>
  );
}
