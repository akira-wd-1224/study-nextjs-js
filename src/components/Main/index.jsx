import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import classes from "src/components/Main/Main.module.css";

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
