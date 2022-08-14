import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import styles from "../styles/Home.module.css";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline title={props.title}>
        <code className={styles.code}>pages/{props.title}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
