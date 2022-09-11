import React, { useEffect, useState } from 'react';

import { Box, chakra, HStack, FormControl, FormLabel, Input, Button, FormErrorMessage, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const [connected, setConnect] = useState(false);
  const [subcribed, setSubcribe] = useState(false);
  // const toast = useToast();
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
    setConnect(true);
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
            </HStack>
            <FormErrorMessage ml="105px">{errors.wsUrl?.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="username" isInvalid={errors.username}>
            <HStack alignItems="center" justifyContent="center">
              <FormLabel w="125px" m="0">
                USERNAME:
              </FormLabel>
              <Input size="sm" placeholder="username" {...register('username', { required: 'Username is required!' })} />
            </HStack>
            <FormErrorMessage ml="105px">{errors.username?.message}</FormErrorMessage>
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
              <Input size="sm" placeholder="topic" {...register('topic', { required: 'Topic is required!' })} />
            </HStack>
            <FormErrorMessage ml="105px">{errors.topic?.message}</FormErrorMessage>
          </FormControl>
          <HStack align="flex-end">
            <Button type="submit" size="sm">
              {connected ? 'Connected' : 'Connect'}
            </Button>
            <Button size="sm">{subcribed ? 'Subscribed' : 'Subscribe'}</Button>
          </HStack>
        </VStack>
      </chakra.form>
    </Box>
  );
}
