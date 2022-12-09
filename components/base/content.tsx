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
import Collection from "../global/collection";
import Jumbotron from "../global/jumbotron";

export default function BaseContent() {
  return (
    <Box margin="40px 40px 0 40px">
      <section>
        <Jumbotron />
      </section>
      <section>
        <Flex justifyContent="center" my={50}>
          <Grid color="white" templateColumns="repeat(3, 1fr)" gap={6}>
            {[...Array(3)].map((x, i) => (
              <Cards key={i} />
            ))}
          </Grid>
        </Flex>
      </section>
      <section>
        <Collection />
      </section>
    </Box>
  );
}
