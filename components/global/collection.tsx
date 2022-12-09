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
  GridItem,
} from "@chakra-ui/react";

export default function Collection() {
  return (
    <article>
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1} bg="tomato">
          {" "}
          <Image
            src="https://plus.unsplash.com/premium_photo-1669662846210-18b6151e3f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width="full"
            height="full"
            objectFit="cover"
          />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width="full"
            height="50vh"
          />
        </GridItem>
        <GridItem colSpan={2} bg="papayawhip">
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1670355522855-c04088eee115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width="full"
            height="50vh"
          />
        </GridItem>
        <GridItem colSpan={4} bg="tomato">
          {" "}
          <Image
            src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            width="full"
            height="50vh"
            objectFit="cover"
          />
        </GridItem>
      </Grid>
    </article>
  );
}
