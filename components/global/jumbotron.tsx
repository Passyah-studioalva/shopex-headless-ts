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
  Container,
} from "@chakra-ui/react";

export default function Jumbotron() {
  return (
    <article>
      <Center>
        <Image
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          width="full"
          height="75vh"
        />
      </Center>
    </article>
  );
}
