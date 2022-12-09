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

export default function HeaderNavbar() {
  return (
    <nav>
      <Box
        boxShadow="xs"
        p="40px"
        rounded="md"
        bg="white"
        display="flex"
        justify-items="center"
        justifyContent="space-between"
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
    </nav>
  );
}
