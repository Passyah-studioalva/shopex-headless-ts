import HeaderNavbar from "../components/header/navbar";
import BaseContent from "../components/base/content";
import Copyright from "../components/footer/copyright";

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
