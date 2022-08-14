import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import classes from "./Main.module.css";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline title={props.title}>
        <code className={classes.code}>pages/{props.title}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
