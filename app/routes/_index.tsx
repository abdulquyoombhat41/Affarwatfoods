import type { LinksFunction } from "@remix-run/node";
import styles from "../styles/root.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function Index() {
  return (
    <div data-div>
      <h1 data-header>Welcome to Affarwat Foods</h1>
    </div>
  );
}
