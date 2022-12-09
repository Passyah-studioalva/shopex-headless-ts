import {
  Box,
  Flex,
  Center,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from "@chakra-ui/react";

export default function TopNavbar() {
  return (
    <>
      <Box
        boxShadow="xs"
        pt={5}
        pb={5}
        rounded="md"
        bg="white"
        display="flex"
        justify-items="center"
        justifyContent="space-between"
        margin="0 40px 0 40px"
      >
        <Image
          borderRadius="full"
          boxSize="20px"
          src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
          alt="Logo"
        />
        <Flex gap={10} fontWeight="bold">
          <Text>All</Text>
          <Text>New Arrivals</Text>
          <Text>Collection</Text>
          <Text>Featured</Text>
          <Text>Product</Text>
        </Flex>
        <Flex gap="20px" alignItems="center">
          <Text>Login</Text>
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://cdn-icons-png.flaticon.com/512/3750/3750627.png"
            alt="Logo"
          />
        </Flex>
      </Box>
    </>
  );
}
