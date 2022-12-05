import TopNavbar from "../components/top/navbar";
import BaseContent from "../components/base/content";
import Copyright from "../components/footer/copyright";

export default function Home() {
  return (
    <>
      <header>
        <TopNavbar />
      </header>
      <main>
        <BaseContent />
      </main>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
