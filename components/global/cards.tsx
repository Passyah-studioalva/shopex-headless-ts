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
// import app from "next/app";
// const { DataType } = require("@shopify/shopify-api");
// const Shopify = require("@shopify/shopify-api").Shopify;

// app.get("/products", async (http_request: any, http_response: any) => {
//   const client_session = await Shopify.Utils.loadCurrentSession(
//     http_request,
//     http_response
//   );
//   console.log("client_session: " + JSON.stringify(client_session));

//   const client = new Shopify.Clients.Rest(
//     client_session.shop,
//     client_session.accessToken
//   );

//   const products = await client.get({
//     path: "products",
//   });
//   console.log("Products: " + JSON.stringify(products));

//   let product_names_formatted = "";
//   for (let i = 0; i < products.body.products.length; i++) {
//     product_names_formatted += "<p>" + products.body.products[i].title + "</p>";
//   }

//   http_response.send(`<html><body><p>Products List</p>
//         ${product_names_formatted}
//         </body></html>`);
// });

export default function Cards() {
  return (
    <article>
      <Card maxW="xl">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1515555230216-82228b88ea98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Living room Sofa</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
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
    </article>
  );
}
