import { text } from "./config";
import Burpee from "./pages/Burpee";
import utils from "./utils";

export default function App() {
  document.title = text.title;

  if (utils.isDarkMode()) {
    const link = document.getElementById("favicon") as HTMLAnchorElement;
    link.href = "src/assets/favicon-white.ico";
  }

  return (
    <>
      <Burpee />
    </>
  );
}
