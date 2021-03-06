import Head from "next/head";
import Image from "next/image";
import { Flex, Input, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxW={360} bg="gray.800" p="8" borderRadius="8" flexDir="column">
        <Stack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="email">Nome:</FormLabel>
            <Input
              name="email"
              type="email"
              id="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Password:</FormLabel>
            <Input
              name="password"
              type="password"
              id="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>
          <Button type="submit" mt="6" colorScheme="pink">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
