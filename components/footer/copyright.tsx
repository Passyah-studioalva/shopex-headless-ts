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

export default function Copyright() {
  return (
    <footer>
      <Box boxShadow="xs" p="6" rounded="md" bg="white">
        <Center w="full" h="full" bg="">
          <Text>Copyright December 2022 Shopex Website.</Text>
        </Center>
      </Box>
    </footer>
  );
}
