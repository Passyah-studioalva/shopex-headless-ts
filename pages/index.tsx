import HeaderNavbar from "../components/header/navbar";
import BaseContent from "../components/base/content";
import Copyright from "../components/footer/copyright";
// import app from "next/app";
// const { DataType } = require("@shopify/shopify-api");
// import { Shopify } from "@shopify/shopify-api";

// app.get(
//   "/auth/shopify/success",
//   async (http_request: any, http_response: any) => {
//     http_response.send(
//       '<html><body><p>You have successfully authenticated and are back at your app.</p><p><a href="/products">View Products</a></p></body></html>'
//     );
//   }
// );

export default function Home() {
  return (
    <>
      <HeaderNavbar />

      <main>
        <BaseContent />
      </main>

      {/* <Copyright /> */}
    </>
  );
}
