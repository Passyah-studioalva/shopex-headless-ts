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
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
      <header>
        {" "}
        <Box boxShadow="xs" p="6" rounded="md" bg="white" display="flex">
          <Image
            borderRadius="full"
            boxSize="20px"
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            alt="Logo"
          />
        </Box>
      </header>
      <main>
        <Flex color="white">
          <Center w="full" h="full">
            <Card maxW="sm" my="20px">
              <CardBody>
                <Image
                  src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque
                    inspired spaces, earthy toned spaces and for people who love
                    a chic design with a sprinkle of vintage design.
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                  <Button variant="ghost" colorScheme="blue">
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </Center>
        </Flex>
      </main>
      <footer>
        {" "}
        <Box boxShadow="xs" p="6" rounded="md" bg="white">
          <Center w="full" h="full" bg="">
            <Text>Copyright December 2022 Shopex Website.</Text>
          </Center>
        </Box>
      </footer>
    </div>
  );
}
