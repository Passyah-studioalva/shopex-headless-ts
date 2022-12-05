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
  Grid,
} from "@chakra-ui/react";
import Cards from "../global/cards";

export default function BaseContent() {
  return (
    <>
      <Flex justifyContent="space-evenly" my={50}>
        <Grid color="white" templateColumns="repeat(3, 1fr)" gap={6}>
          {[...Array(6)].map((x, i) => (
            <Cards key={i} />
          ))}
        </Grid>
      </Flex>
    </>
  );
}
